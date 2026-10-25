// Only the brand icons we use, so the bundle stays small.
import { siAmazonwebservices,siApachekafka,siDocker,siExpress,siFlutter,siGit,siGithub,siGithubactions,siHibernate,siHuggingface,siJavascript,siLinkedin,siLinux,siMongodb,siMysql,siNodedotjs,siOpencv,siOpenjdk,siPandas,siPlotly,siPostgresql,siPython,siPytorch,siReact,siScikitlearn,siSpringboot,siStreamlit,siSympy } from 'simple-icons';

const icons = { siAmazonwebservices,siApachekafka,siDocker,siExpress,siFlutter,siGit,siGithub,siGithubactions,siHibernate,siHuggingface,siJavascript,siLinkedin,siLinux,siMongodb,siMysql,siNodedotjs,siOpencv,siOpenjdk,siPandas,siPlotly,siPostgresql,siPython,siPytorch,siReact,siScikitlearn,siSpringboot,siStreamlit,siSympy };

export function Icon({ name, color = 'currentColor', size = 24, ...rest }) {
  const si = icons[name];
  if (!si) return null;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden {...rest}>
      <path d={si.path} fill={color} />
    </svg>
  );
}
