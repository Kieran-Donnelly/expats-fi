import config from '@payload-config'
import { getPayload, type Payload } from 'payload'

import type { BusinessSubmission } from '@/payload-types'

export async function getMemberSubmissions(memberId: string | number, payload?: Payload): Promise<BusinessSubmission[]> {
  const cms = payload || await getPayload({ config })
  const result = await cms.find({
    collection: 'business-submissions',
    depth: 0,
    limit: 50,
    pagination: false,
    overrideAccess: true,
    sort: '-createdAt',
    where: { submittedBy: { equals: memberId } },
  })
  return result.docs
}
