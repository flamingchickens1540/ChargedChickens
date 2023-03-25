import { ADMIN_PASSWORD } from '$env/static/private';
import { json } from '@sveltejs/kit';
import { getAssignedRobotMatches, getRobotMatches } from '$lib/server-assets/scoutQueue';

export const POST = async (event: Request) => {
    if (event.headers.get('ADMIN_PASSWORD') !== ADMIN_PASSWORD)
        return json({ success: false, error: 'Unauthorized' }, { status: 401 })
    
    return {assignedRobotMatches : getAssignedRobotMatches(), robotMatches :getRobotMatches() };
}