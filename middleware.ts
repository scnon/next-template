import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { trpc } from './client/utils/trpc'
import { IUser } from './client/lib/types'

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

export async function middleware(request: NextRequest) {
	console.log('middleware', request.url)
	return NextResponse.next()
}
