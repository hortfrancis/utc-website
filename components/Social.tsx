import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import YouTubeIcon from './icons/YouTubeIcon';

interface SocialProps {
  platform: 'linkedin' | 'instagram' | 'youtube';
}

export default function Social({ platform }: SocialProps) {

  const linkedInUrl = 'https://www.linkedin.com/company/urbantechcreative/';
  const instagramUrl = 'https://www.instagram.com/urbantechcreative/';
  const youtubeUrl = 'https://www.youtube.com/@xlwerks6486';

  const buttonStyle = 'hover:text-white';

  if (platform === 'linkedin') {
    return (
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className={buttonStyle}>
        <LinkedInIcon />
      </a>
    );
  }

  if (platform === 'instagram') {
    return (
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={buttonStyle}>
        <InstagramIcon />
      </a>
    );
  }

  if (platform === 'youtube') {
    return (
      <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className={buttonStyle}>
        <YouTubeIcon />
      </a>
    );
  }

  return null;
}
