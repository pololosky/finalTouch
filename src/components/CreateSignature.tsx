"use client";
import React, { act, Suspense, useEffect, useState } from "react";
import ImputCase from "./ImputCase";
import {
  Eye,
  ImageDown,
  Info,
  LayoutTemplate,
  ReceiptText,
} from "lucide-react";
import { TemplateProps } from "@/types/TemplatesProps";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import { toPng } from "html-to-image";

// les templates
const templates = [
  { id: "1", name: "template 1", Component: Template1 },
  { id: "2", name: "template 2", Component: Template2 },
  { id: "3", name: "template 3", Component: Template3 },
];

const CreateSignature = () => {
  // pour changer les contenus
  const [activeContent, setActiveContent] = useState("content1");
  // Fonction pour changer le contenu
  const handleButtonClick = (contentId: React.SetStateAction<string>) => {
    setActiveContent(contentId);
  };

  //pour les views de la partie 2
  const [activePart2Content, setActivePart2Content] = useState("view");
  const handlePart2ButtonClick = (contentId: React.SetStateAction<string>) => {
    setActivePart2Content(contentId);
  };

  // ------------------------ pour la gestion des templates -------------------------------
  const [selectTemplate, setSelectTemplate] = useState(templates[0]);
  const [templateData, setTemplateData] = useState<TemplateProps>(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("templateData");
      if (savedData) {
        return JSON.parse(savedData);
      }
    }
    // Retourne les valeurs par défaut si rien n'est sauvegardé
    return {
      Lastname: "Smith",
      firstName: "Micheal",
      jobTitle: "Marketing manager",
      Departement: "Marketing service",
      company: "FinalTouch",
      Officephone: "111 444 333 444",
      MobilPhone: "111 444 333 444",
      website: "www.FinalTouch.com",
      email: "follivios@gmail.com",
      Adresse: "Lome Togo",
      PersonnalImage: "/profile.svg",
      LogoImage: "/icon.svg",
      HandWrittingImage: "",
      Instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/@pololosky005",
      LinkedIn: "https://www.linkedin.com/",
      WhatsApp: "https://www.whatsapp.com/",
    };
  });
  // pour modifier le template selectionner
  const handleTemplateChange = (template: any) => {
    setSelectTemplate(template);
  };
  // pour recuperer les changement dans les input
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTemplateData({ ...templateData, [name]: value });
  };

  // -------------------------- pour le telechargement  ---------------------------------
  //
  // la fonction permettant de telecharger en PNG
  const exportAsPng = () => {
    const node = document.getElementById("signature-preview");
    if (node) {
      toPng(node).then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "signature.png";
        link.href = dataUrl;
        link.click();
      });
    }
  };

  // -------------------------- Sauvegarde locale des donnees ----------------------------
  // Sauvegarder dans localStorage à chaque modification
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("templateData", JSON.stringify(templateData));
      console.log("Données sauvegardées :", templateData);
    }
  }, [templateData]);

  return (
    <div className="flex xl:flex-row lg:flex-col md:flex-col flex-col gap-3 bg-base-200 md:p-2 p-1 xl:mt-0 lg:mt-0 md:mt-5 sm:mt-20 mt-15 rounded-xl">
      {/* la gauche */}
      <div className="xl:w-2/5 lg:w-full md:w-full w-full px-2 pb-2 xl:max-h-148 lg:max-h-148 md:max-h-200 sm:max-h-240 max-h-148 overflow-y-auto rounded-xl">
        {/* les boutons */}
        <div className="button-group grid grid-cols-3 sticky rounded-t-xl top-0 z-1 p-2 bg-base-300 w-full items-center gap-1 justify-center">
          <button
            className={`btn md:text-lg text-sm rounded-lg ${
              activeContent === "content1" ? "btn-accent" : ""
            }`}
            onClick={() => handleButtonClick("content1")}
          >
            Details <ReceiptText />
          </button>
          <button
            className={`btn md:text-lg text-sm rounded-lg ${
              activeContent === "content2" ? "btn-accent" : ""
            }`}
            onClick={() => handleButtonClick("content2")}
          >
            Images <ImageDown />
          </button>
          <button
            className={`btn md:text-lg text-sm rounded-lg ${
              activeContent === "content3" ? "btn-accent" : ""
            }`}
            onClick={() => handleButtonClick("content3")}
          >
            Templates <LayoutTemplate />
          </button>
        </div>
        {/* Div principale dont le contenu change */}
        <div className="content-container">
          {activeContent === "content1" && (
            <div className="content-1 flex flex-col px-1 gap-5">
              <h1 className="flex w-full justify-center md:text-2xl text-xl mt-3">
                fill in your details
              </h1>
              {/*  */}
              <div className="flex flex-col gap-1">
                <p className="md:text-xl text-lg text-accent">
                  enter your informations
                </p>
                <hr />
              </div>
              {/* infos perso */}
              <div className="flex flex-col gap-5">
                {/* nom et prenom */}
                <div className="flex justify-between items-center gap-3">
                  <ImputCase width="w-1/3">
                    <label htmlFor="Name" className="flex text-right w-full">
                      name <span className="text-error">(obligatory)</span>
                    </label>
                    <input
                      name="Lastname"
                      value={templateData.Lastname}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="Smith"
                      className="input w-full input-accent"
                    />
                  </ImputCase>
                  <ImputCase width="md:w-3/5 w-2/3">
                    <label htmlFor="Name" className="flex text-right w-full">
                      first name{" "}
                      <span className="text-error">(obligatory)</span>
                    </label>
                    <input
                      name="firstName"
                      value={templateData.firstName}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="Micheal"
                      className="input input-accent w-full"
                    />
                  </ImputCase>
                </div>
                {/* part02 */}
                <div className="flex justify-between items-center gap-3">
                  <ImputCase width="w-1/3">
                    <label htmlFor="Name" className="flex text-right w-full">
                      job Title
                    </label>
                    <input
                      name="jobTitle"
                      value={templateData.jobTitle}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="Marketing manager"
                      className="input w-full input-accent"
                    />
                  </ImputCase>
                  <ImputCase width="md:w-3/5 w-2/3">
                    <label htmlFor="Name" className="flex text-right w-full">
                      Service or department
                    </label>
                    <input
                      name="Departement"
                      value={templateData.Departement}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="Marketing service"
                      className="input input-accent w-full"
                    />
                  </ImputCase>
                </div>
                {/* part03 nom de l'entreprise */}
                <div className="flex justify-between items-center gap-3">
                  <ImputCase width="w-full">
                    <label htmlFor="Name" className="flex text-right w-full">
                      Company or Organization Name
                    </label>
                    <input
                      name="company"
                      value={templateData.company}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="FinalTouch"
                      className="input w-full input-accent"
                    />
                  </ImputCase>
                </div>
                {/* numbers */}
                <div className="flex justify-between items-center gap-3">
                  <ImputCase width="w-1/2">
                    <label htmlFor="Name" className="flex text-right w-full">
                      Office phone number
                    </label>
                    <input
                      name="Officephone"
                      value={templateData.Officephone}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="111 444 333 444"
                      className="input w-full input-accent"
                    />
                  </ImputCase>
                  <ImputCase width="w-1/2">
                    <label htmlFor="Name" className="flex text-right w-full">
                      Mobil phone number
                    </label>
                    <input
                      name="MobilPhone"
                      value={templateData.MobilPhone}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="111 444 333 444"
                      className="input input-accent w-full"
                    />
                  </ImputCase>
                </div>
                {/*  */}
                <div className="flex justify-between items-center gap-3">
                  <ImputCase width="w-1/2">
                    <label htmlFor="Name" className="flex text-right w-full">
                      WebSite Url
                    </label>
                    <input
                      name="website"
                      value={templateData.website}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="www.FinalTouch.com"
                      className="input w-full input-accent"
                    />
                  </ImputCase>
                  <ImputCase width="w-1/2">
                    <label htmlFor="Name" className="flex text-right w-full">
                      Email Adress
                    </label>
                    <input
                      name="email"
                      value={templateData.email}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="finalTouch@gmail.com"
                      className="input input-accent w-full"
                    />
                  </ImputCase>
                </div>
                {/* addresse */}
                <div className="flex justify-between items-center gap-3">
                  <ImputCase width="w-full">
                    <label htmlFor="Name" className="flex text-right w-full">
                      Adresse
                    </label>
                    <textarea
                      name="Adresse"
                      value={templateData.Adresse}
                      onChange={(e) => handleInputChange(e)}
                      className="input w-full input-accent h-40"
                      id=""
                    ></textarea>
                  </ImputCase>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col gap-1">
                <p className="md:text-xl text-accent text-lg">
                  enter your social links
                </p>
                <hr />
              </div>
              {/* liens vers les reseaux */}
              <div className="flex flex-col gap-5">
                {/* link1 */}
                <div className="flex justify-between items-center gap-3">
                  <ImputCase width="w-1/2">
                    <label htmlFor="Name" className="flex text-right w-full">
                      LinkedIn
                    </label>
                    <input
                      name="LinkedIn"
                      value={templateData.LinkedIn}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="linkedin.com/in/johndoe-pro"
                      className="input w-full input-accent"
                    />
                  </ImputCase>
                  <ImputCase width="w-1/2">
                    <label htmlFor="Name" className="flex text-right w-full">
                      Facebook
                    </label>
                    <input
                      name="facebook"
                      value={templateData.facebook}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="facebook.com/techcompanyxyz"
                      className="input input-accent w-full"
                    />
                  </ImputCase>
                </div>
                {/* link2 */}
                <div className="flex justify-between items-center gap-3">
                  <ImputCase width="w-1/2">
                    <label htmlFor="Name" className="flex text-right w-full">
                      Twitter
                    </label>
                    <input
                      name="twitter"
                      value={templateData.twitter}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="twitter.com/jane_smith_dev"
                      className="input w-full input-accent"
                    />
                  </ImputCase>
                  <ImputCase width="w-1/2">
                    <label htmlFor="Name" className="flex text-right w-full">
                      Instagram
                    </label>
                    <input
                      name="Instagram"
                      value={templateData.Instagram}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="instagram.com/creative_agency"
                      className="input input-accent w-full"
                    />
                  </ImputCase>
                </div>
                {/* link3 */}
                <div className="flex justify-between items-center gap-3">
                  <ImputCase width="w-full">
                    <label htmlFor="Name" className="flex text-right w-full">
                      WhatsApp
                    </label>
                    <input
                      name="WhatsApp"
                      value={templateData.WhatsApp}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="FinalTouch"
                      className="input w-full input-accent"
                    />
                  </ImputCase>
                </div>
              </div>
            </div>
          )}

          {activeContent === "content2" && (
            <div>
              <h1 className="flex w-full justify-center md:text-2xl text-xl mt-3">
                fill in your details
              </h1>
              <div className="content-2 flex flex-col px-1 gap-5">
                {/*  */}
                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-lg text-accent">
                    enter your informations
                  </p>
                  <hr />
                </div>
                {/* more infos about droping image */}
                <div>
                  <h2 className="md:text-lg text-sm">
                    Add your profile picture or logo to enhance your email
                    signature!
                  </h2>
                </div>
                {/*  */}
                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-lg text-accent">
                    enter your informations
                  </p>
                  <hr />
                </div>
                {/* profime pic */}
                <div className="flex justify-between items-center gap-3">
                  <ImputCase width="w-full">
                    <label htmlFor="Name" className="flex text-right w-full">
                      Profile picture
                    </label>
                    <input
                      name="PersonnalImage"
                      value={templateData.PersonnalImage}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="https://fr.freepik.com/photos-gratuite/"
                      className="input w-full input-accent"
                    />
                  </ImputCase>
                </div>
                {/* logo */}
                <div className="flex justify-between items-center gap-3">
                  <ImputCase width="w-full">
                    <label htmlFor="Name" className="flex text-right w-full">
                      Enterprise logo
                    </label>
                    <input
                      name="LogoImage"
                      value={templateData.LogoImage}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="https://fr.freepik.com/photos-gratuite/"
                      className="input w-full input-accent"
                    />
                  </ImputCase>
                </div>
                {/*  */}
                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-lg text-accent">
                    Handwritten signature
                  </p>
                  <hr />
                </div>
                {/* more infos about handwritting signature */}
                <div>
                  <h2 className="md:text-lg text-sm">
                    Use your signature image from your own hosted website.
                  </h2>
                </div>
                {/* Handwritten */}
                <div className="flex justify-between items-center gap-3">
                  <ImputCase width="w-full">
                    <label htmlFor="Name" className="flex text-right w-full">
                      Handwritten signature Url
                    </label>
                    <input
                      name="HandWrittingImage"
                      value={templateData.HandWrittingImage}
                      onChange={(e) => handleInputChange(e)}
                      type="text"
                      placeholder="https://fr.freepik.com/photos-gratuite/"
                      className="input w-full input-accent"
                    />
                  </ImputCase>
                </div>
              </div>
            </div>
          )}

          {activeContent === "content3" && (
            <div className="content-3 p-2">
              <div className="grid grid-cols-2 gap-2">
                {templates.map((template) => (
                  <div className="w-full" key={template.id}>
                    <p className="text-xl">Template {template.id} </p>
                    <button
                      onClick={() => handleTemplateChange(template)}
                      className={`btn shadow-2xl w-full rounded-lg py-20 ${
                        selectTemplate.id === template.id
                          ? "btn-accent border border-base-200"
                          : ""
                      }`}
                    >
                      <div className="flex w-full bg-red-500 h-full flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                          <div className="flex flex-col gap-4">
                            <div className="skeleton h-4 w-20"></div>
                            <div className="skeleton h-4 w-28"></div>
                          </div>
                        </div>
                        <div className="skeleton h-32 w-full"></div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* la droite */}
      <div className="xl:w-3/5 lg:w-full md:w-full w-full xl:block lg:hidden md:hidden sm:hidden hidden px-2 pb-2 max-h-148 bg-accent overflow-y-auto rounded-xl">
        {/* les bouttons */}
        <div className="button-group grid grid-cols-2 sticky rounded-t-xl top-0 z-1 p-2 w-full items-center gap-3 justify-center">
          <button
            className={`btn md:text-lg text-sm rounded-lg ${
              activePart2Content === "view" ? "" : "btn-accent"
            }`}
            onClick={() => handlePart2ButtonClick("view")}
          >
            View <Eye />
          </button>
          <button
            className={`btn md:text-lg text-sm rounded-lg ${
              activePart2Content === "models" ? "" : "btn-accent"
            }`}
            onClick={() => handlePart2ButtonClick("models")}
          >
            Informations <Info />
          </button>
        </div>
        <div className="content-container">
          {activePart2Content === "view" && (
            <div className="content-1 flex h-120 flex-col px-1 gap-5">
              <h1 className="flex w-full justify-center md:text-2xl text-xl mt-3">
                fill in your details
              </h1>
              <div className="flex-1 flex justify-center items-center bg-base-200 rounded-xl">
                <div
                  className="bg-base-100 w-19/20 shadow-md rounded-xl"
                  id="signature-preview"
                >
                  <selectTemplate.Component post={templateData} />
                </div> 
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={exportAsPng}
                  className="btn rounded-lg  xl:text-xl lg:text-xl md:text-lg text-lg"
                >
                  Generate image
                </button>
                <button className="btn rounded-lg  xl:text-xl lg:text-xl md:text-lg text-lg">
                  Copy the code
                </button>
                <button className="btn rounded-lg  xl:text-xl lg:text-xl md:text-lg text-lg">
                  Copy signature
                </button>
              </div>
            </div>
          )}

          {activePart2Content === "models" && (
            <div className="content-3 p-2"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateSignature;
