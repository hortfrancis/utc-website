import Icon from '../Icon';

interface NewsIconProps {
  size?: number;
}

export default function NewsIcon({
  size = 12
}: NewsIconProps) {

  const squares = [
    [
      { active: true },
      { active: true },
      { active: false },
      { active: false },
    ],
    [
      { active: true },
      { active: true },
      { active: false },
      { active: false },
    ],
    [
      { active: false },
      { active: false },
      { active: false },
      { active: false },
    ],
    [
      { active: false },
      { active: false },
      { active: false },
      { active: false },
    ],
    [
      { active: false },
      { active: false },
      { active: false },
      { active: false },
    ],
    [
      { active: false },
      { active: false },
      { active: false },
      { active: false },
    ],
    [
      { active: true },
      { active: true },
      { active: false },
      { active: false },
    ],
    [
      { active: true },
      { active: true },
      { active: false },
      { active: false },
    ],
    [
      { active: false },
      { active: false },
      { active: false },
      { active: false },
    ],
  ];

  const config = {
    squares,
    squareSize: size,
  };

  console.log('config in NewsIcon:', config);

  return (
    <Icon config={config} />
  );
}
