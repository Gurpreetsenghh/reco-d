import 'server-only'
import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

declare global {
  var prisma: PrismaClient | undefined
}

// 1. Initialize the native Postgres pool
const pool = new Pool({ connectionString: process.env.DATABASE_URL })

// 2. Attach the pool to the Prisma adapter
const adapter = new PrismaPg(pool)

// 3. Instantiate the client with the adapter to satisfy Prisma 7 requirements
export const client = globalThis.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = client
}