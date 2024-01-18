import Image from 'next/image';

import { config } from '@/config';

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-4 lg:px-10 w-full  max-w-5xl text-center tracking-wide text-xs gap-4 py-12 ">
      <p className="text-lg font-semibold">Nicolas Gonzalez</p>
      <div className="h-full bg-slate-400 " style={{ width: '1px' }} />
      <div className="flex gap-2 items-center justify-end flex-1">
        {config.socialMedia.map((socialMedia) => (
          <a
            key={socialMedia.name}
            className="hover:scale-105 opacity-70"
            href={socialMedia.url}
            rel="noreferrer"
            target="_blank"
          >
            <Image alt={socialMedia.name} height={30} src={socialMedia.image} width={30} />
          </a>
        ))}
      </div>
    </footer>
  );
}
