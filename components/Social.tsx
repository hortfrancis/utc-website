import LinkedInIcon from './icons/social/LinkedInIcon';
import InstagramIcon from './icons/social/InstagramIcon';
import YouTubeIcon from './icons/social/YouTubeIcon';

interface SocialProps {
  platform: 'linkedin' | 'instagram' | 'youtube';
}

export default function Social({ platform }: SocialProps) {

  const linkedInUrl = 'https://www.linkedin.com/company/urbantechcreative/';
  const instagramUrl = 'https://www.instagram.com/urbantechcreative/';
  const youtubeUrl = 'https://www.youtube.com/@xlwerks6486';

  const anchorStyle = 'w-4 h-4 sm:w-6 sm:h-6 hover:text-white';

  if (platform === 'linkedin') {
    return (
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className={anchorStyle}>
        <LinkedInIcon />
      </a>
    );
  }

  if (platform === 'instagram') {
    return (
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={anchorStyle}>
        <InstagramIcon />
      </a>
    );
  }

  if (platform === 'youtube') {
    return (
      <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className={anchorStyle}>
        <YouTubeIcon />
      </a>
    );
  }

  return null;
}
