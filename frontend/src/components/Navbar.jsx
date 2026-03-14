useEffect(() => {
try {
  const u = localStorage.getItem("authToken");
    setLoggedIn(!!u);
} catch (e) {
  setLoggedIn(false);
}

const handler = (ev) => {
  const detailsUser = ev?.detail?.user ?? null;
  setLoggedIn(!!detailUser);
};
window.addEventListener("authChanged", handler);

return () => window.removeEventListener("authChanged", handler);
}, []);



 <Link to= "/" className={navbarStyles.logoButton}>
                   <div className={navbarStyles.logoInner}>
                   <img
                 src={
                logoSrc ||
                "http://yt3.googleusercontent.com/eD5QJD-9uS--eKQcA-kDTCu1ZO4d7d7BTHLIVH-EySZtDVw3JZcc-bHHDOMvxys92F7rD8Kgfg=s900-c-k-c0x00ffffff-no-rj"
            }
            alt="QuizMaster logo"
            className={navbarStyles.logoImage}
            />
           </div>
        </Link>
