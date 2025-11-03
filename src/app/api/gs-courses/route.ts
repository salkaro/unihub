import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = 'https://gradescope-api-nine.vercel.app';

export async function GET(request: NextRequest) {
    try {
        // Get cookies from the incoming request
        const cookieHeader = request.headers.get('cookie');

        const response = await fetch(`${API_BASE_URL}/courses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(cookieHeader && { 'Cookie': cookieHeader }),
            },
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch courses' },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Courses fetch error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
