import React, { useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';

const MizahaBokyComponent = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const mizahaboky = useSelector((state) => state.boky.mizahaBoky);
	const andininy = searchParams.get('andininy');
    const [fontSize, setFontSize] = useState(16);


	console.log(mizahaboky)
	const items = ['1', '2']
	const [zoomLevel, setZoomLevel] = useState(1);
	const contentRef = useRef(null);

	useEffect(() => {
		$.ajax({
			url: "http://127.0.0.1:8000/api/Login/",
			type: "POST",
			headers: {
			  "X-CSRFToken": $.cookie("csrftoken"),
			},
			data: {
			  username: username,
			  password: password,
			},
			success: function (response) {
			//   if (response.message == "Authentification réussie") {
			// 	Cookies.set('username', username, { expires: 7 }); 
			// 	navigate("/session",{ replace: true });
			//   } else {
			//   }
			},
			error: function (error) {
			//   console.log("Erreur:", error);
			//   console.log("Statut:", error.status);
			//   console.log("Message d'état:", error.statusText);
			//   if (error.responseJSON) {
			// 	console.log("Détails de l'erreur:", error.responseJSON);
			//   } else {
			// 	console.log("Réponse:", error.responseText);
			//   }
			},
		  });
	},[])

	const handleZoomIn = () => {
		setFontSize(fontSize + 2);
		if (contentRef.current) {
			contentRef.current.style.fontSize = `${fontSize + 2}px`;
		}
		};
	
	const handleZoomOut = () => {
	if (fontSize > 10) {
		setFontSize(fontSize - 2);
		if (contentRef.current) {
		contentRef.current.style.fontSize = `${fontSize - 2}px`;
		}
	}
	};
	return (
		<div className="bg-white relative">
		<div className=" h-[75vh]  overflow-y-scroll" >
			<span style={{
          fontSize: `${fontSize}px`,
          transformOrigin: 'top left',
          transition: 'font-size 0.2s ease-in-out, transform 0.2s ease-in-out',
        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis iure asperiores suscipit. Iste reiciendis asperiores consequatur quam officia nihil temporibus corporis saepe vitae soluta sed, ad excepturi doloribus aperiam culpa esse iusto, omnis quidem incidunt laborum velit?</span>
		</div>
		<div className="absolute bottom-2 right-2 flex space-x-2">
			<button
				className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md"
				onClick={handleZoomIn}
			>
				<FontAwesomeIcon icon={faSearchPlus} />
			</button>
			<button
				className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md"
				onClick={handleZoomOut}
			>
				<FontAwesomeIcon icon={faSearchMinus} />
			</button>
			</div>
</div>
	);
};

export default MizahaBokyComponent;
