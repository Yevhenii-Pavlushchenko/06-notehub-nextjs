import css from "./Footer.module.css";

export default function Footer() { 
    return (
        <footer className={css.footer}>
            <div>
                <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
                <div>
                    <p>Developer : Yevhenii Pavlushchenko</p>
                    <p> <a href="mailto:student@notehub.app">student@notehub.app</a></p>
                </div>
            </div>
        </footer>
    )
}