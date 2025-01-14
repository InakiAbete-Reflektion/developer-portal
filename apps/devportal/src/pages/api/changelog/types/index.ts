// Interfaces
import { GetChangeTypes } from '@/../../packages/sc-changelog/changelog';
import ChangeType from '@/../../packages/sc-changelog/types/changeType';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangeType[]>) => {
  await GetChangeTypes().then((response: ChangeType[]) => {
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
    res.status(200).json(response);
  });
};

export default handler;
