import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = 'https://gradescope-api-nine.vercel.app';

export async function POST(request: NextRequest) {
    try {
        // Get cookies from the incoming request
        const cookieHeader = request.headers.get('cookie');

        // Get course_id from request body
        const body = await request.json();
        const { course_id } = body;

        if (!course_id) {
            return NextResponse.json(
                { error: 'course_id is required' },
                { status: 400 }
            );
        }

        const response = await fetch(`${API_BASE_URL}/assignments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(cookieHeader && { 'Cookie': cookieHeader }),
            },
            body: JSON.stringify({ course_id }),
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch assignments' },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Assignments fetch error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
