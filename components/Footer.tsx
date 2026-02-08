import clsx from 'clsx';
import Icon from './Icon/Icon';
import Pressable from './Pressable/Pressable';

export const FOOTER_DATA_TESTID = 'Footer';

const SOCIAL_LINKS = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/urbantechcreative/', icon: 'linkedin' as const },
  { platform: 'Instagram', url: 'https://www.instagram.com/urbantechcreative/', icon: 'instagram' as const },
  { platform: 'YouTube', url: 'https://www.youtube.com/@xlwerks6486', icon: 'youtube' as const },
];

export default function Footer() {
  return (
    <footer data-testid={FOOTER_DATA_TESTID} className={clsx(
      'w-full',
      'mt-auto p-4',
      'flex flex-col sm:flex-row gap-4',
      'bg-theme-black text-theme-white/75',
      'text-left',
      'z-10' // Needed due to full-screen Cube positioning in Home page
    )}>
      <div className='ml-4 sm:ml-6 flex items-center gap-1'>
        <Icon name="copyright" size={16} weight="bold" />
        {new Date().getFullYear()} Urban Tech Creative
      </div>
      <div className={clsx(
        'ml-4 sm:ml-auto mr-10',
        'flex gap-4',
      )}>
        {SOCIAL_LINKS.map(({ platform, url, icon }) => (
          <Pressable
            key={platform}
            href={url}
            className="w-4 h-4 sm:w-6 sm:h-6 hover:text-white transition-colors duration-200"
            aria-label={`Visit Urban Tech Creative on ${platform}`}
          >
            <Icon name={icon} size={24} />
          </Pressable>
        ))}
      </div>
    </footer>
  );
}
