import { getOgImage } from '@/server/ogp';
import Image from 'next/image';
import { FC } from 'react';

const getImageUrl = async (siteUrl: string) => {
  // OG画像を取得
  const url = getOgImage(siteUrl);

  return url;
};

type Props = {
  url: string;
};

export const BookImage: FC<Props> = async ({ url }) => {
  const imageUrl = (await getImageUrl(url)) || 'https://placehold.jp/200x200.png';

  return (
    <div>{imageUrl && <Image src={imageUrl} alt="book image" width={200} height={200} />}</div>
  );
};
