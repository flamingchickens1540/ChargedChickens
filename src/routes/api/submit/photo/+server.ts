import { json } from '@sveltejs/kit'
import { IMAGE_HOST_PATH, IMAGE_STORAGE_PATH } from '$env/static/private'
import { writeFile } from 'fs'
import { randomUUID } from 'crypto'
import type { RequestEvent, RequestHandler } from './$types'
import type { EventKey, TeamKey } from '$lib/types'
import { getTeam, getEvent, insertImage } from '$lib/server-assets/database'

export const POST: RequestHandler = async (event: RequestEvent) => {
    const body = await event.request.formData()
    const photos = body.getAll('photo') as File[]
    const team_key = body.get('team_key') as TeamKey
    const event_key = body.get('match_key') as EventKey

    if (!(await validateInput(team_key, event_key)))
        return json({ success: false, error: 'Invalid input' })

    await Promise.all(
        photos.map(async (photo) => {
            const fileType = photo.type.substring(6, photo.type.length)

            if (!validatePhoto(photo, fileType)) {
                console.log("Invalid Photo")
                return
            }

            const fileName = randomUUID() + '.' + fileType

            console.log(IMAGE_STORAGE_PATH + fileName)

            writeFile(
                IMAGE_STORAGE_PATH + fileName,
                Buffer.from(await photo.arrayBuffer()),
                () => {
                    /* empty */
                } //this is a required input, but we don't care if it fails
            )

            insertImage(event_key, team_key, IMAGE_HOST_PATH + fileName)
        })
    )

    return json({ success: true, endpoint: 'photo' })
}

async function validateInput(
    team_key: TeamKey,
    event_key: EventKey
): Promise<boolean> {
    //eventkey checks
    if (event_key.match(/^\d{4}[A-Za-z]{4,6}$/) === null) return false
    // This isn't working for me
    // if ((await getEvent(event_key)) === null) return false

    //teamkey checks
    if (team_key.match(/^frc\d{3,5}$/) === null) return false
    // This isn't working for me
    // if ((await getTeam(team_key)) === null) return false

    return true
}

function validatePhoto(photo: File, fileType: string): boolean {
    //photo checks
    if (photo.size > 1000000000) return false
    if (fileType.match(/^(png|jpg|jpeg|gif|bmp|webp)$/) === null) return false

    return true
}
