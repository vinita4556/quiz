
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
     
    
     

 
