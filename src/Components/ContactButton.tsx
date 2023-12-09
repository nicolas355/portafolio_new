import { config } from '@/config';

import Button from './Button';

export default function ContactBtn() {
  return (
    <a className="uppercase" href={`mailto:${config.email}`} target="_blank">
      <Button>Contact me</Button>
    </a>
  );
}
