import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>{`© ${new Date().getFullYear()} SSDArtAlay`}</span>
      <Link
        secondary
        className={styles.link}
        href="https://instagram.com/daksh_jaiswal03?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
        target="_blank"
      >
        Designed by yours truly
      </Link>
    </Text>
  </footer>
);
