import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDelete }) {
    function handleDeleteComment() {
        onDelete(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/ricardooliveirafilho.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ricardo Oliveira</strong>
                            <time title="29 de Junho às 09:56h" dateTime="2022-06-29 09:56:30">Cerca de 1h atrás</time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title="Deletar comentário"
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}