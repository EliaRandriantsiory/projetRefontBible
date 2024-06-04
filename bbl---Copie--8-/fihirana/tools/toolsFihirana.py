import json,os
from ..models import *

class fihirana_G:
    def r_OrdDiff(ord_dif):
        
        ord_dif = ord_dif.replace(' "', "")
        ord_dif = ord_dif.replace('"', "")
        ord_dif = ord_dif.replace("[", "")
        ord_dif = ord_dif.replace("]", "")
        ord_dif = ord_dif.replace(" '", "")
        ord_dif = ord_dif.replace("',", ",")
        ord_dif = ord_dif.replace(' ', "")
        if ord_dif.startswith("'"):
            # print("oui")
            ord_dif = ord_dif[1:-1]
        return ord_dif

    def r_printContent(contents):
        ctn=[]
        ord = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "1.1",
            "1.2",
            "2.2",
            "2.1",
            "3.1",
            "4.1",
            "5.1",
            "Isan'andininy.1",
            "Isan'andininy.2",
            "Isan'andininy.3",
            "Isan'andininy.4",
            "isan'andininy.1",
            "isan'andininy.3",
            "isan'andininy.4",
            "isan'andininy.2",
            "1. (In-2)",
            "2. (In-2)",
            "3. (In-2)",
            "4. (In-2)",
            "5. (In-2)",
            "6. (In-2)",
            "7. (In-2)",
            "8. (In-2)",
            "9. (In-2)",
            "1.",
            "2.",
            "3.",
            "4.",
            "5.",
            "6.",
            "7.",
            "8.",
            "9",
            "Ref",
            "ref",
            "ref2",
            "ref3",
            "ref.1",
            "ref.2",
            "ref.3",
            "ref.4",
            "ref.1",
            "ref.3",
            "ref.4",
            "ref.2",
            "Ref.1",
            "Ref.2",
            "Ref.3",
            "Ref.4",
            "Ref.1",
            "Ref.3",
            "Ref.4",
            "Ref.2",
            'Isan’andininy',
            "Isan'andininy",
            "isan'andininy",
            "Isan'andininy2",
            "Isan’andininy: (Bis)",
            "",
            "Isan’andininy: ",
            "Isan’andininy : (in 2)",
            "Isan’andininy :",
            "Isan ’andininy:",
            "fin",
        ]
        for content in contents:
            content = str(content).split("\n")

            ctn_ = []
            for cttn in content:
                if cttn in ord:
                    pass
                else:
                    ctn_.append(cttn)
            ctn.append(ctn_)
        return ctn
    
    def r_saveToDbContent():
        ord = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "1.1",
            "1.2",
            "2.2",
            "2.1",
            "3.1",
            "4.1",
            "5.1",
            "Isan'andininy.1",
            "Isan'andininy.2",
            "Isan'andininy.3",
            "Isan'andininy.4",
            "isan'andininy.1",
            "isan'andininy.3",
            "isan'andininy.4",
            "isan'andininy.2",
            "1. (In-2)",
            "2. (In-2)",
            "3. (In-2)",
            "4. (In-2)",
            "5. (In-2)",
            "6. (In-2)",
            "7. (In-2)",
            "8. (In-2)",
            "9. (In-2)",
            "1.",
            "2.",
            "3.",
            "4.",
            "5.",
            "6.",
            "7.",
            "8.",
            "9",
            "Ref",
            "ref",
            "ref2",
            "ref3",
            "ref.1",
            "ref.2",
            "ref.3",
            "ref.4",
            "ref.1",
            "ref.3",
            "ref.4",
            "ref.2",
            "Ref.1",
            "Ref.2",
            "Ref.3",
            "Ref.4",
            "Ref.1",
            "Ref.3",
            "Ref.4",
            "Ref.2",
            "Isan'andininy",
            "isan'andininy",
            "Isan'andininy2",
            "Isan’andininy: (Bis)",
            "",
            "Isan’andininy: ",
            "Isan’andininy : (in 2)",
            "Isan’andininy :",
            "Isan ’andininy:",
            "fin",
        ]

        return
    
    def view_ajout_fihirana(iid):
        fhrn_ttr = fhrn_ajout.objects.get(id=iid)
        json_ttr = fhrn_ttr.Titre
        artiste = fhrn_ttr.Artiste
        
        
        json_ttr={json_ttr}
        content = eval(fhrn_ttr.content)
        fh_ord = fhrn_ttr.ord_dif

        fhi = []
        for fh_ in eval(fh_ord):
            fhi.append("".join(content[fh_]))
        fi = "\n\n".join(fhi)
        fhi_ = f"{json_ttr}\n\n {fi}"
        # print(ord_dif)
        print(json_ttr, fhi)
        return json_ttr, fhi

    def mod_ajout_fihirana(iid):
        fhrn_ttr = fhrn_ajout.objects.get(id=iid)
        json_ttr = fhrn_ttr.Titre
        cles = fhrn_ttr.Clés
        content = eval(fhrn_ttr.content)
        fh_ord = fhrn_ttr.ord_dif

        return json_ttr, content, fh_ord, cles

    def fhrn1(fhr):
        fhrn_ttr = list_fihirana1.objects.filter(Range_file=int(fhr)).first()
        json_ttr = fhrn_ttr.Titre
        cles = fhrn_ttr.Clés

        fhrn_ = fihirana1.objects.all()
        
        json_str = fhrn_[int(fhr)].Content
        ord_dif = fhrn_[int(fhr)].ord_diff
        
        data_content = eval(json_str)
        fh = data_content
    
       
            #fhi.append("".join(fh[fh_]))
        #print(type(ord_dif))
        
        #ord_dif = fihirana_G.r_OrdDiff(ord_dif).split(",")
        
        ttr = f"{json_ttr.upper()}"

        fhi = []
        for ord in eval(ord_dif):
            print(ord)
            fhi.append("".join(fh[ord]))

        return ttr, fhi, cles

    def fhrn1_mod(fhr_):
        if len(str(fhr_)) == 1:
            fhr = f"00{fhr_}"
        elif len(str(fhr_)) == 2:
            fhr = f"0{fhr_}"
        else:
            fhr = fhr_

        fhrn_ttr = list_fihirana1.objects.get(Range_file=fhr_)
        json_ttr = fhrn_ttr.Titre
        cles = fhrn_ttr.Clés

        fhrn_ = fihirana1.objects.get(Titre=fhr)
        # fhrn_=eval(fhrn_)

        json_str = fhrn_.Content
        ord_dif = fhrn_.ord_diff
        data_content = eval(json_str)
        fh = data_content

        ttr = f"{json_ttr.upper()}"

        # print(ord_dif)
        return ttr, fh, ord_dif,cles

    def fhrn1_mod_etat(fhr):
        if len(fhr) == 1:
            fhr = f"00{fhr}"
        elif len(fhr) == 2:
            fhr = f"0{fhr}"
        else:
            fhr = fhr
        #print(fhr)
        fhrn_ttr = list_fihirana1.objects.get(Range_file=fhr)
        #print(fhrn_ttr)
        if fhrn_ttr:
            # json_ttr=fhrn_ttr(etat=True)
            # json_ttr.save()
            # print(json_ttr.etat)
            # fhrn_.save()
            pass
        else:
            print("mis à jour impossible")

    def fhrn2(fhr):
        fhrn_ttr = list_fihirana2.objects.filter(Range_file=int(fhr)).first()

        json_ttr = fhrn_ttr.Titre
        cles = fhrn_ttr.Clés
        fhrn_ = fihirana2.objects.all()
        if len(fhr) == 1:
            fhr = f"00{fhr}"
        elif len(fhr) == 2:
            fhr = f"0{fhr}"
        else:
            fhr = fhr
        for fhrn in fhrn_:
            
            if fhr == fhrn.Titre:
        #print((fhrn_[0].Titre))
                fl = fhrn
            
                break    
        
        json_str_content = fl.Content
        data_content = eval(json_str_content)
        fh = data_content
        ttr = str(json_ttr).upper()
        fh_ord = fl.ord_diff

        # print((fh_ord))
        # fh_ord=fh['ord']
        fhi = []
        for fh_ in eval(fh_ord):
            fhi.append("".join(fh[fh_]))
        fi = "\n\n".join(fhi)
        fhi_ = f"{ttr}\n\n {fi}"
        return ttr, fhi,cles

    def fhrn2_mod(fhr_):
        if len(str(fhr_)) == 1:
            fhr = f"00{fhr_}"
        elif len(str(fhr_)) == 2:
            fhr = f"0{fhr_}"
        else:
            fhr = fhr_

        fhrn_ttr = list_fihirana2.objects.get(Range_file=fhr_)
        json_ttr = fhrn_ttr.Titre
        cles = fhrn_ttr.Clés

        fhrn_ = fihirana2.objects.get(Titre=fhr)
        # fhrn_=eval(fhrn_)

        json_str = fhrn_.Content
        ord_dif = fhrn_.ord_diff
        fh = eval(json_str)
        

        ttr = f"{json_ttr.upper()}"

       
        return ttr, fh, ord_dif,cles

    def exp_to_json1(b):
        content_fl = [""]
        dt = dict()

        ord = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "1.1",
            "1.2",
            "2.2",
            "2.1",
            "3.1",
            "4.1",
            "5.1",
            "Isan'andininy.1",
            "Isan'andininy.2",
            "Isan'andininy.3",
            "Isan'andininy.4",
            "isan'andininy.1",
            "isan'andininy.3",
            "isan'andininy.4",
            "isan'andininy.2",
            "1. (In-2)",
            "2. (In-2)",
            "3. (In-2)",
            "4. (In-2)",
            "5. (In-2)",
            "6. (In-2)",
            "7. (In-2)",
            "8. (In-2)",
            "9. (In-2)",
            "1.",
            "2.",
            "3.",
            "4.",
            "5.",
            "6.",
            "7.",
            "8.",
            "9",
            "ref",
            "ref2",
            "ref3",
            "ref.1",
            "ref.2",
            "ref.3",
            "ref.4",
            "ref.1",
            "ref.3",
            "ref.4",
            "ref.2",
            "Ref.1",
            "Ref.2",
            "Ref.3",
            "Ref.4",
            "Ref.1",
            "Ref.3",
            "Ref.4",
            "Ref.2",
            "Isan'andininy",
            "isan'andininy",
            "Isan'andininy2",
            "Isan’andininy: (Bis)",
            "",
            "Isan’andininy: ",
            "Isan’andininy : (in 2)",
            "Isan’andininy :",
            "Isan ’andininy:",
            "fin",
        ]

        ctn = str(b).split("\n")

        for te in ctn:
            t = te.replace("\r", "")
            if t in ord:
                # print('oui')
                t = content_fl[0].replace("\n", "")
                dt[t] = content_fl
                content_fl = []
            content_fl.append(te)
        t_ = content_fl[0].replace("\n", "")
        dt[t_] = content_fl
        cn = json.dumps(dt)
        return cn

    # fihirana ajout
    def export_fihirana_ajout_to_db(files):
        content_fl = []
        all_keys = [""]
        dt = dict()
        ord = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "1.1",
            "1.2",
            "2.2",
            "2.1",
            "3.1",
            "4.1",
            "5.1",
            "Isan'andininy.1",
            "Isan'andininy.2",
            "Isan'andininy.3",
            "Isan'andininy.4",
            "isan'andininy.1",
            "isan'andininy.3",
            "isan'andininy.4",
            "isan'andininy.2",
            "1. (In-2)",
            "2. (In-2)",
            "3. (In-2)",
            "4. (In-2)",
            "5. (In-2)",
            "6. (In-2)",
            "7. (In-2)",
            "8. (In-2)",
            "9. (In-2)",
            "1.",
            "2.",
            "3.",
            "4.",
            "5.",
            "6.",
            "7.",
            "8.",
            "9",
            "Ref",
            "ref",
            "ref2",
            "ref3",
            "ref.1",
            "ref.2",
            "ref.3",
            "ref.4",
            "ref.1",
            "ref.3",
            "ref.4",
            "ref.2",
            "Ref.1",
            "Ref.2",
            "Ref.3",
            "Ref.4",
            "Ref.1",
            "Ref.3",
            "Ref.4",
            "Ref.2",
            "Isan’andininy",
            "Isan'andininy",
            "isan'andininy",
            "Isan'andininy2",
            "Isan’andininy: (Bis)",
            "",
            "Isan’andininy: ",
            "Isan’andininy : (in 2)",
            "Isan’andininy :",
            "Isan ’andininy:",
            "fin",
        ]

        dt_ = files
        dt_ = str(dt_).replace("\r", "")
        dt_ = str(dt_).split("\n")

        for te in dt_:
            if te != "":
                if te in ord:
                    dt[all_keys[-1]] = content_fl
                    all_keys.append(te)
                    content_fl = []

                content_fl.append(f"{te}\n")
            else:
                pass
        return dt


fihirana_G.view_ajout_fihirana(0)