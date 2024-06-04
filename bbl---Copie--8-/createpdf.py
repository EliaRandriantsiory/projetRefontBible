from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter, inch
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    BaseDocTemplate,
    PageTemplate,
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Image,
    Table,
    TableStyle,
    PageBreak,Frame,
    
)



def create_cv():
    # Création d'un nouveau fichier PDF
    c = canvas.Canvas("cv.pdf")

    # Ajout du titre
    c.setFont("Helvetica-Bold", 16)
    c.drawString(50, 750, "Curriculum Vitae")

    # Ajout des informations personnelles
    c.setFont("Helvetica", 12)
    c.drawString(50, 700, "Nom: John Doe")
    c.drawString(50, 680, "Adresse: 123 Rue des Exemples")
    c.drawString(50, 660, "Ville: Paris")
    c.drawString(50, 640, "Email: johndoe@example.com")
    c.drawString(50, 620, "Téléphone: 123456789")

    # Ajout de l'expérience professionnelle
    c.setFont("Helvetica-Bold", 14)
    c.drawString(50, 580, "Expérience Professionnelle")

    c.setFont("Helvetica", 12)
    c.drawString(50, 550, "Entreprise: ABC Inc.")
    c.drawString(50, 530, "Poste: Développeur Web")
    c.drawString(50, 510, "Durée: 2010 - 2015")
    c.drawString(50, 490, "Description: Responsable du développement et de la maintenance des sites web.")

    # Ajout de la formation
    c.setFont("Helvetica-Bold", 14)
    c.drawString(50, 450, "Formation")

    c.setFont("Helvetica", 12)
    c.drawString(50, 420, "Diplôme: Baccalauréat en Informatique")
    c.drawString(50, 400, "Établissement: Université XYZ")
    c.drawString(50, 380, "Année d'obtention: 2010")

    # Fermeture du fichier PDF
    c.save()
    
def create_cv_with_textboxes():
    # Création d'un nouveau fichier PDF
    doc = SimpleDocTemplate("cv_with_textboxes.pdf", pagesize=letter)

    # Définition des styles de paragraphe
    styles = getSampleStyleSheet()
    title_style = styles["Title"]
    normal_style = styles["Normal"]

    # Liste pour stocker les éléments du contenu du CV
    cv_content = []

    # Ajout du titre
    cv_content.append(Paragraph("<u>Curriculum Vitae</u>", title_style))
    cv_content.append(Spacer(1, 20))

    # Ajout des informations personnelles
    cv_content.append(Paragraph("<b>Informations Personnelles</b>", normal_style))
    cv_content.append(Spacer(1, 10))

    cv_content.append(Paragraph("Nom:", normal_style))
    cv_content.append(Paragraph("<u><i>Entrez votre nom ici</i></u>", normal_style))
    cv_content.append(Spacer(1, 10))

    cv_content.append(Paragraph("Adresse:", normal_style))
    cv_content.append(Paragraph("<u><i>Entrez votre adresse ici</i></u>", normal_style))
    cv_content.append(Spacer(1, 10))

    cv_content.append(Paragraph("Ville:", normal_style))
    cv_content.append(Paragraph("<u><i>Entrez votre ville ici</i></u>", normal_style))
    cv_content.append(Spacer(1, 10))

    cv_content.append(Paragraph("Email:", normal_style))
    cv_content.append(Paragraph("<u><i>Entrez votre email ici</i></u>", normal_style))
    cv_content.append(Spacer(1, 10))

    cv_content.append(Paragraph("Téléphone:", normal_style))
    cv_content.append(Paragraph("<u><i>Entrez votre numéro de téléphone ici</i></u>", normal_style))
    cv_content.append(Spacer(1, 20))

    # Ajout de l'expérience professionnelle
    cv_content.append(Paragraph("<b>Expérience Professionnelle</b>", normal_style))
    cv_content.append(Spacer(1, 10))

    cv_content.append(Paragraph("Entreprise:", normal_style))
    cv_content.append(Paragraph("<u><i>Entrez le nom de l'entreprise ici</i></u>", normal_style))
    cv_content.append(Spacer(1, 10))

    cv_content.append(Paragraph("Poste:", normal_style))
    cv_content.append(Paragraph("<u><i>Entrez votre poste ici</i></u>", normal_style))
    cv_content.append(Spacer(1, 10))

    cv_content.append(Paragraph("Durée:", normal_style))
    cv_content.append(Paragraph("<u><i>Entrez la durée ici</i></u>", normal_style))
    cv_content.append(Spacer(1, 10))

    cv_content.append(Paragraph("Description:", normal_style))
    cv_content.append(Paragraph("<u><i>Entrez la description ici</i></u>", normal_style))
    cv_content.append(Spacer(1, 20))

    # Ajout de la formation
    cv_content.append(Paragraph("<b>Formation</b>", normal_style))
    cv_content.append(Spacer(1, 10))

    cv_content.append(Paragraph("Diplôme:", normal_style))
    cv_content.append(Paragraph("<u><i>Entrez votre diplôme ici</i></u>", normal_style))
    cv_content.append(Spacer(1, 10))

    cv_content.append(Paragraph("Établissement:", normal_style))
    cv_content.append(Paragraph("<u><i>Entrez le nom de l'établissement ici</i></u>", normal_style))
    cv_content.append(Spacer(1, 10))

    cv_content.append(Paragraph("Année d'obtention:", normal_style))
    cv_content.append(Paragraph("<u><i>Entrez l'année d'obtention ici</i></u>", normal_style))

    # Ajout du contenu du CV au document
    doc.build(cv_content)

def create_modern_cv():
    # Création d'un nouveau fichier PDF
    doc = SimpleDocTemplate("cv_modern.pdf", pagesize=letter)

    # Définition des styles de paragraphe
    styles = getSampleStyleSheet()
    title_style = styles["Title"]
    normal_style = styles["Normal"]

    # Liste pour stocker les éléments du contenu du CV
    cv_content = []

    # Ajout de la photo de profil
    photo = "photoProfile.png"  # Chemin vers la photo de profil
    cv_content.append(Image(photo, width=100, height=100))
    cv_content.append(Spacer(1, 20))

    # Ajout des informations personnelles
    cv_content.append(Paragraph("<b>Informations Personnelles</b>", title_style))
    cv_content.append(Spacer(1, 10))

    personal_info = [
        ["<b>Nom:</b>", "<i>Entrez votre nom ici</i>"],
        ["<b>Adresse:</b>", "<i>Entrez votre adresse ici</i>"],
        ["<b>Ville:</b>", "<i>Entrez votre ville ici</i>"],
        ["<b>Email:</b>", "<i>Entrez votre email ici</i>"],
        ["<b>Téléphone:</b>", "<i>Entrez votre numéro de téléphone ici</i>"],
    ]
    table_style = TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, 0), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 12),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('TOPPADDING', (0, 0), (-1, 0), 12),
    ])
    cv_content.append(Table(personal_info, style=table_style))
    cv_content.append(Spacer(1, 20))

    # Ajout des badges d'entreprises
    cv_content.append(Paragraph("<b>Expérience Professionnelle</b>", title_style))
    cv_content.append(Spacer(1, 10))

    badges = ["badge1.png", "badge2.png", "badge3.png"]  # Chemins vers les badges d'entreprises

    for badge in badges:
        cv_content.append(Image(badge, width=50, height=50))
        cv_content.append(Spacer(1, 10))

    cv_content.append(Spacer(1, 20))

    # Ajout du contenu du CV au document
    doc.build(cv_content)

class TwoColumnDocTemplate(BaseDocTemplate):
    def __init__(self, filename, **kwargs):
        super().__init__(filename, **kwargs)
        self.width, self.height = letter
        self.column_width = (self.width - self.leftMargin - self.rightMargin - self.gutter) / 2
        self.addPageTemplates(self._create_page_template())

    def _create_page_template(self):
        frame1 = Frame(
            self.leftMargin,
            self.bottomMargin,
            self.column_width,
            self.height - self.topMargin - self.bottomMargin,
            id="col1",
        )
        frame2 = Frame(
            self.leftMargin + self.column_width + self.gutter,
            self.bottomMargin,
            self.column_width,
            self.height - self.topMargin - self.bottomMargin,
            id="col2",
        )
        return [
            PageTemplateWithFrames(frames=[frame1, frame2], id="twoColumn"),
        ]

class PageTemplateWithFrames(object):
    def __init__(self, frames, id):
        self.frames = frames
        self.id = id

    def __call__(self, canv, doc):
        canv.saveState()
        for frame in self.frames:
            canv.setFont("Helvetica", 10)
            canv.setStrokeColor(colors.lightgrey)
            canv.setLineWidth(0.5)
            canv.rect(frame._x, frame._y, frame._width, frame._height)
        canv.restoreState()

def create_modern_cv():
    # Création d'un nouveau fichier PDF avec deux colonnes
    doc = TwoColumnDocTemplate("cv_modern.pdf", pagesize=letter)

    # Définition des styles de paragraphe
    styles = getSampleStyleSheet()
    title_style = styles["Title"]
    normal_style = styles["Normal"]

    # Liste pour stocker les éléments du contenu du CV
    cv_content = []

    # Ajout de la photo de profil dans la première colonne
    photo = "photoProfile.png"  # Chemin vers la photo de profil
    cv_content.append(Image(photo, width=100, height=100))
    cv_content.append(Spacer(1, 20))

    # Ajout des informations personnelles dans la première colonne
    cv_content.append(Paragraph("<b>Informations Personnelles</b>", title_style))
    cv_content.append(Spacer(1, 10))

    personal_info = [
        ["<b>Nom:</b>", "<i>Entrez votre nom ici</i>"],
        ["<b>Adresse:</b>", "<i>Entrez votre adresse ici</i>"],
        ["<b>Ville:</b>", "<i>Entrez votre ville ici</i>"],
        ["<b>Email:</b>", "<i>Entrez votre email ici</i>"],
        ["<b>Téléphone:</b>", "<i>Entrez votre numéro de téléphone ici</i>"],
    ]
    table_style = TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, 0), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 12),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('TOPPADDING', (0, 0), (-1, 0), 12),
    ])
    cv_content.append(Table(personal_info, style=table_style))
    cv_content.append(Spacer(1, 20))

    # Ajout des badges d'entreprises dans la deuxième colonne
    cv_content.append(Paragraph("<b>Expérience Professionnelle</b>", title_style))
    cv_content.append(Spacer(1, 10))

    badges = ["badge1.png", "badge2.png", "badge3.png"]  # Chemins vers les badges d'entreprises

    for badge in badges:
        cv_content.append(Image(badge, width=50, height=50))
        cv_content.append(Spacer(1, 10))

    cv_content.append(Spacer(1, 20))

    # Ajout du contenu du CV au document
    doc.addPageTemplates(doc._create_page_template())
    doc.build(cv_content)

# Appel de la fonction pour créer le CV moderne
create_modern_cv()

#create_modern_cv()
#create_cv_with_textboxes()
#create_cv()