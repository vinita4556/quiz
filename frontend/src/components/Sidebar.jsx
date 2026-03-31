
const API_BASE = "http://localhost:5000";

const Sidebar = () => {

  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showPassword, setShowPassword] = useState({});
  const [showResults, setShowResults] = useState(false);

  const submittesRef = useRef(false);
  const [issidebarOpen, setIsSidebarOpen] = useState(false);
  const asideRef = useState(null);

 useEffect(() => {
   const handleResize = () => {
     if (window.innerWidth >=768) setIsSidebarOpen(true);
     else setIsSidebarOpen(false);
   };
   handleResize();
   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
 }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      if (isSidebarOpen) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "";
    }
    return() => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const technologies = [
    {
      id: "html",
      name: "HTML",
      icon: <Globe size={20} />,
      color: "bg-orange-50 text-orange-600 border-orange-200",
    },
    {
       id: "css",
      name: "CSS",
      icon: <Layout size={20} />,
      color: "bg-blue-50 text-orange-600 border-orange-200",
    },
    {
       id: "js",
      name: "JavaScript",
      icon: <Code size={20} />,
      color: "bg-yellow-50 text-orange-600 border-orange-200",
    },
    {
      
      
  
     
    
     

 
