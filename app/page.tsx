import Master from "@/components/master/Master";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Master />
      </main>
    </div>
  );
}
