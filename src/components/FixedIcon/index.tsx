import styles from "./styles.module.scss";
import { isContinueStatement } from "@babel/types";

interface FixedIconsProps {
  imgUrl: string;
  action: () => void;
}

export default function FixedIcons({ icons }: { icons: FixedIconsProps[] }) {
  return (
    <div className={styles.fixedContainer}>
      {icons.map((icon) => {
        return (
          <button onClick={icon.action}>
            <img src={icon.imgUrl} alt="" />
          </button>
        );
      })}
    </div>
  );
}
