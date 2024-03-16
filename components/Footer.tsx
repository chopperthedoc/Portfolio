import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex justify-center space-x-4 pt-20 pb-4">
      <Link
        href="https://github.com/chopperthedoc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={45} className="transition-transform hover:scale-110" />
      </Link>
      <Link
        href="https://www.instagram.com/filip.ores"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          size={45}
          className="transition-transform hover:scale-110"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={45}
          className="transition-transform hover:scale-110"
        />
      </Link>
    </footer>
  );
}

export default Footer;
