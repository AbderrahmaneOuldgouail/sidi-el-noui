import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default, { useState, useEffect, createContext, useContext, useMemo, useCallback, Fragment as Fragment$1, forwardRef, useRef } from "react";
import { usePage, Link, router, useForm, Head, createInertiaApp } from "@inertiajs/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ChevronLeft, Hotel, HandPlatter, ReceiptText, Megaphone, TicketMinus, Users as Users$1, LayoutGrid, BookmarkCheck, Archive, ChevronDown, Dot, Ellipsis, MenuIcon, PanelsTopLeft, Inbox, User, Languages, LogOut, Bell, CalendarPlus, CircleMinus, CirclePlus, Bold, Italic, Underline, Strikethrough, List, ListOrdered, Minus, WrapText, Undo, Redo, Heading1, Heading2, Heading3, Pilcrow, Link2, MoreHorizontal, HandCoins, Ticket, Eye, ArrowLeft, ArrowRight, Pencil, Trash, ImagePlus, ChevronUp, Send, Printer, FileDown, ClipboardList, Settings2, MessageSquareX, Check, X, LoaderCircle, Phone, Mail, MapPin, Facebook, Instagram, BedSingle, ChevronRight, Coffee, Utensils, Wifi, Tv, Bed, Bath, Armchair, Cigarette } from "lucide-react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronRightIcon, CheckIcon, DotFilledIcon, Cross2Icon, SunIcon, MoonIcon, ChevronLeftIcon, CalendarIcon, ChevronDownIcon, ArrowLeftIcon, ArrowRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon, MixerHorizontalIcon, MagnifyingGlassIcon, CaretSortIcon, DragHandleDots2Icon, ChevronUpIcon, ArrowDownIcon, ArrowUpIcon, EyeNoneIcon } from "@radix-ui/react-icons";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { Drawer as Drawer$1 } from "vaul";
import { format, isBefore } from "date-fns";
import { fr } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as ToastPrimitives from "@radix-ui/react-toast";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import useEmblaCarousel from "embla-carousel-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Color from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Underline$1 from "@tiptap/extension-underline";
import Link$1 from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { useReactTable, getCoreRowModel, getFilteredRowModel, getSortedRowModel, flexRender } from "@tanstack/react-table";
import { Scheduler } from "@bitnoi.se/react-scheduler";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween.js";
import { Command as Command$1 } from "cmdk";
import { FileUploader } from "react-drag-drop-files";
import * as ResizablePrimitive from "react-resizable-panels";
import { Transition, Dialog as Dialog$1 } from "@headlessui/react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as SelectPrimitive from "@radix-ui/react-select";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWifi, FaTv, FaBed } from "react-icons/fa";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const useStore = (store, callback) => {
  const result = store(callback);
  const [data, setData2] = useState();
  useEffect(() => {
    setData2(result);
  }, [result]);
  return data;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:opacity-90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:opacity-90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const useSidebarToggle = create(
  persist(
    (set, get) => ({
      isOpen: true,
      setIsOpen: () => {
        set({ isOpen: !get().isOpen });
      }
    }),
    {
      name: "sidebarOpen",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
function SidebarToggle({ isOpen, setIsOpen }) {
  return /* @__PURE__ */ jsx("div", { className: "invisible lg:visible absolute top-[12px] -right-[16px] z-20", children: /* @__PURE__ */ jsx(
    Button,
    {
      onClick: () => setIsOpen == null ? void 0 : setIsOpen(),
      className: "rounded-md w-8 h-8",
      variant: "outline",
      size: "icon",
      children: /* @__PURE__ */ jsx(
        ChevronLeft,
        {
          className: cn(
            "h-4 w-4 transition-transform ease-in-out duration-700",
            isOpen === false ? "rotate-180" : "rotate-0"
          )
        }
      )
    }
  ) });
}
const Rooms$2 = {
  Chambres: "الغرف"
};
const Chambres = "الغرف";
const Management = "إدارة";
const Type = "النوع";
const Description = "الوصف";
const Photos = "الصور";
const Enregistrer = "حفظ";
const avec = "مع";
const lits = "أسرة";
const DA = "دج";
const Features$1 = "==============================================================================";
const Supprimer = "حذف";
const Annuler = "إلغاء";
const Servicess = "==============================================================================";
const Services$2 = "الخدمات";
const Disponible = "متوفره";
const Indisponible = "غير متوفره";
const Service = "الخدمة";
const Eventss = "===============================================================================";
const Prix = "السعر";
const Promotionss = "===========================================================================";
const Promotions$1 = "التخفيضات";
const Active = "نشطة";
const Inactive = "غير نشط";
const Users = "================================================================================";
const Utilisateurs = "المستخدمين";
const Email = "البريد الإلكتروني";
const roles = "================================================================================";
const Permissions = "الأذونات";
const Bookings$1 = "==========================================================================";
const Recherche = "بحث";
const Client = "الزبون";
const Facture$1 = "فاتورة";
const Historique$1 = "سجل الحجوزات";
const personnes = "اشخاص";
const Nom = "اللقب";
const Adresse = "العنوان";
const Compte = "الحساب";
const Notifications$1 = "إشعارات";
const Profile = "الملف الشخصي";
const notifs = "====================================================================================";
const vers = "إلى";
const facturess = "===========================================================================";
const Factures$1 = "الفواتير";
const Imprimer = "طباعة";
const Ajouter = "إضافة";
const messages$1 = "===========================================================================";
const Tous = "الكل";
const Cacher = "إخفاء";
const Croissante = "تزايد";
const Voir = "رؤية";
const Status = "الحالة";
const Modifier = "تعديل";
const De = "من";
const Le = "";
const Rechercher = "بحث";
const dates = "تاريخ الدخول و الخروج";
const Sujet = "الموضوع";
const Message = "الرسالة";
const Liens = "روابط";
const Accueil = "الرئيسية";
const Ref = "رقم الحجز";
const Chambre = "غرفة";
const chambre = "غرفة";
const nuit = "ليلة";
const adult = "بالغين";
const et = "و";
const Consommations = "الاستهلاكات";
const Tarif = "السعر";
const Total = "المجموع";
const Confirmer = "تأكيد";
const translation = {
  Rooms: Rooms$2,
  "Tableaux De Bord": "لوحات المعلومات",
  "Entrés d'aujourd'hui": "تسجيلات الدخول اليوم",
  "Sorties d'aujourd'hui": "تسجيلات الخروج اليوم",
  "Réservations de jour": "حجوزات اليوم",
  "du dernier jour": "من اليوم الأخير",
  "Réservations de mois": "حجوزات الشهر",
  "du mois dernier": "من الشهر الأخير",
  "Les types plus réservé le mois dernier": "أنواع الغرف الأكثر حجزاً في الشهر الماضي",
  "Ces statistique inclus les réservations annuléers et refusées": "وتشمل هذه الإحصائيات الحجوزات الملغاة والمرفوضة",
  "Moteur de réservation": "محرك الحجز",
  Chambres,
  "Tous Les Chambre": "جميع الغرف",
  "Tous Les Services": "جميع الخدمات",
  Management,
  "Créé par": "تم إنشاؤها بواسطة",
  "Crée un chambre": "إنشاء غرفة",
  "Chambre Création": "إنشاء الغرف",
  "Numéro de chmabre": "رقم الغرفة",
  "Quel est le numéro unique de cette chambre ?": "ما هو الرقم الفريد لهذه الغرفة؟",
  "Prix de chmabre": "سعر الغرفة",
  "Prix de chambre": "سعر الغرفة",
  "Ce sont les prix de la chambre avec tous taxe inclus": "هذه هي أسعار الغرف شاملة جميع الضرائب",
  "Nombre de lits": "عدد الأسرة",
  "Quel est le nombre de lits dans cette chambre": "كم سرير في هذه الغرفة؟",
  Type,
  "Quel est le type de cette chambre": "ما هو نوع هذه الغرفة",
  "Selectioner un Type...": "اختر النوع...",
  "Chercher un Type...": "البحث عن نوع...",
  Description,
  "Entrer une description générale sur cette chambre": "أدخل وصفًا عامًا لهذه الغرفة",
  "Description sur la chambre": "وصف الغرفة",
  "Caractéristiques": "الخصائص",
  "Choisis parmi ces caractéristiques, et ajouter des valeur aux caractéristiques qui'il besoin": "اختر من بين هذه الخصائص، وأضف قيمًا إلى الخصائص التي تحتاجها",
  Photos,
  "Ajouter des photos au chambres (ne dépasse pas 10 photos par chambres)": "إضافة صور إلى الغرف (لا تتجاوز 10 صور لكل غرفة)",
  "Télécharger ou déposer des images ici": "قم بتنزيل أو إسقاط الصور هنا",
  "Créer": "إنشاء",
  Enregistrer,
  "Chambre Modification": "تعديل الغرفة",
  "La Chambre N°": "الغرفة رقم",
  avec,
  lits,
  DA,
  Features: Features$1,
  "Catégories": "الفئات",
  "Ajouter un categorie": "إضافة فئة",
  "Ajouter un nouveau Catégorie": "أضف فئة جديدة",
  "Example : wifi, dimension": "على سبيل المثال: واي فاي، البعد",
  "Nom de catégorie :": "اسم التصنيف:",
  "Modifier cette catégorie": "تحرير هذه الفئة",
  Supprimer,
  "Vous êtes sure?": "هل أنت متأكد؟",
  "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce élément et chaque caractéristique de cette categorie va supprimé": "لا يمكن إلغاء هذا الإجراء. لقد قمت بحذف هذا العنصر وكل سمة من سمات هذه الفئة التي تم حذفها بشكل نهائي",
  Annuler,
  "Créer un Caractéristique": "إضافة خاصية",
  "Ajouter un nouveau Caractéristique": "أضف خاصية جديدة",
  "Nom de caractéristique": "اسم الميزة:",
  "Catégorie": "الفئة",
  "Selectionner un catégorie": "اختر تصنيف",
  "Besoin de valeur": "بحاجة إلى قيمة",
  "Supprimer tous": "حذف الكل",
  "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette caractéristique et chaque chambre avoir cette caractéristique va le perdre": "لا يمكن التراجع عن هذا الإجراء. سوف تقوم بحذف هذه الخاصية نهائياً وكل غرفة بها هذه الخاصية سوف تفقدها",
  "Modifier cette caractéristique": "تعديل هذه الخاصية",
  "Aucun categories pour l'instant, essayez de créer une nouvelle": "لا توجد فئات حتى الآن، حاول إنشاء واحدة جديدة",
  "Aucun caractéristiques pour l'instant, essayez de créer une nouvelle": "لا توجد الخاصيات حتى الآن، حاول إنشاء واحدة جديدة",
  Servicess,
  Services: Services$2,
  "Créer un service": "إنشاء خدمة",
  "Créer un nouveau service": "إنشاء خدمة جديدة",
  "Nom de service": "اسم الخدمة",
  "Exemple : Restaurant": "مثال: مطعم",
  "List des services": "قائمة الخدمات",
  Disponible,
  Indisponible,
  "Modifier ce service": "تحرير هذه الخدمة",
  "Service Création": "إنشاء خدمة",
  "Entrer un nom claire et simple pour le nom de service": "أدخل اسمًا واضحًا وبسيطًا لاسم الخدمة",
  "Vous pouvez ajouter des titre ou bien des style au desciption": "يمكنك إضافة عناوين أو أنماط إلى الوصف",
  "Ajouter des photos au service (ne dépasse pas 10 photos par service)": "إضافة صور إلى الخدمات (لا تتجاوز 10 صور لكل خدمة)",
  "Créer un consommation": "إنشاء استهلاك",
  "Créer un nouveau consommation": "إنشاء استهلاك جديد",
  "Nom de consommation": "اسم الاستهلاك",
  "Exemple : Diner": "مثال: العشاء",
  "Prix de consommation": "سعر الاستهلاك",
  "Selectionner un service": "اختر خدمة",
  Service,
  "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette consommation": "لا يمكن التراجع عن هذا الإجراء. سوف تقوم بحذف هذا الاستهلاك بشكل دائم",
  "Modifier cette consommation": "تعديل هذا الاستهلاك",
  "List des consommations": "قائمة الاستهلاكات",
  "Prix Unitaire:": "سعر الوحدة:",
  "Service Modification": "تحرير الخدمة",
  "Aucun services pour l'instant, essayez de créer un nouveau": "لا توجد خدمات حتى الآن، حاول إنشاء واحدة جديدة",
  "Aucun consommations pour l'instant, essayez de créer un nouveau": "لا توجد الاستهلاكات حتى الآن، حاول إنشاء واحد جديد",
  Eventss,
  "Evènements": "الأحداث",
  "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette évènement": "لا يمكن التراجع عن هذا الإجراء. سوف تقوم بحذف هذا الحدث نهائيًا",
  "List des évènements": "قائمة الأحداث",
  "Créer un évènement": "إنشاء حدث",
  Prix,
  "Date début d'évènement": "تاريخ بدء الحدث",
  "Date fin d'évènement": "تاريخ انتهاء الحدث",
  "Date d'évènement": "تاريخ الحدث",
  "Création d'évènement": "إنشاء حدث",
  "Nom de l'évènement": "اسم الحدث",
  "Entrer un nom claire et simple pour le nom de l'évènement": "أدخل اسمًا واضحًا وبسيطًا لاسم الحدث",
  "Exemple : fête 16 Avrile": "مثال: حفلة 16 أبريل",
  "Quelle est le prix d'accés d'évènement": "ما هو سعر دخول الحدث؟",
  "Ajouter des photos au l'évènement (ne dépasse pas 10 photos par évènement)": "إضافة صور إلى الحدث (لا تتجاوز 10 صور لكل حدث)",
  "Entrer la date ou le range de date de début et fin d'évènement": "أدخل التاريخ أو النطاق الزمني لبداية الحدث ونهايته",
  "Choisis une date": "اختر تاريخا",
  "Modification d'évènement": "تعديل الحدث",
  "Créer un nouveau évènement": "إنشاء حدث جديد",
  "Modifier ce évènement": "تعديل هذا الحدث",
  "Aucun évènement pour l'instant, essayez de créer une nouvelle": "لا توجد أحداث حتى الآن، حاول إنشاء واحد جديد",
  Promotionss,
  Promotions: Promotions$1,
  "Créer un promotion": "إنشاء تخفيض",
  "List des promotions": "قائمة التخفيضات",
  Active,
  Inactive,
  "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette promotion": "لا يمكن التراجع عن هذا الإجراء. سوف تقوم بحذف هذا التخفيض نهائيًا",
  "Date de promotion": "تاريخ التخفيض",
  "Date début de promotion": "تاريخ بدء التخفيض",
  "Date fin de promotion": "تاريخ انتهاء التخفيض",
  "Valeur de promotion": "قيمة التخفيض",
  "Création de promotion": "إنشاء تخفيض",
  "Entrer la Valeur de promotion en DA": "أدخل قيمة التخفيض ب دج",
  "Ajouter des photos au promotion (ne dépasse pas 10 photos par promotion)": "إضافة صور إلى التخفيض (لا تتجاوز 10 صور لكل تخفيض)",
  "Modification de promotion": "تعديل التخفيض",
  "Aucun promotion pour l'instant, essayez de créer une nouvelle": "لا توجد تخفيضات حتى الآن، حاول إنشاء واحد جديد",
  Users,
  Utilisateurs,
  "List des utilisateurs": "قائمة المستخدمين",
  "Créer un utilisateur": "إنشاء مستخدم",
  "Nom de l'utilisateur": "اسم المستخدم",
  Email,
  "N° téléphone": "رقم الهاتف",
  "Employéss": "================================================================================",
  "Employés": "الموظفون",
  "Ajouter un employé": "إضافة موظف",
  "Rôle": "الدور",
  "date d'inscription": "تاريخ التسجيل",
  "Inscription d'employé": "تسجيل موظف",
  "Nom d'employé": "اسم الموظف",
  "Prénom d'employé": "لقب الموظف",
  "Email d'employé": "البريد الإلكتروني للموظف",
  "N° téléphone d'employé": "رقم هاتف الموظف",
  "L'email doit être unique pour chaque utilisateur": "يجب أن يكون البريد الإلكتروني فريدًا لكل مستخدم",
  "Le N° téléphone doit être unique pour chaque utilisateur": "يجب أن يكون رقم الهاتف فريدًا لكل مستخدم",
  "Assigne un role au ce employé": "عين دور لهذا الموظف",
  "Sélectionner un role...": "حدد الدور...",
  "Modification les informations d'employé": "تعديل معلومات الموظف",
  roles,
  "Rôles": "الأدوار",
  "Ajouter un rôle": "أضف دورًا",
  Permissions,
  "List des permissions pour le rôle": "قائمة الأذونات للدور",
  "date de création": "تاريخ الإنشاء",
  "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce rôle, les utilisateur avec ce rôle sera prendre le rôle de simple admin et perdre tous leur permissions": "لا يمكن التراجع عن هذا الإجراء. ستحذف هذا الدور نهائيًا، وسيتولى المستخدمون الذين لديهم هذا الدور دور المسؤول البسيط وسيفقدون جميع أذوناتهم",
  "Nom de rôle": "اسم الدور",
  "Le nom de rôle doit être unique": "يجب أن يكون اسم الدور فريدًا",
  "Assigner des permissions a ce rôle": "تعيين الأذونات لهذا الدور",
  "List des permissions": "قائمة الأذونات",
  Bookings: Bookings$1,
  "Réservations": "الحجوزات",
  "Ajouter une réservation": "أضف حجزًا",
  "Chercher des chambres disponible": "البحث عن الغرف المتاحة",
  Recherche,
  "Date début et fin de réservation": "تاريخ بداية ونهاية الحجز",
  "Nombre des personne": "عدد الاشخاص",
  "Nombre des chambres": "عدد الغرف",
  Client,
  "Check in": "تاريخ الدخول",
  "Check out": "تاريخ الخروج",
  "Date de réservation": "تاريخ الحجز",
  Facture: Facture$1,
  Historique: Historique$1,
  "Réservation": "الحجز",
  "Arrivée : ": "الوصول :",
  "Départ : ": "الانطلاق :",
  "Réserver le : ": "تاريخ الحجز :",
  "Pour : ": "ل :",
  personnes,
  Nom,
  "Prénom": "الإ سم",
  "Chambre N°": "الغرفة رقم",
  "Capacité": "قدرة",
  "List Des Consommations": "قائمة الاستهلاكات",
  "Réservation de ": "حجز ",
  "Choisi un ou plusieur chambres à réserver": "اختر غرفة واحدة أو أكثر للحجز",
  "Numéro de chambre": "رقم الغرفة",
  "Type de chambre": "نوع الغرفة",
  "Prix TTC": "السعر شامل الضريبة",
  "Ajouter les consommation de cetter réservation": "أضف استهلاكات هذا الحجز",
  Adresse,
  "Numéro d'Identification Fiscale": "رقم التعريف الضريبي",
  "Numéro d'Identification Statistique": "رقم التعريف الإحصائي",
  "Numéro  de registre de commerce": "رقم السجل التجاري",
  "Numéro d'article": "رقم السلعة",
  "Réserver": "حجز",
  "Chambres disponible": "الغرف متوفرة",
  "Choisi cette option lors cette réservation est pour un société": "اختر هذا الخيار عندما يكون هذا الحجز خاصًا بشركة",
  "Informations de client": "معلومات الزبون",
  "Détails de réservation": "تفاصيل الحجز",
  "Aucun réservations pour l'instant, essayez de créer une nouvelle": "لا توجد حجوزات حتى الآن، حاول إنشاء واحد جديد",
  "nav bar": "==============================================================================",
  Compte,
  "Se déconnecter": "تسجيل الخروج",
  Notifications: Notifications$1,
  "Nouvelle réservation": "حجز جديد",
  "Tout notifications": "جميع الإشعارات",
  "Boîte de réception": "صندوق الوارد",
  Profile,
  "tableau de bord": "لوحة القيادة",
  "Changer le thème": "تبديل الوضع",
  notifs,
  "Tout marquer comme lu": "وضع علامة على الكل كمقروءة",
  "Supprimer Tous": "حذف الكل",
  "a fait une réservation de": "قام بالحجز من",
  vers,
  "user Profile": "==============================================================================",
  "Votre adresse email n'est pas vérifiée.": "لم يتم التحقق من عنوان بريدك الإلكتروني.",
  "Cliquez ici pour renvoyer l'e-mail de vérification.": "انقر هنا لإعادة إرسال رسالة التحقق عبر البريد الإلكتروني.",
  "Un nouveau lien de vérification a été envoyé à votre adresse e-mail.": "لقد تم إرسال رابط تحقق جديد إلى عنوان بريدك الإلكتروني.",
  "Les informations personnelles": "المعلومات الشخصية",
  "Mot de passe actuel": "كلمة السر الحالية",
  "nouveau mot de passe": "كلمة المرور الجديدة",
  "Confirmez le mot de passe": "تأكيد كلمة المرور",
  "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester en sécurité": "تأكد من أن حسابك يستخدم كلمة مرور طويلة وعشوائية للحفاظ على الأمان",
  "Mettre à jour le mot de passe": "تطوير كلمة السر",
  "Supprimer le compte": "حذف الحساب",
  "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Avant de supprimer votre compte, veuillez télécharger toutes les données ou informations que vous souhaitez conserver.": "بمجرد حذف حسابك، سيتم حذف جميع موارده وبياناته نهائيًا. قبل حذف حسابك، يرجى تنزيل أي بيانات أو معلومات ترغب في الاحتفاظ بها.",
  "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte.": "بمجرد حذف حسابك، سيتم حذف جميع موارده وبياناته بشكل دائم. يُرجى إدخال كلمة المرور الخاصة بك لتأكيد رغبتك في حذف حسابك بشكل دائم.",
  "Etes-vous sûr de vouloir supprimer votre compte ?": "هل انت متأكد انك تريد حذف حسابك؟",
  facturess,
  Factures: Factures$1,
  "Date": "التاريخ",
  "Générer pour une réservation": "إنشاء للحجز",
  Imprimer,
  "Télécharger": "تحميل",
  "Parametre de facture": "إعدادات الفاتورة",
  "Modifier les constant de facturation içi": "تعديل ثوابت الفوترة هنا",
  "La valeur de TVA en %": "قيمة ضريبة القيمة المضافة ب %",
  "Taxe de séjour": "الضريبة السياحية",
  "la valeur de taxe de séjour en DA/personne": "قيمة الضريبة السياحية بـ دج/شخص",
  "La valeur de tibmre en %": " قيمة الطوابع بـ %",
  "Droit de timbre": "واجب الطوابع",
  "N° Facture": "رقم الفاتورة",
  "List des invités": "قائمة الضيوف",
  Ajouter,
  "Ajouter des invités": "إضافة الضيوف",
  "Aucun factures pour l'instant, essayez de créer une nouvelle": "لا توجد فواتير حتى الآن، حاول إنشاء واحدة جديدة",
  messages: messages$1,
  Tous,
  "Non lu": "الغير المقروءة",
  "Reprendre avec votre adresse mail": "استئناف مع عنوان البريد الإلكتروني الخاص بك",
  "Aucun message a afficher": "لا توجد رسائل لعرضها",
  "Repondre à :": "الرد على:",
  "Envoyé": "إرسال",
  "Data Tabeles": "==========================================================================",
  "Contrôler la visibilité des colonnes": "التحكم في رؤية الأعمدة",
  Cacher,
  Croissante,
  "Décroissante": "متناقص",
  "Basculer les colonnes": "تبديل الأعمدة",
  Voir,
  Status,
  Modifier,
  "Marqué comme disponible": "وضع علامة على أنها متاحة",
  "Marqué comme hors service": "وضع علامة خارج الخدمة",
  "ligne(s) afficher": "سطر (سطور) معروضة.",
  "Lignes par page": "صفوف لكل صفحة",
  "ligne(s) sélectionné(s).": "سطر (سطور) محددة.",
  "à fait un nouveaux réservation": "قام بحجز جديد",
  "client side ": "============",
  "Changer la langue": "تغيير اللغة",
  "Mes réservations": "حجوزاتي",
  De,
  "Jusqu'a": "إلى",
  Le,
  "Sidi El Noui": "سيدي النوي",
  "Bienvenue à SIDI EL NOUI - Votre refuge luxueux au cœur de Chéraga Découvrez un confort inégalé et une élégance raffinée en plein centre d'Alger. Notre hôtel offre des vues à couper le souffle, des équipements haut de gamme, et un service exceptionnel pour rendre votre séjour inoubliable.": "مرحبًا بكم في سيدي النوي - ملجأكم الفاخر في قلب مدينة شراقة اكتشف راحة لا مثيل لها وأناقة راقية في قلب الجزائر العاصمة. يوفر فندقنا إطلالات خلابة ووسائل راحة متميزة وخدمة استثنائية لجعل إقامتك لا تُنسى.",
  "nombre des bébé": "عدد الأطفال",
  Rechercher,
  dates,
  "Offres Exclusives pour un Séjour Inoubliable Profitez de nos promotions exceptionnelles et réservez votre séjour à un prix avantageux. Découvrez nos offres spéciales et bénéficiez de réductions sur les chambres, les forfaits bien-être, et bien plus encore.": "عروض حصرية لإقامة لا تُنسى استفد من عروضنا الترويجية الاستثنائية واحجز إقامتك بسعر مناسب. اكتشف عروضنا الخاصة واستفد من الخصومات على الغرف وباقات الصحة وغير ذلك الكثير.",
  "Réduction de": "تخفيض بقيمة ",
  "Voir Plus": "رؤية المزيد",
  "Des Événements Inoubliables au Cœur d'Alger, Vivez des moments uniques en participant à nos événements exclusifs. Que ce soit pour des soirées thématiques, des concerts, ou des festivals locaux, notre hôtel est le point de départ idéal pour toutes vosaventures.": "أحداث لا تُنسى في قلب الجزائر العاصمة، استمتع بلحظات فريدة من خلال المشاركة في فعالياتنا الحصرية. سواء كانت الأمسيات ذات الطابع الخاص، أو الحفلات الموسيقية، أو المهرجانات المحلية، فإن فندقنا هو نقطة الانطلاق المثالية لجميع مغامراتك.",
  "Nos Chambres": "غرفنا",
  "Découvrez nos chambres spacieuses et décorées avec, offrant tout le confort moderne pour un séjour des plus agréables. Que vous voyagiez seul, en couple ou en famille, nous avons la chambre parfaite pour vous.": "اكتشف غرفنا الفسيحة والمزينة، والتي توفر جميع وسائل الراحة الحديثة لإقامة ممتعة. سواء كنت مسافرًا بمفردك أو كزوجين أو مع العائلة، فلدينا الغرفة المثالية لك.",
  "Caractéristique de la chambre": "مميزات الغرفة",
  "Réserver maintenant": "احجز الآن",
  "Nous offrons une gamme de services conçus pour rendre votre séjour aussi agréable que possible. Que vous souhaitiez vous détendre, savourer de délicieux repas, ou profiter de commodités supplémentaires, nous sommes là pour répondre à tous vos besoins.": "نحن نقدم مجموعة من الخدمات المصممة لجعل إقامتك ممتعة قدر الإمكان. سواء كنت ترغب في الاسترخاء، أو الاستمتاع بوجبات لذيذة، أو الاستمتاع بوسائل الراحة الإضافية، فنحن هنا لتلبية جميع احتياجاتك.",
  "contactez-nous": "اتصل بنا",
  Sujet,
  Message,
  "Vous pouvez nous envoyer un message via ce formulaire de contact. Nous ferons de notre mieux pour répondre à toutes vos questions dans les plus brefs délais.": "يمكنك أن ترسل لنا رسالة عبر نموذج الاتصال هذا. سنبذل قصارى جهدنا للإجابة على جميع أسئلتك في أسرع وقت ممكن.",
  Liens,
  "Réseaux Sociaux": "الشبكات الاجتماعية",
  Accueil,
  Ref,
  Chambre,
  chambre,
  "date d'entrée / sortie": "تاريخ الدخول / الخروج",
  "Vous êtes sur que vous voulez annuler cette réservation": "أنت متأكد من أنك تريد إلغاء هذا الحجز",
  "Informations personnels": "معلومات شخصية",
  "Voir le profile": "عرض الملف الشخصي",
  "Détails de votre réservation": "تفاصيل الحجز الخاص بك",
  "Arrivée": "الوصول",
  "Départ": "المغادرة",
  "Durée de séjour": "مدة الإقامة",
  nuit,
  "Récapitulatif du montant": "ملخص المبلغ",
  "Ce prix avec tout tax inclus": "هذا السعر شامل الضريبة",
  "Nombre des personnes": "عدد المقيمين",
  "Vous avez sélectionné pour": "لقد اخترت ل",
  adult,
  "bébés": "أطفال",
  et,
  "Modifier la selection": "تغيير التحديد",
  "Finaliser votre réservation": "إنهاء الحجز الخاص بك",
  Consommations,
  "Type de logement": "نوع الغرفة",
  Tarif,
  "Selectionner des chambres": "حدد الغرف",
  "Dernière étape": "الخطوة الأخيرة",
  Total,
  "Email ou N° téléphone": "البريد الإلكتروني أو رقم الهاتف",
  "Souviens moi": "تذكرنى",
  "Mot de passe oublié ?": "هل نسيت كلمة المرور؟",
  "Se Connecter": "تسجيل الدخول",
  "Mot de passe": "كلمة المرور",
  "Lien de réinitialisation du mot de passe par e-mail": "رابط إعادة تعيين كلمة المرور للبريد الإلكتروني",
  "Vous avez oublié votre mot de passe ? Aucun problème. Indiquez-nous simplement votre adresse e-mail et nous vous enverrons par e-mail un lien de réinitialisation de mot de passe qui vous permettra de choisir un nouveau mot de passe.": "هل نسيت كلمة مرورك؟ لا مشكلة. ما عليك سوى إخبارنا بعنوان بريدك الإلكتروني وسنرسل إليك رابط إعادة تعيين كلمة المرور عبر البريد الإلكتروني الذي سيسمح لك باختيار كلمة مرور جديدة.",
  "Il s'agit d'une zone sécurisée de l'application. Veuillez confirmer votre mot de passe avant de continuer.": "هذه منطقة آمنة للتطبيق. يرجى تأكيد كلمة المرور الخاصة بك قبل الاستمرار.",
  Confirmer,
  "Réinitialiser le mot de passe": "إعادة تعيين كلمة المرور",
  "": ""
};
function useTrans(value, section = "") {
  const locale = localStorage.getItem("locale") || "fr";
  return locale == "fr" ? value : translation[value];
}
function getMenuList(pathname) {
  const permissions = usePage().props.auth.permissions;
  const roomsPathnames = [
    "rooms.index",
    "rooms.create",
    "features.index",
    "rooms.edit",
    "rooms.show"
  ];
  const servicesPathnames = [
    "services.index",
    "services.show",
    "services.create",
    "services.edit",
    "consumptions.index"
  ];
  const promoPathnames = [
    "promotions.index",
    "promotions.create",
    "promotions.edit"
  ];
  const usersPathnames = [
    "roles.index",
    "roles.create",
    "roles.edit",
    "users.index",
    "users.create",
    "users.edit"
  ];
  const rolesPathnames = ["roles.index", "roles.create", "roles.edit"];
  const userPathnames = ["users.index", "users.create", "users.edit"];
  const facturePathnames = ["factures.index", "factures.show"];
  const eventPathnames = ["events.index", "events.create", "events.edit"];
  const propritaireGroup = {
    groupLabel: "La propritaire",
    menus: [
      (permissions.room.viewAny || permissions.room.update || permissions.room.create) && {
        href: "rooms.index",
        label: useTrans("Chambres"),
        active: roomsPathnames.includes(pathname),
        icon: Hotel,
        submenus: [
          {
            href: "rooms.index",
            label: useTrans("Tous Les Chambre"),
            active: pathname === "rooms.index"
          },
          {
            href: "features.index",
            label: useTrans("Caractéristiques"),
            active: pathname === "features.index"
          }
        ]
      },
      (permissions.service.viewAny || permissions.service.update || permissions.service.delete || permissions.service.create) && {
        href: "services.index",
        label: useTrans("Services"),
        active: servicesPathnames.includes(pathname),
        icon: HandPlatter,
        submenus: [
          {
            href: "services.index",
            label: useTrans("Tous Les Services"),
            active: pathname === "services.index"
          },
          {
            href: "consumptions.index",
            label: useTrans("Consommations"),
            active: pathname === "consumptions.index"
          }
        ]
      },
      (permissions.facture.viewAny || permissions.facture.update || permissions.facture.delete || permissions.facture.create) && {
        href: "factures.index",
        label: useTrans("Factures"),
        active: facturePathnames.includes(pathname),
        icon: ReceiptText,
        submenus: []
      },
      (permissions.event.viewAny || permissions.event.update || permissions.event.delete || permissions.event.create) && {
        href: "events.index",
        label: useTrans("Evènements"),
        active: eventPathnames.includes(pathname),
        icon: Megaphone,
        submenus: []
      },
      (permissions.promotion.viewAny || permissions.promotion.update || permissions.promotion.delete || permissions.promotion.create) && {
        href: "promotions.index",
        label: useTrans("Promotions"),
        active: promoPathnames.includes(pathname),
        icon: TicketMinus,
        submenus: []
      }
    ].filter(Boolean)
  };
  const managementGroup = {
    groupLabel: useTrans("Management"),
    menus: [
      (permissions.employ.viewAny || permissions.employ.update || permissions.employ.delete || permissions.employ.create || permissions.role.viewAny || permissions.role.update || permissions.role.delete || permissions.role.create) && {
        href: "roles.index",
        label: useTrans("Utilisateurs"),
        active: usersPathnames.includes(pathname),
        icon: Users$1,
        submenus: [
          (permissions.role.viewAny || permissions.role.update || permissions.role.delete || permissions.role.create) && {
            href: "roles.index",
            label: useTrans("Rôles"),
            active: rolesPathnames.includes(pathname)
          },
          (permissions.employ.viewAny || permissions.employ.update || permissions.employ.delete || permissions.employ.create) && {
            href: "users.index",
            label: useTrans("Employés"),
            active: userPathnames.includes(pathname)
          }
        ]
      }
    ].filter(Boolean)
  };
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "admin.dashboard",
          label: useTrans("Tableaux De Bord"),
          active: pathname === "admin.dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    (permissions.booking.viewAny || permissions.booking.update || permissions.booking.create) && {
      groupLabel: useTrans("Moteur de réservation"),
      menus: [
        permissions.booking.viewAny && {
          href: "bookings.index",
          label: useTrans("Réservations"),
          active: pathname == "bookings.index",
          icon: BookmarkCheck,
          submenus: []
        },
        permissions.booking.viewAny && {
          href: "bookings.historique",
          label: useTrans("Historique"),
          active: pathname == "bookings.historique",
          icon: Archive,
          submenus: []
        }
      ]
    },
    propritaireGroup.menus.length > 0 && propritaireGroup,
    managementGroup.menus.length > 0 && managementGroup
  ].filter(Boolean);
}
const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx(ScrollBar, {}),
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-secondary px-3 py-1.5 text-xs text-secondary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRightIcon, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(DotFilledIcon, { className: "h-4 w-4 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function CollapseMenuButton({
  icon: Icon,
  label,
  active,
  submenus,
  isOpen
}) {
  const isSubmenuActive = submenus.some((submenu) => submenu.active);
  const [isCollapsed, setIsCollapsed] = useState(isSubmenuActive);
  return isOpen ? /* @__PURE__ */ jsxs(
    Collapsible,
    {
      open: isCollapsed,
      onOpenChange: setIsCollapsed,
      className: "w-full",
      children: [
        /* @__PURE__ */ jsx(
          CollapsibleTrigger,
          {
            className: "[&[data-state=open]>div>div>svg]:rotate-180 mb-1",
            asChild: true,
            children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                className: cn(
                  "w-full justify-start h-10",
                  active ? "text-primary hover:text-primary" : ""
                ),
                children: /* @__PURE__ */ jsxs("div", { className: "w-full items-center flex justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "mr-4", children: /* @__PURE__ */ jsx(Icon, { size: 18 }) }),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: cn(
                          "max-w-[150px] truncate",
                          isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"
                        ),
                        children: label
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn(
                        "whitespace-nowrap",
                        isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"
                      ),
                      children: /* @__PURE__ */ jsx(
                        ChevronDown,
                        {
                          size: 18,
                          className: "transition-transform duration-200"
                        }
                      )
                    }
                  )
                ] })
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(CollapsibleContent, { className: "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down", children: submenus.map(
          ({ href, label: label2, active: active2 }, index, item) => item[index] && /* @__PURE__ */ jsx(
            Button,
            {
              variant: "ghost",
              className: cn(
                "w-full justify-start h-10 mb-1 hover:border-2 hover:border-transparent",
                active2 ? "text-primary hover:text-primary" : ""
              ),
              asChild: true,
              children: /* @__PURE__ */ jsxs(Link, { href: route(href), children: [
                /* @__PURE__ */ jsx("span", { className: "mr-4 ml-2", children: /* @__PURE__ */ jsx(Dot, { size: 18 }) }),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: cn(
                      "max-w-[170px] truncate",
                      isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"
                    ),
                    children: label2
                  }
                )
              ] })
            },
            index
          )
        ) })
      ]
    }
  ) : /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(TooltipProvider, { disableHoverableContent: true, children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          className: cn(
            "w-full justify-start h-10 mb-1 hover:border-2 hover:border-transparent",
            active ? "text-primary hover:text-primary" : ""
          ),
          children: /* @__PURE__ */ jsx("div", { className: "w-full items-center flex justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: cn(
                  isOpen === false ? "" : "mr-4"
                ),
                children: /* @__PURE__ */ jsx(Icon, { size: 18 })
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: cn(
                  "max-w-[200px] truncate",
                  isOpen === false ? "opacity-0" : "opacity-100"
                ),
                children: label
              }
            )
          ] }) })
        }
      ) }) }),
      /* @__PURE__ */ jsx(TooltipContent, { side: "right", align: "start", alignOffset: 2, children: label })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { side: "right", sideOffset: 25, align: "start", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "max-w-[190px] truncate", children: label }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      submenus.map(({ href, label: label2 }, index) => /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { className: "cursor-pointer", href: route(href), children: /* @__PURE__ */ jsx("p", { className: "max-w-[180px] truncate", children: label2 }) }) }, index)),
      /* @__PURE__ */ jsx(DropdownMenuArrow, { className: "fill-border" })
    ] })
  ] });
}
function Menu({ isOpen }) {
  const pathname = route().current();
  const menuList = getMenuList(pathname);
  return /* @__PURE__ */ jsx(ScrollArea, { className: "[&>div>div[style]]:!block", children: /* @__PURE__ */ jsx("nav", { className: "mt-8 h-full w-full", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2", children: menuList.map(
    (list, index) => list != false && /* @__PURE__ */ jsxs(
      "li",
      {
        className: cn(
          "w-full",
          list.groupLabel ? "pt-5" : ""
        ),
        children: [
          isOpen && list.groupLabel || isOpen === void 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate", children: list.groupLabel }) : !isOpen && isOpen !== void 0 && list.groupLabel ? /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { className: "w-full", children: /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center items-center", children: /* @__PURE__ */ jsx(Ellipsis, { className: "h-5 w-5" }) }) }),
            /* @__PURE__ */ jsx(TooltipContent, { side: "right", children: /* @__PURE__ */ jsx("p", { children: list.groupLabel }) })
          ] }) }) : /* @__PURE__ */ jsx("p", { className: "pb-2" }),
          list.menus.map(
            ({
              href,
              label,
              icon: Icon,
              active,
              submenus
            }, index2, item) => item[index2] && (submenus.length === 0 ? /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-full",
                children: /* @__PURE__ */ jsx(
                  TooltipProvider,
                  {
                    disableHoverableContent: true,
                    children: /* @__PURE__ */ jsxs(
                      Tooltip,
                      {
                        delayDuration: 100,
                        children: [
                          /* @__PURE__ */ jsx(
                            TooltipTrigger,
                            {
                              asChild: true,
                              children: /* @__PURE__ */ jsx(
                                Button,
                                {
                                  className: cn(
                                    "w-full justify-start h-10 mb-1 hover:border-2 hover:border-transparent",
                                    active ? "text-primary hover:text-primary " : ""
                                  ),
                                  variant: "ghost",
                                  asChild: true,
                                  children: /* @__PURE__ */ jsxs(
                                    Link,
                                    {
                                      href: route(
                                        href
                                      ),
                                      children: [
                                        /* @__PURE__ */ jsx(
                                          "span",
                                          {
                                            className: cn(
                                              isOpen === false ? "" : "mr-4"
                                            ),
                                            children: /* @__PURE__ */ jsx(
                                              Icon,
                                              {
                                                size: 18
                                              }
                                            )
                                          }
                                        ),
                                        /* @__PURE__ */ jsx(
                                          "p",
                                          {
                                            className: cn(
                                              "max-w-[200px] truncate",
                                              isOpen === false ? "-translate-x-96 opacity-0" : "translate-x-0 opacity-100"
                                            ),
                                            children: label
                                          }
                                        )
                                      ]
                                    }
                                  )
                                }
                              )
                            }
                          ),
                          isOpen === false && /* @__PURE__ */ jsx(TooltipContent, { side: "right", children: label })
                        ]
                      }
                    )
                  }
                )
              },
              index2
            ) : /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-full",
                children: /* @__PURE__ */ jsx(
                  CollapseMenuButton,
                  {
                    icon: Icon,
                    label,
                    active,
                    submenus,
                    isOpen
                  }
                )
              },
              index2
            ))
          )
        ]
      },
      index
    )
  ) }) }) });
}
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, { className: cn("grid gap-2", className), ...props, ref });
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-3.5 w-3.5 fill-primary" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
function InputLabel({ value, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx("label", { ...props, className: `block font-medium text-sm text-gray-700 dark:text-gray-300 ` + className, children: value ? value : children });
}
function LangSwitch$1() {
  const locale = localStorage.getItem("locale") || "fr";
  const [lang, setLang] = React__default.useState(locale);
  const switchLang = () => {
    const newLang = lang === "ar" ? "fr" : "ar";
    setLang(newLang);
    localStorage.setItem("locale", newLang);
    router.visit(route("switch.lang"), {
      data: { lang: newLang },
      preserveState: true,
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsxs(
    RadioGroup,
    {
      value: lang,
      onValueChange: switchLang,
      className: "flex gap-2",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(RadioGroupItem, { value: "fr", id: "fr" }),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "fr",
              value: "Français",
              className: "cursor-pointer"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(RadioGroupItem, { value: "ar", id: "ar" }),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "ar",
              value: "العربية",
              className: "cursor-pointer"
            }
          )
        ] })
      ]
    }
  );
}
function AppLogo({ className }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: "http://localhost:8000/storage/sidi-el-noui-logo.png",
      alt: "Logo",
      className
    }
  );
}
function SideBar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  if (!sidebar)
    return null;
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      className: cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        (sidebar == null ? void 0 : sidebar.isOpen) === false ? "w-[90px]" : "w-72"
      ),
      children: [
        /* @__PURE__ */ jsx(
          SidebarToggle,
          {
            isOpen: sidebar == null ? void 0 : sidebar.isOpen,
            setIsOpen: sidebar == null ? void 0 : sidebar.setIsOpen
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              className: cn(
                "transition-transform ease-in-out duration-300 mb-1",
                (sidebar == null ? void 0 : sidebar.isOpen) === false ? "translate-x-1" : "translate-x-0"
              ),
              variant: "link",
              asChild: true,
              children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("admin.dashboard"),
                  className: "flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(AppLogo, { className: "h-10 w-10" }),
                    /* @__PURE__ */ jsx(
                      "h1",
                      {
                        className: cn(
                          "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                          (sidebar == null ? void 0 : sidebar.isOpen) === false ? "-translate-x-96 opacity-0 hidden" : "translate-x-0 opacity-100"
                        ),
                        children: "Sidi El Noui"
                      }
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(Menu, { isOpen: sidebar == null ? void 0 : sidebar.isOpen })
        ] })
      ]
    }
  );
}
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Close,
      {
        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
        children: [
          /* @__PURE__ */ jsx(Cross2Icon, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ]
      }
    ),
    children
  ] })
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
function SheetMenu() {
  return /* @__PURE__ */ jsxs(Sheet, { children: [
    /* @__PURE__ */ jsx(SheetTrigger, { className: "lg:hidden", asChild: true, children: /* @__PURE__ */ jsx(Button, { className: "h-8", variant: "outline", size: "icon", children: /* @__PURE__ */ jsx(MenuIcon, { size: 20 }) }) }),
    /* @__PURE__ */ jsxs(
      SheetContent,
      {
        className: "sm:w-72 px-3 h-full flex flex-col",
        side: "left",
        children: [
          /* @__PURE__ */ jsx(SheetHeader, { children: /* @__PURE__ */ jsx(
            Button,
            {
              className: "flex justify-center items-center pb-2 pt-1",
              variant: "link",
              asChild: true,
              children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("admin.dashboard"),
                  className: "flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(PanelsTopLeft, { className: "w-6 h-6 mr-1" }),
                    /* @__PURE__ */ jsx("h1", { className: "font-bold text-lg", children: "Brand" })
                  ]
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx(Menu, { isOpen: true })
        ]
      }
    )
  ] });
}
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
function RedBeadge({ className }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: "w-2 h-2 bg-destructive rounded-full absolute top-0  " + className
    }
  );
}
function UserNav$1() {
  const user = usePage().props.auth.user;
  const message_permission = usePage().props.auth.permissions.message;
  const hasUnreadMessages = usePage().props.hasUnreadMessages;
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(TooltipProvider, { disableHoverableContent: true, children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "relative h-8 w-8 rounded-full",
          children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 relative", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: "#", alt: "Avatar" }),
              /* @__PURE__ */ jsxs(AvatarFallback, { className: "bg-transparent uppercase", children: [
                user.first_name.charAt(0),
                user.last_name.charAt(0)
              ] })
            ] }),
            hasUnreadMessages && /* @__PURE__ */ jsx(RedBeadge, { className: "right-0" })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxs(TooltipContent, { side: "bottom", children: [
        useTrans("Profile"),
        " "
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium leading-none", children: [
          user.first_name,
          " ",
          user.last_name
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs leading-none text-muted-foreground", children: user.email })
      ] }) }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
        /* @__PURE__ */ jsx(DropdownMenuItem, { className: "hover:cursor-pointer", asChild: true, children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("admin.dashboard"),
            className: "flex items-center",
            children: [
              /* @__PURE__ */ jsx(LayoutGrid, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
              useTrans("tableau de bord")
            ]
          }
        ) }),
        (message_permission.viewAny || message_permission.update || message_permission.delete || message_permission.create) && /* @__PURE__ */ jsx(
          DropdownMenuItem,
          {
            className: "hover:cursor-pointer",
            asChild: true,
            children: /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("messages.index"),
                className: "flex items-center",
                children: [
                  hasUnreadMessages ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx(Inbox, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
                    /* @__PURE__ */ jsx(RedBeadge, { className: "right-1/3" })
                  ] }) : /* @__PURE__ */ jsx(Inbox, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
                  useTrans("Boîte de réception")
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(DropdownMenuItem, { className: "hover:cursor-pointer", asChild: true, children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("admin.profile.edit"),
            className: "flex items-center",
            children: [
              /* @__PURE__ */ jsx(User, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
              useTrans("Compte")
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
          /* @__PURE__ */ jsx(Languages, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
          /* @__PURE__ */ jsx(LangSwitch$1, {})
        ] })
      ] }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          className: "hover:cursor-pointer",
          onClick: () => {
            router.post(route("admin.logout"));
          },
          children: [
            /* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
            useTrans("Se déconnecter")
          ]
        }
      )
    ] })
  ] });
}
const ThemeProviderContext = createContext({
  theme: "light",
  setTheme: () => null
});
function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(storageKey) || defaultTheme;
  });
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: (theme2) => {
      localStorage.setItem(storageKey, theme2);
      setTheme(theme2);
    }
  };
  return /* @__PURE__ */ jsx(ThemeProviderContext.Provider, { ...props, value, children });
}
const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return /* @__PURE__ */ jsx(TooltipProvider, { disableHoverableContent: true, children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        className: "rounded-full w-8 h-8 bg-background",
        variant: "outline",
        size: "icon",
        onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
        children: [
          /* @__PURE__ */ jsx(SunIcon, { className: "w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" }),
          /* @__PURE__ */ jsx(MoonIcon, { className: "absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Switch Theme" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(TooltipContent, { side: "bottom", children: [
      useTrans("Changer le thème"),
      " "
    ] })
  ] }) });
}
function NotificationsNav() {
  const notifs2 = usePage().props.notifs;
  function timeSince(date) {
    const now = /* @__PURE__ */ new Date();
    const past = new Date(date);
    const secondsAgo = Math.floor((now - past) / 1e3);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo > 0) {
      return `${daysAgo} jrs`;
    } else if (hoursAgo > 0) {
      return `${hoursAgo} h`;
    } else if (minutesAgo > 0) {
      return `${minutesAgo} min`;
    } else {
      return `${secondsAgo} s`;
    }
  }
  const ViewNotification = (notif) => {
    router.get(
      route("bookings.show", notif.data.booking_id),
      {},
      {
        onSuccess: () => {
          router.post(route("notifications.read"), { id: notif.id });
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(TooltipProvider, { disableHoverableContent: true, children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          className: "relative h-8 w-8 rounded-full",
          children: /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: "#", alt: "Avatar" }),
            /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-transparent uppercase", children: notifs2.length > 0 ? /* @__PURE__ */ jsxs("span", { className: "relative", children: [
              /* @__PURE__ */ jsx(Bell, { size: 18 }),
              /* @__PURE__ */ jsx(RedBeadge, { className: "right-0" })
            ] }) : /* @__PURE__ */ jsx(Bell, { size: 18 }) })
          ] })
        }
      ) }) }),
      /* @__PURE__ */ jsxs(TooltipContent, { side: "bottom", children: [
        useTrans("Notifications"),
        " "
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
      /* @__PURE__ */ jsx(DropdownMenuGroup, { children: notifs2.slice(0, 10).map((notif, idx) => /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          className: "hover:cursor-pointer",
          onClick: () => ViewNotification(notif),
          children: [
            useTrans("Nouvelle réservation"),
            /* @__PURE__ */ jsxs(DropdownMenuShortcut, { children: [
              timeSince(notif == null ? void 0 : notif.created_at),
              " "
            ] })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsx(
        DropdownMenuItem,
        {
          className: "hover:cursor-pointer",
          onClick: () => {
            router.get(route("notifications.index"));
          },
          children: useTrans("Tout notifications")
        }
      )
    ] })
  ] });
}
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === toastId || toastId === void 0 ? {
          ...t,
          open: false
        } : t)
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({
  ...props
}) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open)
          dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
const Dialog = SheetPrimitive.Root;
const DialogTrigger = SheetPrimitive.Trigger;
const DialogPortal = SheetPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = SheetPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(
          SheetPrimitive.Close,
          {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              /* @__PURE__ */ jsx(Cross2Icon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
            ]
          }
        )
      ]
    }
  )
] }));
DialogContent.displayName = SheetPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = SheetPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = SheetPrimitive.Description.displayName;
const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ jsx(Drawer$1.Root, { shouldScaleBackground, ...props });
Drawer.displayName = "Drawer";
const DrawerTrigger = Drawer$1.Trigger;
const DrawerPortal = Drawer$1.Portal;
const DrawerClose = Drawer$1.Close;
const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsxs(
    Drawer$1.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
const DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("grid gap-1.5 p-4 text-center sm:text-left", className),
    ...props
  }
);
DrawerHeader.displayName = "DrawerHeader";
const DrawerFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx("div", { className: cn("mt-auto flex flex-col gap-2 p-4", className), ...props });
DrawerFooter.displayName = "DrawerFooter";
const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DrawerTitle.displayName = Drawer$1.Title.displayName;
const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = Drawer$1.Description.displayName;
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("span", { ...props, className: "text-sm text-red-600 dark:text-red-400 " + className, children: message }) : null;
}
const useWindowDimensions = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
function Calendar$1({ className, classNames, showOutsideDays = true, ...props }) {
  return /* @__PURE__ */ jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ...props2 }) => /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "h-4 w-4" }),
        IconRight: ({ ...props2 }) => /* @__PURE__ */ jsx(ChevronRightIcon, { className: "h-4 w-4" })
      },
      ...props
    }
  );
}
Calendar$1.displayName = "Calendar";
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
function DatePickerWithRange({
  date,
  onDateChange,
  className,
  min
}) {
  const disablePastDates = (date2) => {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return isBefore(date2, today);
  };
  return /* @__PURE__ */ jsx("div", { className: cn("grid gap-2", className), children: /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        id: "date",
        variant: "outline",
        className: cn(
          " justify-start text-left font-normal bg-card",
          !date && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
          (date == null ? void 0 : date.from) ? date.to ? /* @__PURE__ */ jsxs(Fragment, { children: [
            format(date.from, "LLL dd, y"),
            " -",
            " ",
            format(date.to, "LLL dd, y")
          ] }) : format(date.from, "LLL dd, y") : /* @__PURE__ */ jsxs("span", { children: [
            useTrans("Choisis une date"),
            " "
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx(
      Calendar$1,
      {
        initialFocus: true,
        mode: "range",
        min,
        defaultMonth: date == null ? void 0 : date.from,
        selected: date,
        onSelect: onDateChange,
        numberOfMonths: 2,
        locale: fr,
        weekStartsOn: 6,
        disabled: disablePastDates,
        showOutsideDays: false
      }
    ) })
  ] }) });
}
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      className: cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Input.displayName = "Input";
const Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
function AddBooking() {
  const [dateRange, setDateRange] = useState({
    from: "",
    to: ""
  });
  const { data, get, setData: setData2, errors } = useForm({
    check_in: "",
    check_out: "",
    guest_number: 0,
    is_company: 0
  });
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      setOpen(false);
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const incriment = () => {
    setData2("guest_number", data.guest_number + 1);
  };
  const dicriment = () => {
    if (data.guest_number > 0) {
      setData2("guest_number", data.guest_number - 1);
    }
  };
  const handleDateChange = (range) => {
    if (range == null ? void 0 : range.from) {
      const formattedDate = formatDate(range.from);
      setData2("check_in", formattedDate);
    }
    if (range == null ? void 0 : range.to) {
      const formattedDate = formatDate(range.to);
      setData2("check_out", formattedDate);
    }
    setDateRange(range);
  };
  const submit = (e) => {
    e.preventDefault();
    get(route("bookings.searchAviableRoom"));
  };
  if (width >= 767) {
    return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: () => setOpen(!open), children: [
      /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "link", children: [
        /* @__PURE__ */ jsx(CalendarPlus, { size: 18, className: "mx-2" }),
        useTrans("Ajouter une réservation")
      ] }) }),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsx(DialogTitle, { children: useTrans("Ajouter une réservation") }),
          /* @__PURE__ */ jsx(DialogDescription, { children: useTrans("Chercher des chambres disponible") })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "grid items-start gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "dates",
                value: useTrans(
                  "Date début et fin de réservation"
                )
              }
            ),
            /* @__PURE__ */ jsx(
              DatePickerWithRange,
              {
                date: dateRange,
                onDateChange: handleDateChange,
                min: 2
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.check_in,
                className: "mt-2"
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.check_out,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  htmlFor: "guest_number",
                  value: useTrans("Nombre des personne")
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center w-1/4 border rounded p-1 bg-muted", children: [
                /* @__PURE__ */ jsx(
                  CircleMinus,
                  {
                    onClick: () => dicriment(),
                    className: "cursor-pointer hover:text-secondary"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "w-1/2 flex justify-center", children: data.guest_number }),
                /* @__PURE__ */ jsx(
                  CirclePlus,
                  {
                    onClick: () => incriment(),
                    className: "cursor-pointer hover:text-secondary"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.guest_number,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                id: "need_value",
                checked: data.is_company == 1 ? true : false,
                onCheckedChange: () => setData2(
                  "is_company",
                  data.is_company == 1 ? 0 : 1
                )
              }
            ),
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "need_value",
                value: useTrans(
                  "Choisi cette option lors cette réservation est pour un société"
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsx(Button, { variant: "secondary", type: "submit", children: useTrans("Recherche") }) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "link", children: /* @__PURE__ */ jsx(CalendarPlus, { size: 18, className: "mx-2" }) }) }),
    /* @__PURE__ */ jsxs(DrawerContent, { children: [
      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
        /* @__PURE__ */ jsx(DrawerTitle, { children: useTrans("Ajouter une réservation") }),
        /* @__PURE__ */ jsxs(DrawerDescription, { children: [
          " ",
          useTrans("Chercher des chambres disponible")
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "grid items-start gap-4 px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "dates",
              value: useTrans("Date début et fin de réservation")
            }
          ),
          /* @__PURE__ */ jsx(
            DatePickerWithRange,
            {
              date: dateRange,
              onDateChange: handleDateChange
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.check_in,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.check_out,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "guest_number",
              value: useTrans("Nombre des personne")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "number",
              min: 1,
              id: "guest_number",
              value: data.guest_number,
              onChange: (e) => setData2("guest_number", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.guest_number,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              id: "need_value",
              checked: data.is_company,
              onCheckedChange: () => setData2("is_company", !data.is_company)
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "need_value",
              value: useTrans(
                "Choisi cette option lors cette réservation est pour un société"
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            className: "w-full",
            type: "submit",
            children: useTrans("Recherche")
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: useTrans("Annuler") }) }) })
    ] })
  ] });
}
function Navbar({ title, isOpen }) {
  const booking_permission = usePage().props.auth.permissions.booking;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "transition-[margin-left] ease-in-out duration-300",
        isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
      ),
      children: /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary", children: /* @__PURE__ */ jsxs("div", { className: "mx-4 sm:mx-8 flex h-14 items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 lg:space-x-0", children: [
          /* @__PURE__ */ jsx(SheetMenu, {}),
          /* @__PURE__ */ jsx("h1", { className: "font-bold", children: title })
        ] }),
        /* @__PURE__ */ jsx("div", { children: booking_permission.create && /* @__PURE__ */ jsx(AddBooking, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 justify-end", children: [
          /* @__PURE__ */ jsx(NotificationsNav, {}),
          /* @__PURE__ */ jsx(ThemeToggle, {}),
          /* @__PURE__ */ jsx(UserNav$1, {})
        ] })
      ] }) })
    }
  );
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(Cross2Icon, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
function AdminPanelLayout({ children }) {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const locale = localStorage.getItem("locale") || "fr";
  const { toast: toast2 } = useToast();
  useEffect(() => {
    document.documentElement.dir = locale == "ar" ? "rtl" : "ltr";
  }, [locale]);
  Echo.channel(`booking-channel`).listen("NewBooking", (e) => {
    toast2({
      description: e.booking.user.first_name + " " + useTrans("à fait un nouveaux réservation")
    });
    if (route().current() == "admin.dashboard") {
      router.reload({
        preserveScroll: true,
        preserveState: true
      });
    }
  });
  if (!sidebar)
    return null;
  return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsx(SideBar, {}),
    /* @__PURE__ */ jsx(Navbar, { title: "Tableux de bord", isOpen: sidebar == null ? void 0 : sidebar.isOpen }),
    /* @__PURE__ */ jsx(
      "main",
      {
        className: cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 md:p-10 p-2 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          (sidebar == null ? void 0 : sidebar.isOpen) === false ? "lg:ml-[90px]" : "lg:ml-72 "
        ),
        children
      }
    ),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
function PlaceholderContent({ children, className = "" }) {
  return /* @__PURE__ */ jsx(Card, { className: "rounded-lg border-none mt-2 ", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6 " + className, children }) });
}
function PageHeading({ title, className = "" }) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h1", { className: "font-bold text-3xl " + className, children: [
    title,
    " "
  ] }) });
}
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(
        ChevronDownIcon,
        {
          className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
        }
      )
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
function LabelDescreption({
  value,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { ...props, className: `text-muted-foreground text-sm` + className, children: value ? value : children });
}
function FormInput({
  label,
  label_descreption,
  type,
  error,
  data,
  setData: setData2,
  fieldName,
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 w-full", children: [
    label_descreption && /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
      /* @__PURE__ */ jsx(InputLabel, { htmlFor: label, value: useTrans(label) }),
      /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(label_descreption) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full bg-muted p-4 shadow", children: [
      /* @__PURE__ */ jsx(InputLabel, { htmlFor: label, value: useTrans(label) }),
      /* @__PURE__ */ jsx(
        Input,
        {
          className: "mt-2 w-full bg-card",
          type,
          id: label,
          value: data,
          onChange: (e) => setData2(fieldName, e.target.value),
          ...props
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: error, className: "mt-2" })
    ] })
  ] });
}
const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator.displayName = SeparatorPrimitive.Root.displayName;
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium me-2 px-3.5 py-0.5 text-xs ",
  {
    variants: {
      variant: {
        default: "border-gray-600 border-2 bg-gray-100 text-gray-600 ",
        success: "border-green-600 border-2 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
        danger: "border-red-600 border-2  bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300",
        warning: "border-amber-500 border-2 bg-amber-100 text-amber-500 dark:bg-yellow-900 dark:text-yellow-300",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, children, ...props }) {
  return /* @__PURE__ */ jsx("span", { className: cn(badgeVariants({ variant }), className), ...props, children });
}
function AviableRooms$1({ rooms, bookingData, services }) {
  var _a;
  const [count2, setCount] = useState(0);
  const { data, setData: setData2, post, errors } = useForm({
    rooms: [],
    consomation: [],
    check_in: bookingData.check_in,
    check_out: bookingData.check_out,
    guest_number: bookingData.guest_number,
    is_company: bookingData.is_company,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    adresse: "",
    nis: "",
    nif: "",
    nrc: "",
    n_article: ""
  });
  const handleRooms = (room) => {
    setData2((data2) => {
      const roomIndex = data2.rooms.findIndex((r) => r.id === room.id);
      if (roomIndex !== -1) {
        data2.rooms.splice(roomIndex, 1);
      } else {
        data2.rooms.push({ id: room.id, room_price: room.room_price });
      }
      return { ...data2 };
    });
  };
  const increment = (consumption) => {
    setCount(count2 + 1);
    setData2((prevData) => {
      const existingIndex = prevData.consomation.findIndex(
        (c) => c.consumption_id === consumption.consumption_id
      );
      if (existingIndex > -1) {
        prevData.consomation[existingIndex].quantity += 1;
      } else {
        prevData.consomation.push({
          consumption_id: consumption.consumption_id,
          current_consumption_price: consumption.consumption_price,
          quantity: 1
        });
      }
      return { ...prevData };
    });
  };
  const decrement = (consumption_id) => {
    if (count2 > 0) {
      setCount(count2 - 1);
      setData2((prevData) => {
        const existingIndex = prevData.consomation.findIndex(
          (c) => c.consumption_id === consumption_id
        );
        if (existingIndex > -1) {
          if (prevData.consomation[existingIndex].quantity === 1) {
            prevData.consomation.splice(existingIndex, 1);
          } else {
            prevData.consomation[existingIndex].quantity -= 1;
          }
        }
        return { ...prevData };
      });
    }
  };
  const getQuantity = (consumption_id) => {
    const item = data.consomation.find(
      (c) => c.consumption_id === consumption_id
    );
    return item ? item.quantity : 0;
  };
  const handleSetData = (field, value) => {
    setData2((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("bookings.store"));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Chambres disponible" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Chambres disponible") }),
    /* @__PURE__ */ jsxs(PlaceholderContent, { children: [
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
        bookingData.is_company == 1 ? /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
          /* @__PURE__ */ jsx(
            FormInput,
            {
              label: "Nom",
              error: errors.first_name,
              type: "text",
              data: data.first_name,
              setData: handleSetData,
              fieldName: "first_name"
            }
          ),
          /* @__PURE__ */ jsx(
            FormInput,
            {
              label: "Adresse",
              error: errors.adresse,
              type: "text",
              data: data.adresse,
              setData: handleSetData,
              fieldName: "adresse"
            }
          )
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
          /* @__PURE__ */ jsx(
            FormInput,
            {
              label: "Nom",
              error: errors.first_name,
              type: "text",
              data: data.first_name,
              setData: handleSetData,
              fieldName: "first_name"
            }
          ),
          /* @__PURE__ */ jsx(
            FormInput,
            {
              label: "Prénom",
              error: errors.last_name,
              type: "text",
              data: data.last_name,
              setData: handleSetData,
              fieldName: "last_name"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, {}),
        bookingData.is_company == 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: "Numéro d'Identification Fiscale",
                error: errors.nif,
                type: "text",
                data: data.nif,
                setData: handleSetData,
                fieldName: "nif"
              }
            ),
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: "Numéro d'Identification Statistique",
                error: errors.nis,
                type: "text",
                data: data.nis,
                setData: handleSetData,
                fieldName: "nis"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Separator, {}),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: "Numéro  de registre de commerce",
                error: errors.nrc,
                type: "text",
                data: data.nrc,
                setData: handleSetData,
                fieldName: "nrc"
              }
            ),
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: "Numéro d'article",
                error: errors.n_article,
                type: "text",
                data: data.n_article,
                setData: handleSetData,
                fieldName: "n_article"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Separator, {})
        ] }),
        /* @__PURE__ */ jsx(
          FormInput,
          {
            label: "Email",
            label_descreption: "L'email doit être unique pour chaque utilisateur",
            error: errors.email,
            type: "email",
            data: data.email,
            setData: handleSetData,
            fieldName: "email"
          }
        ),
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsx(
          FormInput,
          {
            label: "N° téléphone",
            label_descreption: "Le N° téléphone doit être unique pour chaque utilisateur",
            error: errors.phone,
            type: "text",
            data: data.phone,
            setData: handleSetData,
            fieldName: "phone"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-2" }),
      /* @__PURE__ */ jsx(InputLabel, { className: "mb-2", children: useTrans("Choisi un ou plusieur chambres à réserver") }),
      /* @__PURE__ */ jsxs("table", { className: "table-auto border-collapse w-full border", children: [
        /* @__PURE__ */ jsxs("thead", { children: [
          /* @__PURE__ */ jsx("th", { children: useTrans("Numéro de chambre") }),
          /* @__PURE__ */ jsx("th", { children: useTrans("Type de chambre") }),
          /* @__PURE__ */ jsxs("th", { children: [
            useTrans("Prix TTC"),
            " "
          ] }),
          /* @__PURE__ */ jsx("th", { children: useTrans("Caractéristiques") })
        ] }),
        /* @__PURE__ */ jsx("tbody", { children: rooms.map((room) => /* @__PURE__ */ jsxs(
          "tr",
          {
            onClick: () => handleRooms(room),
            className: cn(
              "hover:bg-gray-200 hover:dark:bg-gray-600 text-center border cursor-pointer",
              data.rooms.findIndex(
                (r) => r.id === room.id
              ) !== -1 ? "bg-muted" : ""
            ),
            children: [
              /* @__PURE__ */ jsxs("td", { children: [
                "Chambre N° ",
                room.room_number
              ] }),
              /* @__PURE__ */ jsx("td", { children: room.type.type_designation }),
              /* @__PURE__ */ jsxs("td", { children: [
                room.room_price,
                " ",
                useTrans("DA")
              ] }),
              /* @__PURE__ */ jsx("td", { className: "flex flex-wrap flex-row p-2 ", children: room.features.map((feature) => /* @__PURE__ */ jsxs(Badge, { children: [
                feature.features_name,
                " ",
                feature.need_value == true && " : " + feature.pivot.valeur
              ] })) })
            ]
          },
          room.room_number
        )) })
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-2" }),
      /* @__PURE__ */ jsx(InputLabel, { children: useTrans("Ajouter les consommation de cetter réservation") }),
      /* @__PURE__ */ jsxs(Accordion, { type: "multiple", className: "", children: [
        services.map((service) => /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: service.service_name,
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { children: service.service_name }),
              /* @__PURE__ */ jsx(AccordionContent, { className: "space-y-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-4", children: service.consomation.map(
                (consomation, idx) => {
                  return /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex justify-between gap-4 items-center",
                      children: [
                        /* @__PURE__ */ jsx(
                          InputLabel,
                          {
                            value: consomation.consumption_name
                          }
                        ),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center border rounded p-1 bg-muted", children: [
                          /* @__PURE__ */ jsx(
                            CircleMinus,
                            {
                              onClick: () => decrement(
                                consomation.consumption_id
                              ),
                              className: "cursor-pointer hover:text-secondary"
                            }
                          ),
                          /* @__PURE__ */ jsx("span", { className: "w-1/2 flex justify-center", children: getQuantity(
                            consomation.consumption_id
                          ) }),
                          /* @__PURE__ */ jsx(
                            CirclePlus,
                            {
                              onClick: () => increment(
                                consomation
                              ),
                              className: "cursor-pointer hover:text-secondary"
                            }
                          )
                        ] })
                      ]
                    },
                    consomation.consumption_id
                  );
                }
              ) }) })
            ]
          },
          service.service_id
        )),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: (_a = errors.consomations) == null ? void 0 : _a.message,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "sm",
          type: "submit",
          onClick: submit,
          children: useTrans("Réserver")
        }
      ) })
    ] })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AviableRooms$1
}, Symbol.toStringTag, { value: "Module" }));
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}, ref) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y"
  }, plugins);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api == null ? void 0 : api.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api == null ? void 0 : api.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  }, [scrollPrev, scrollNext]);
  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api == null ? void 0 : api.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeftIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRightIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx(
  TogglePrimitive.Root,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle.displayName = TogglePrimitive.Root.displayName;
const FixedMenu = ({
  editor,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("flex flex-wrap gap-1 border-b p-0.5", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(Items, { editor }),
        /* @__PURE__ */ jsx(
          Toggle,
          {
            size: "sm",
            onClick: () => editor.chain().focus().toggleBold().run(),
            disabled: !editor.can().chain().focus().toggleItalic().run(),
            pressed: editor.isActive("bold"),
            children: /* @__PURE__ */ jsx(Bold, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Toggle,
          {
            size: "sm",
            onClick: () => editor.chain().focus().toggleItalic().run(),
            disabled: !editor.can().chain().focus().toggleItalic().run(),
            pressed: editor.isActive("italic"),
            children: /* @__PURE__ */ jsx(Italic, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Toggle,
          {
            size: "sm",
            onClick: () => editor.chain().focus().toggleUnderline().run(),
            disabled: !editor.can().chain().focus().toggleUnderline().run(),
            pressed: editor.isActive("underline"),
            children: /* @__PURE__ */ jsx(Underline, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Toggle,
          {
            size: "sm",
            onClick: () => editor.chain().focus().toggleStrike().run(),
            disabled: !editor.can().chain().focus().toggleStrike().run(),
            pressed: editor.isActive("strike"),
            children: /* @__PURE__ */ jsx(Strikethrough, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(LinkButton, { editor }),
        /* @__PURE__ */ jsx(
          Toggle,
          {
            size: "sm",
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            pressed: editor.isActive("bulletList"),
            children: /* @__PURE__ */ jsx(List, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Toggle,
          {
            size: "sm",
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            pressed: editor.isActive("orderedList"),
            children: /* @__PURE__ */ jsx(ListOrdered, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => editor.chain().focus().setHorizontalRule().run(),
            children: /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => editor.chain().focus().setHardBreak().run(),
            children: /* @__PURE__ */ jsx(WrapText, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => editor.chain().focus().undo().run(),
            disabled: !editor.can().chain().focus().undo().run(),
            children: /* @__PURE__ */ jsx(Undo, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => editor.chain().focus().redo().run(),
            disabled: !editor.can().chain().focus().redo().run(),
            children: /* @__PURE__ */ jsx(Redo, { className: "h-4 w-4" })
          }
        )
      ]
    }
  );
};
const Items = ({ editor }) => {
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", className: "justify-between", children: [
      editor.isActive("heading") ? editor.isActive("heading", { level: 1 }) ? /* @__PURE__ */ jsx(Heading1, { className: "h-4 w-4" }) : editor.isActive("heading", { level: 2 }) ? /* @__PURE__ */ jsx(Heading2, { className: "h-4 w-4" }) : editor.isActive("heading", { level: 3 }) ? /* @__PURE__ */ jsx(Heading3, { className: "h-4 w-4" }) : null : /* @__PURE__ */ jsx(Pilcrow, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3 ml-2" })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { loop: true, align: "start", on: true, children: [
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          onClick: () => editor.chain().focus().setParagraph().run(),
          className: " data-[selected=true]:bg-gray-200/65 cursor-pointer gap-2",
          "data-selected": editor.isActive("paragraph"),
          children: [
            /* @__PURE__ */ jsx(Pilcrow, { className: "h-4 w-4" }),
            "Paragraphe"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
          className: " data-[selected=true]:bg-gray-200/65 cursor-pointer gap-2",
          "data-selected": editor.isActive("heading", { level: 1 }),
          children: [
            /* @__PURE__ */ jsx(Heading1, { className: "h-4 w-4" }),
            "Titre 1"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
          className: " data-[selected=true]:bg-gray-200/65 cursor-pointer gap-2",
          "data-selected": editor.isActive("heading", { level: 2 }),
          children: [
            /* @__PURE__ */ jsx(Heading2, { className: "h-4 w-4" }),
            "Titre 2"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
          "data-selected": editor.isActive("heading", { level: 3 }),
          className: " data-[selected=true]:bg-gray-200/65 cursor-pointer gap-2",
          children: [
            /* @__PURE__ */ jsx(Heading3, { className: "h-4 w-4" }),
            "Titre 3"
          ]
        }
      )
    ] })
  ] });
};
const LinkButton = ({ editor }) => {
  const [href, setHref] = React__default.useState("");
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", children: /* @__PURE__ */ jsx(Link2, { className: "h-4 w-4" }) }) }),
    /* @__PURE__ */ jsxs(PopoverContent, { className: "flex items-center gap-2 p-2", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          value: href,
          onValueChange: (value) => setHref(value),
          placeholder: "https://google.dz"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          size: "sm",
          variant: "ghost",
          onClick: () => editor.commands.setLink({ href }),
          children: "Ajouter"
        }
      )
    ] })
  ] });
};
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-muted", className),
      ...props
    }
  );
}
const baseExtensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: true
      // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: true
      // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    document: false
  }),
  Document,
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  Underline$1,
  Link$1
];
const RichEditor = ({
  className = "",
  classNames,
  editable = true,
  content,
  onContentChange,
  extensions,
  menu = "top",
  slotBefore,
  slotAfter,
  autofocus,
  spellCheck = true,
  length = 0
}) => {
  const extensionFn = () => {
    if (!extensions)
      return baseExtensions;
    return extensions({
      StarterKit,
      Document,
      Color,
      TextStyle,
      Underline: Underline$1,
      Link: Link$1,
      Placeholder
    });
  };
  const slotBeforeFn = (editor2) => {
    if (slotBefore)
      return slotBefore(editor2);
    if (!editable)
      return /* @__PURE__ */ jsx("div", {});
    if (menu === "top")
      return /* @__PURE__ */ jsx(
        FixedMenu,
        {
          editor: editor2,
          className: cn(classNames == null ? void 0 : classNames.fixedMenu)
        }
      );
    return void 0;
  };
  const slotAfterFn = (editor2) => {
    if (slotAfter)
      return slotAfter(editor2);
    if (menu === "bottom")
      return /* @__PURE__ */ jsx(
        FixedMenu,
        {
          editor: editor2,
          className: cn(classNames == null ? void 0 : classNames.fixedMenu)
        }
      );
    return void 0;
  };
  const onUpdateFn = ({ editor: editor2 }) => {
    onContentChange && onContentChange({
      json: editor2.getJSON(),
      html: editor2.getHTML(),
      text: editor2.getText()
    });
  };
  const editorPropsFn = () => {
    return {
      attributes: {
        class: cn(
          "p-2 prose prose-slate prose-sm sm:prose-base dark:prose-invert prose-a:text-blue-600 max-w-full focus:outline-none min-h-fit max-h-fit resize-y overflow-y-auto first:*:mt-0",
          classNames == null ? void 0 : classNames.content
        ),
        spellCheck: String(spellCheck)
      }
    };
  };
  const editor = useEditor({
    content,
    onUpdate: onUpdateFn,
    extensions: extensionFn(),
    editable,
    autofocus,
    editorProps: editorPropsFn()
  });
  if (length > 0) {
    const textContent = editor.getText().trim();
    if (textContent.length <= length) {
      return textContent;
    }
    return textContent.slice(0, length) + "...";
  }
  if (!editor) {
    return /* @__PURE__ */ jsx(Skeleton, { className: "h-40 w-full" });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "bg-card rounded border",
        className,
        classNames == null ? void 0 : classNames.root
      ),
      children: [
        slotBeforeFn(editor),
        /* @__PURE__ */ jsx(
          EditorContent,
          {
            editor,
            className: cn(classNames == null ? void 0 : classNames.wrapper)
          }
        ),
        slotAfterFn(editor)
      ]
    }
  );
};
function Booking({ booking }) {
  const totalPrice = () => {
    let total = 0;
    let days = (new Date(booking.check_out) - new Date(booking.check_in)) / (1e3 * 60 * 60 * 24);
    booking.rooms.map((room) => {
      total += room.pivot.room_price * days;
    });
    booking.consomation.map((consomation) => {
      total += consomation.consumption_price * consomation.pivot.quantity;
    });
    return total;
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Réservation" }),
    /* @__PURE__ */ jsx(
      PageHeading,
      {
        title: useTrans("Réservation de ") + booking.user.first_name + " " + booking.user.last_name
      }
    ),
    /* @__PURE__ */ jsxs(PlaceholderContent, { className: "flex flex-col md:flex-row gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-1/3 w-full flex md:flex-col gap-2", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "font-bold p-2", children: useTrans("Informations de client") }),
          /* @__PURE__ */ jsx(CardContent, { className: "flex justify-between p-2", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
              booking.user.first_name,
              " ",
              booking.user.last_name,
              " "
            ] }),
            /* @__PURE__ */ jsx("div", { children: booking.user.email }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: booking.user.phone })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "font-bold p-2", children: useTrans("Détails de réservation") }),
          /* @__PURE__ */ jsxs(CardContent, { className: "flex justify-between p-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                useTrans("Arrivée"),
                " "
              ] }),
              /* @__PURE__ */ jsx("div", { className: "font-bold", children: booking.check_in }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "12h00 - 23h00" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                useTrans("Départ"),
                " "
              ] }),
              /* @__PURE__ */ jsx("div", { className: "font-bold", children: booking.check_out }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "07h00 - 12h00" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { className: "flex justify-between p-2", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              useTrans("Nombre des personnes"),
              " "
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
              booking.guest_number,
              " "
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: useTrans("adult") }),
            booking.kids_number ? /* @__PURE__ */ jsxs(Fragment, { children: [
              " ",
              useTrans("et"),
              " ",
              /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
                booking.kids_number,
                " "
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: useTrans("bébés") })
            ] }) : null
          ] }) }),
          /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col items-start p-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              useTrans("Durée de séjour"),
              " "
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
              (new Date(booking.check_out) - new Date(booking.check_in)) / (1e3 * 60 * 60 * 24),
              " ",
              useTrans("nuit")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "p-2 font-bold", children: useTrans("Récapitulatif du montant") }),
          /* @__PURE__ */ jsxs(CardContent, { className: "p-2 text-3xl font-bold text-primary", children: [
            totalPrice(booking.rooms),
            " ",
            useTrans("DA")
          ] }),
          /* @__PURE__ */ jsx(CardFooter, { className: "p-2 text-muted-foreground", children: useTrans("Ce prix avec tout tax inclus") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:w-2/3 w-full h-fit bg-card p-2 pb-6 rounded-lg", children: [
        booking.rooms.map((room) => /* @__PURE__ */ jsxs(Card, { className: "w-full mb-2", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "font-bold p-2 pb-0 flex-row items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              useTrans("Chambre"),
              " ",
              room.type.type_designation,
              " ",
              useTrans("avec"),
              " ",
              room.beeds_number,
              " ",
              useTrans("lits")
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
              (new Date(booking.check_out) - new Date(booking.check_in)) / (1e3 * 60 * 60 * 24),
              " ",
              "x ",
              room.pivot.room_price,
              " ",
              useTrans("DA")
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { className: "p-2 ", children: room.features.slice(0, 4).map((feature) => /* @__PURE__ */ jsxs(
            Badge,
            {
              className: "m-0 w-autot",
              children: [
                feature.features_name,
                feature.need_value == true && ": " + feature.pivot.valeur
              ]
            },
            feature.feature_id
          )) }),
          /* @__PURE__ */ jsx(CardFooter, { className: "flex-col items-end p-2 pt-0", children: /* @__PURE__ */ jsxs(Dialog, { children: [
            /* @__PURE__ */ jsx(
              DialogTrigger,
              {
                className: buttonVariants({
                  variant: "link"
                }),
                children: useTrans("Voir Plus")
              }
            ),
            /* @__PURE__ */ jsxs(DialogContent, { className: "p-0", children: [
              /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { className: "p-0", children: /* @__PURE__ */ jsxs(Carousel, { children: [
                /* @__PURE__ */ jsx(CarouselContent, { children: room.assets.map(
                  (asset) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: asset.url,
                      alt: asset.name,
                      className: "w-full"
                    }
                  ) })
                ) }),
                /* @__PURE__ */ jsx(CarouselPrevious, {}),
                /* @__PURE__ */ jsx(CarouselNext, {})
              ] }) }) }),
              /* @__PURE__ */ jsxs(DialogDescription, { className: "p-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-bold text-foreground flex justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    useTrans("Chambre"),
                    " ",
                    room.type.type_designation,
                    " ",
                    useTrans("avec"),
                    " ",
                    room.beeds_number,
                    " ",
                    useTrans("lits")
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
                    " ",
                    room.pivot.room_price,
                    " ",
                    useTrans("DA")
                  ] })
                ] }),
                room.features.length > 0 && /* @__PURE__ */ jsxs("div", { className: "my-2 ", children: [
                  /* @__PURE__ */ jsx(Separator, {}),
                  /* @__PURE__ */ jsxs("div", { className: "font-bold text-foreground pb-2 flex justify-start", children: [
                    useTrans(
                      "Caractéristiques"
                    ),
                    " ",
                    ":"
                  ] }),
                  room.features.slice(0, 4).map((feature) => /* @__PURE__ */ jsxs(
                    Badge,
                    {
                      className: "m-0 w-autot",
                      children: [
                        feature.features_name,
                        feature.need_value == true && ": " + feature.pivot.valeur
                      ]
                    },
                    feature.feature_id
                  ))
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
                  /* @__PURE__ */ jsx(Separator, {}),
                  /* @__PURE__ */ jsx(
                    RichEditor,
                    {
                      className: "bg-transparent border-none max-h-[200px] overflow-auto",
                      autofocus: false,
                      editable: false,
                      content: room.room_descreption
                    }
                  )
                ] })
              ] })
            ] })
          ] }) })
        ] }, room.room_number)),
        booking.consomation.map((consomation) => /* @__PURE__ */ jsx(
          Card,
          {
            className: "w-full mb-2",
            children: /* @__PURE__ */ jsxs(CardHeader, { className: "p-2 font-bold flex flex-row items-center justify-between", children: [
              /* @__PURE__ */ jsx("div", { children: consomation.consumption_name }),
              /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
                consomation.pivot.quantity,
                " x",
                " ",
                consomation.consumption_price,
                " DA"
              ] })
            ] })
          },
          consomation.consumption_id
        ))
      ] })
    ] })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Booking
}, Symbol.toStringTag, { value: "Module" }));
const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
const Pagination = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: cn("mx-auto flex w-full justify-center", className),
    ...props
  }
);
Pagination.displayName = "Pagination";
const PaginationContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    className: cn("flex flex-row items-center gap-1", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
const PaginationItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, className: cn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
function DataTablePagination({ tabledata }) {
  const navigateTo = (url) => {
    router.visit(url, {
      preserveState: true,
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-2 mt-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex text-sm text-muted-foreground", children: [
      tabledata.to - tabledata.from + 1,
      " / ",
      tabledata.total,
      " ",
      useTrans("ligne(s) afficher")
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx(Pagination, { children: /* @__PURE__ */ jsxs(PaginationContent, { children: [
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !tabledata.prev_page_url,
          onClick: () => navigateTo(tabledata.first_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to first page" }),
            /* @__PURE__ */ jsx(DoubleArrowLeftIcon, { className: "h-4 w-4" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !tabledata.prev_page_url,
          onClick: () => navigateTo(tabledata.prev_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to previous page" }),
            /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "h-4 w-4" })
          ]
        }
      ) }),
      tabledata.links.slice(1, -1).map((link) => /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: link.active ? "outline" : "ghost",
          className: "h-8 w-8 p-0",
          onClick: () => navigateTo(link.url),
          children: link.label
        }
      ) }, link.label)),
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !tabledata.next_page_url,
          onClick: () => navigateTo(tabledata.next_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to next page" }),
            /* @__PURE__ */ jsx(ChevronRightIcon, { className: "h-4 w-4" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !tabledata.next_page_url,
          onClick: () => navigateTo(tabledata.last_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to last page" }),
            /* @__PURE__ */ jsx(DoubleArrowRightIcon, { className: "h-4 w-4" })
          ]
        }
      ) })
    ] }) }) })
  ] });
}
function DataTableViewOptions({
  table
}) {
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "outline",
        size: "sm",
        className: "ml-auto h-8 lg:flex",
        children: [
          /* @__PURE__ */ jsx(MixerHorizontalIcon, { className: "mr-2 h-4 w-4" }),
          useTrans("Voir")
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-[150px]", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { children: useTrans("Basculer les colonnes") }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      table.getAllColumns().filter(
        (column) => typeof column.accessorFn !== "undefined" && column.getCanHide()
      ).map((column) => {
        return /* @__PURE__ */ jsx(
          DropdownMenuCheckboxItem,
          {
            className: "capitalize",
            checked: column.getIsVisible(),
            onCheckedChange: (value) => column.toggleVisibility(!!value),
            children: column.id
          },
          column.id
        );
      })
    ] })
  ] });
}
function DataTable({
  columns: columns2,
  data,
  paginate,
  selection
}) {
  var _a;
  const [sorting, setSorting] = React__default.useState([]);
  const [columnFilters, setColumnFilters] = React__default.useState([]);
  const [columnVisibility, setColumnVisibility] = React__default.useState({});
  const [rowSelection, setRowSelection] = React__default.useState({});
  const table = useReactTable({
    data,
    columns: columns2,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between py-4", children: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { children: /* @__PURE__ */ jsx(DataTableViewOptions, { table }) }),
      /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: useTrans(
        "Contrôler la visibilité des colonnes"
      ) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "rounded-md border", children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(TableRow, { children: headerGroup.headers.map((header) => {
        return /* @__PURE__ */ jsx(TableHead, { children: header.isPlaceholder ? null : flexRender(
          header.column.columnDef.header,
          header.getContext()
        ) }, header.id);
      }) }, headerGroup.id)) }),
      /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(
        TableRow,
        {
          "data-state": row.getIsSelected() && "selected",
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          ) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(
        TableCell,
        {
          colSpan: columns2.length,
          className: "h-24 text-center",
          children: "No results."
        }
      ) }) })
    ] }) }),
    selection && /* @__PURE__ */ jsxs("div", { className: "flex-1 text-sm text-muted-foreground", children: [
      table.getFilteredSelectedRowModel().rows.length,
      " / ",
      table.getFilteredRowModel().rows.length,
      " ",
      useTrans("ligne(s) sélectionné(s).")
    ] }),
    paginate && /* @__PURE__ */ jsx(DataTablePagination, { tabledata: paginate })
  ] });
}
function ColumnHeader({ title }) {
  return /* @__PURE__ */ jsxs("div", { className: "rtl:text-right", children: [
    " ",
    useTrans(title),
    " "
  ] });
}
const historiqueColumns = [
  {
    accessorKey: "Client",
    cell: ({ row }) => {
      const booking = row.original;
      return /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-bold text-base", children: [
          booking.user.first_name,
          " ",
          booking.user.last_name
        ] }),
        booking.user.email
      ] });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "Client" })
  },
  {
    accessorKey: "Check in",
    cell: ({ row }) => {
      const booking = row.original;
      return /* @__PURE__ */ jsx("span", { children: booking.check_in });
    },
    header: ({ column }) => (
      // <DataTableColumnHeader
      //     column={column}
      //     title={useTrans("Check in")}
      // />
      /* @__PURE__ */ jsx(ColumnHeader, { title: "Check in" })
    )
  },
  {
    accessorKey: "Check out",
    cell: ({ row }) => {
      const booking = row.original;
      return /* @__PURE__ */ jsx("span", { children: booking.check_out });
    },
    header: ({ column }) => (
      // <DataTableColumnHeader
      //     column={column}
      //     title={useTrans("Check out")}
      // />
      // <div> {useTrans("Check out")} </div>
      /* @__PURE__ */ jsx(ColumnHeader, { title: "Check out" })
    )
  },
  {
    accessorKey: "Date de réservation",
    cell: ({ row }) => {
      const booking = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        booking.created_at.split("T")[0],
        " "
      ] });
    },
    header: ({ column }) => (
      // <DataTableColumnHeader
      //     column={column}
      //     title={useTrans("Date de réservation")}
      // />
      /* @__PURE__ */ jsx(ColumnHeader, { title: "Date de réservation" })
    )
  },
  {
    accessorKey: "Status",
    cell: ({ row }) => {
      const booking = row.original;
      return booking.booking_status == "confirmer" ? /* @__PURE__ */ jsx(Badge, { variant: "success", children: booking.booking_status }) : booking.booking_status == "en attente" ? /* @__PURE__ */ jsx(Badge, { variant: "warning", children: booking.booking_status }) : /* @__PURE__ */ jsx(Badge, { variant: "danger", children: booking.booking_status });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "Status" })
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const booking = row.original;
      const { width } = useWindowDimensions();
      const [open, setopen] = React__default.useState(false);
      const [isopen, setIsOpen] = React__default.useState(false);
      const booking_permission = usePage().props.auth.permissions.booking;
      const handleBookingStatus = (status) => {
        router.post(
          route("bookings.change.status", booking.booking_id),
          { booking_status: status },
          {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
              setopen(false);
            }
          }
        );
      };
      const handleBill = (id, payment) => {
        router.post(
          route("factures.store", {
            booking_id: id,
            payment
          })
        );
      };
      return /* @__PURE__ */ jsxs(
        DropdownMenu,
        {
          open: isopen ? true : open,
          onOpenChange: setopen,
          children: [
            /* @__PURE__ */ jsxs(
              DropdownMenuTrigger,
              {
                className: buttonVariants({
                  variant: "ghost",
                  size: "icon"
                }),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
                  /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
              booking.booking_status == "confirmer" ? /* @__PURE__ */ jsx(DropdownMenuItem, { children: width >= 767 ? /* @__PURE__ */ jsxs(
                Dialog,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsxs(DialogTrigger, { className: "cursor-pointer flex", children: [
                      /* @__PURE__ */ jsx(ReceiptText, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                      /* @__PURE__ */ jsx("span", { children: useTrans("Facture") })
                    ] }),
                    /* @__PURE__ */ jsxs(DialogContent, { children: [
                      /* @__PURE__ */ jsxs(DialogHeader, { children: [
                        /* @__PURE__ */ jsx(DialogTitle, { children: useTrans(
                          "Mode de payment"
                        ) }),
                        /* @__PURE__ */ jsx(DialogDescription, { children: useTrans(
                          "Choisi le mode de payment pour cette facture"
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => handleBill(
                              booking.booking_id,
                              "espece"
                            ),
                            className: "flex justify-center",
                            size: "sm",
                            children: [
                              /* @__PURE__ */ jsx(HandCoins, { className: "mx-2 h-3.5 w-3.5" }),
                              useTrans("Espece")
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => handleBill(
                              booking.booking_id,
                              "chèque"
                            ),
                            className: "flex justify-center",
                            size: "sm",
                            children: [
                              /* @__PURE__ */ jsx(Ticket, { className: "mx-2 h-3.5 w-3.5" }),
                              useTrans("Chèque")
                            ]
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) : /* @__PURE__ */ jsxs(
                Drawer,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsxs(DrawerTrigger, { className: "cursor-pointer flex", children: [
                      /* @__PURE__ */ jsx(ReceiptText, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                      /* @__PURE__ */ jsx("span", { children: useTrans("Facture") })
                    ] }),
                    /* @__PURE__ */ jsxs(DrawerContent, { children: [
                      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
                        /* @__PURE__ */ jsx(DrawerTitle, { children: useTrans(
                          "Mode de payment"
                        ) }),
                        /* @__PURE__ */ jsx(DrawerDescription, { children: useTrans(
                          "Choisi le mode de payment pour cette facture"
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => handleBill(
                              booking.booking_id,
                              "espece"
                            ),
                            className: "flex justify-center",
                            size: "sm",
                            children: [
                              /* @__PURE__ */ jsx(HandCoins, { className: "mx-2 h-3.5 w-3.5" }),
                              useTrans("Espece")
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => handleBill(
                              booking.booking_id,
                              "check"
                            ),
                            className: "flex justify-center",
                            size: "sm",
                            children: [
                              /* @__PURE__ */ jsx(Ticket, { className: "mx-2 h-3.5 w-3.5" }),
                              useTrans("Chèque")
                            ]
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) }) : booking.booking_status == "en attente" && booking_permission.update && route().current("bookings.index") ? /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "secondary",
                    onClick: () => handleBookingStatus("confirmer"),
                    children: "Confirmer"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "destructive",
                    onClick: () => handleBookingStatus("refusé"),
                    children: "Refusé"
                  }
                )
              ] }) : null,
              /* @__PURE__ */ jsxs(
                DropdownMenuItem,
                {
                  onClick: () => router.get(
                    route("bookings.show", booking.booking_id)
                  ),
                  className: "cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      useTrans("Voir"),
                      " "
                    ] })
                  ]
                }
              )
            ] })
          ]
        }
      );
    }
  }
];
function EmptyPage({ text, icon: Icon }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-6 items-center py-36", children: [
    /* @__PURE__ */ jsx("div", { className: "font-bold text-xl", children: useTrans(text) }),
    /* @__PURE__ */ jsx(Icon, { size: 100, className: "text-primary" })
  ] });
}
function Bookings({ bookings }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a, _b, _c;
    if (flash.message) {
      flash.message.status == "success" ? toast2({
        description: (_a = flash.message) == null ? void 0 : _a.message
      }) : toast2({
        variant: "destructive",
        title: "Ereur !",
        description: (_b = flash.message) == null ? void 0 : _b.message,
        action: ((_c = flash.message) == null ? void 0 : _c.action) != null && /* @__PURE__ */ jsx(
          ToastAction,
          {
            altText: "Paramètre de facturation",
            onClick: () => router.get(route("factures.index")),
            children: "Paramètre de facturation"
          }
        )
      });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Bookings" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Réservations") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: bookings.data.length ? /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: historiqueColumns,
        data: bookings.data,
        paginate: bookings,
        selection: false
      }
    ) : /* @__PURE__ */ jsx(
      EmptyPage,
      {
        text: "Aucun réservations pour l'instant, essayez de créer une nouvelle",
        icon: BookmarkCheck
      }
    ) })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bookings
}, Symbol.toStringTag, { value: "Module" }));
dayjs.extend(isBetween);
function Calender({ rooms }) {
  const [open, setOpen] = useState(false);
  const [drawerData, setDrawerData] = useState();
  const [range, setRange] = useState({
    startDate: /* @__PURE__ */ new Date(),
    endDate: /* @__PURE__ */ new Date()
  });
  const handleTileclick = (data) => {
    setDrawerData(data);
    setOpen(true);
  };
  const handleItemClick = (data) => {
    console.log(data.label.title);
  };
  const transformedRooms = rooms.map((room) => {
    var _a;
    return {
      id: room.room_number,
      label: {
        icon: (_a = room.assets[0]) == null ? void 0 : _a.url,
        title: `Chambres N° ${room.room_number}`,
        subtitle: room.type.type_designation
      },
      data: room.bookings.map((booking) => ({
        id: booking.booking_id,
        startDate: new Date(booking.check_in),
        endDate: new Date(booking.check_out),
        title: booking.user_id,
        subtitle: booking.guest_number
      }))
    };
  });
  const filterData = useMemo(
    () => transformedRooms.map((room) => ({
      ...room,
      data: room.data.filter(
        (booking) => dayjs(booking.startDate).isBetween(
          range.startDate,
          range.endDate
        ) || dayjs(booking.endDate).isBetween(
          range.startDate,
          range.endDate
        ) || dayjs(booking.startDate).isBefore(
          range.startDate,
          "day"
        ) && dayjs(booking.endDate).isAfter(
          range.endDate,
          "day"
        )
      )
    })),
    [range.endDate, range.startDate]
  );
  const handelRangeChange = useCallback((range2) => {
    setRange(range2);
  }, []);
  const langs = [
    {
      id: "fr",
      lang: {
        feelingEmpty: "je me sens vide...",
        free: "Libre",
        loadNext: "Suivant",
        loadPrevious: "Précédent",
        over: "sur",
        taken: "Prise",
        topbar: {
          filters: "Filters",
          next: "Suivant",
          prev: "Précédent",
          today: "Aujourd'hui",
          view: "Voir"
        },
        search: "rechercher",
        week: "Semaine"
      },
      translateCode: "fr-FR"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs(Drawer$1.Root, { open, onOpenChange: setOpen, direction: "right", children: [
      /* @__PURE__ */ jsx(Drawer$1.Trigger, { children: "Open" }),
      /* @__PURE__ */ jsxs(Drawer$1.Portal, { children: [
        /* @__PURE__ */ jsx(Drawer$1.Overlay, { className: "fixed inset-0  z-[600] bg-black/40" }),
        /* @__PURE__ */ jsxs(Drawer$1.Content, { className: "bg-muted  z-[6000] flex flex-col rounded h-full w-2/3 mt-24 fixed bottom-0 right-0", children: [
          /* @__PURE__ */ jsx(Drawer$1.Handle, {}),
          /* @__PURE__ */ jsx("div", { className: "p-10", children: /* @__PURE__ */ jsx("pre", { children: JSON.stringify(drawerData, null, 2) }) })
        ] }),
        /* @__PURE__ */ jsx(Drawer$1.Overlay, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      Scheduler,
      {
        data: filterData,
        isLoading: false,
        onRangeChange: handelRangeChange,
        onTileClick: handleTileclick,
        onItemClick: handleItemClick,
        config: {
          zoom: 1,
          filterButtonState: -1,
          maxRecordsPerPage: 10,
          includeTakenHoursOnWeekendsInDayView: true,
          showTooltip: false,
          lang: "fr",
          translations: langs
        }
      }
    )
  ] });
}
function Calendar({ rooms }) {
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx(PageHeading, { title: "Calendrier" }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsx("div", { className: "w-full relative h-[600px]", children: /* @__PURE__ */ jsx(Calender, { rooms }) }) })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Calendar
}, Symbol.toStringTag, { value: "Module" }));
function Historique({ bookings }) {
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Historique" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Historique") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: bookings.data.length ? /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: historiqueColumns,
        data: bookings.data,
        paginate: bookings,
        selection: false
      }
    ) : /* @__PURE__ */ jsx(
      EmptyPage,
      {
        text: "Aucun réservations pour l'instant, essayez de créer une nouvelle",
        icon: Archive
      }
    ) })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Historique
}, Symbol.toStringTag, { value: "Module" }));
function DataCart({
  data,
  last_data,
  header_text,
  footer_text = "",
  side
}) {
  const calculate = (last, now) => {
    if (last > 0) {
      return 100 * ((now - last) / last);
    } else {
      return 0;
    }
  };
  return /* @__PURE__ */ jsxs(Card, { className: "w-1/2", children: [
    /* @__PURE__ */ jsxs(
      CardHeader,
      {
        className: cn(
          "p-2 pb-0 text-sm font-medium",
          side && "flex-row justify-between items-center"
        ),
        children: [
          /* @__PURE__ */ jsx("span", { children: useTrans(header_text) }),
          side == "left" && /* @__PURE__ */ jsx(ArrowLeft, { className: "text-green-600 dark:text-green-400 " }),
          side == "right" && /* @__PURE__ */ jsx(ArrowRight, { className: "text-red-600 dark:text-red-600" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(CardContent, { className: "p-2 font-bold text-4xl", children: [
      "+ ",
      data
    ] }),
    footer_text && /* @__PURE__ */ jsxs(
      CardFooter,
      {
        className: cn(
          "p-2 pt-0 text-sm font-medium",
          last_data > data ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"
        ),
        children: [
          calculate(last_data, data) > 0 && "+",
          calculate(last_data, data),
          "% ",
          useTrans(footer_text)
        ]
      }
    )
  ] });
}
const Chart = React__default.lazy(() => import("./assets/Chart-Di3lsD_P.js"));
function Dashboard$1({
  check_ins,
  check_outs,
  day_bookings,
  last_day_bookings,
  month_bookings,
  last_month_bookings,
  bookingCounts
}) {
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Tableaux De Bord") }),
    /* @__PURE__ */ jsxs(PlaceholderContent, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6 flex-full lg:w-1/2", children: [
          /* @__PURE__ */ jsx(
            DataCart,
            {
              header_text: "Entrés d'aujourd'hui",
              left: true,
              data: check_ins,
              side: "left"
            }
          ),
          /* @__PURE__ */ jsx(
            DataCart,
            {
              header_text: "Sorties d'aujourd'hui",
              right: true,
              data: check_outs,
              side: "right"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6 flex-full lg:w-1/2", children: [
          /* @__PURE__ */ jsx(
            DataCart,
            {
              header_text: "Réservations de jour",
              data: day_bookings,
              last_data: last_day_bookings,
              footer_text: "du dernier jour"
            }
          ),
          /* @__PURE__ */ jsx(
            DataCart,
            {
              header_text: "Réservations de mois",
              data: month_bookings,
              last_data: last_month_bookings,
              footer_text: "du mois dernier"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        React__default.Suspense,
        {
          fallback: /* @__PURE__ */ jsx(Skeleton, { className: "w-full md:w-1/2 mt-4 h-1/2" }),
          children: /* @__PURE__ */ jsx(Chart, { bookingCounts })
        }
      )
    ] })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard$1
}, Symbol.toStringTag, { value: "Module" }));
const Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
const CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(MagnifyingGlassIcon, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx(
    Command$1.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(Command$1.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = Command$1.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command$1.Separator, { ref, className: cn("-mx-1 h-px bg-border", className), ...props }));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;
function CreateEmployes({ roles: roles2 }) {
  const [open, setOpen] = useState(false);
  const { data, setData: setData2, post, errors } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    role: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("users.store"));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Employes" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Inscription d'employé") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "first_name",
              value: useTrans("Prénom d'employé")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "first_name",
              value: data.first_name,
              onChange: (e) => setData2("first_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.first_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "md:hidden my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "last_name",
              value: useTrans("Nom d'employé")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "last_name",
              value: data.last_name,
              onChange: (e) => setData2("last_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.last_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "email",
              value: useTrans("Email d'employé")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "L'email doit être unique pour chaque utilisateur"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "email",
              value: useTrans("Email d'employé")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "email",
              value: data.email,
              onChange: (e) => setData2("email", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.email,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "phone",
              value: useTrans("N° téléphone d'employé")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Le N° téléphone doit être unique pour chaque utilisateur"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "phone",
              value: useTrans("N° téléphone d'employé")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "phone",
              value: data.phone,
              onChange: (e) => setData2("phone", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.phone,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "role",
              value: useTrans("Rôle")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans("Assigne un role au ce employé") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "role",
              value: useTrans("Rôle"),
              className: "mb-2"
            }
          ),
          /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
            /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                role: "combobox",
                "aria-expanded": open,
                className: "w-full justify-between",
                children: [
                  data.role ? data.role : useTrans(
                    "Sélectionner un role..."
                  ),
                  /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(PopoverContent, { children: /* @__PURE__ */ jsxs(Command, { children: [
              /* @__PURE__ */ jsx(
                CommandInput,
                {
                  placeholder: useTrans(
                    "Chercher un role..."
                  )
                }
              ),
              /* @__PURE__ */ jsxs(CommandList, { children: [
                /* @__PURE__ */ jsx(CommandEmpty, { children: "Auccun role" }),
                /* @__PURE__ */ jsx(CommandGroup, { children: roles2.map((role) => /* @__PURE__ */ jsxs(
                  CommandItem,
                  {
                    value: role.role_name,
                    onSelect: () => {
                      setData2(
                        "role",
                        role.role_name
                      );
                      setOpen(false);
                    },
                    children: [
                      role.role_name,
                      /* @__PURE__ */ jsx(
                        CheckIcon,
                        {
                          className: cn(
                            "ml-auto h-4 w-4",
                            data.role === role.role_name ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  role.id
                )) })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.role,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: useTrans("Créer")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateEmployes
}, Symbol.toStringTag, { value: "Module" }));
function EditEmployes({ roles: roles2, user }) {
  const [open, setOpen] = useState(false);
  const { data, setData: setData2, put, errors } = useForm({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
    role: user.role.role_name
  });
  const submit = (e) => {
    e.preventDefault();
    put(route("users.update", user.id));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Employes" }),
    /* @__PURE__ */ jsx(
      PageHeading,
      {
        title: useTrans("Modification les infromation d'employé")
      }
    ),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "first_name",
              value: useTrans("Prénom d'employé")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "first_name",
              value: data.first_name,
              onChange: (e) => setData2("first_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.first_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "md:hidden my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "last_name",
              value: useTrans("Nom d'employé")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "last_name",
              value: data.last_name,
              onChange: (e) => setData2("last_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.last_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "email",
              value: useTrans("Email d'employé")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "L'email doit être unique pour chaque utilisateur"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "email",
              value: useTrans("Email d'employé")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "email",
              value: data.email,
              onChange: (e) => setData2("email", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.email,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "phone",
              value: useTrans("N° téléphone d'employé")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Le N° téléphone doit être unique pour chaque utilisateur"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "phone",
              value: useTrans("N° téléphone d'employé")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "phone",
              value: data.phone,
              onChange: (e) => setData2("phone", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.phone,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "role",
              value: useTrans("Rôle")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans("Assigne un role au ce employé") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "role",
              value: useTrans("Rôle"),
              className: "mb-2"
            }
          ),
          /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
            /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                role: "combobox",
                "aria-expanded": open,
                className: "w-full justify-between",
                children: [
                  data.role ? data.role : useTrans(
                    "Sélectionner un role..."
                  ),
                  /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(PopoverContent, { children: /* @__PURE__ */ jsxs(Command, { children: [
              /* @__PURE__ */ jsx(
                CommandInput,
                {
                  placeholder: useTrans(
                    "Chercher un role..."
                  )
                }
              ),
              /* @__PURE__ */ jsxs(CommandList, { children: [
                /* @__PURE__ */ jsx(CommandEmpty, { children: "Auccun role" }),
                /* @__PURE__ */ jsx(CommandGroup, { children: roles2.map((role) => /* @__PURE__ */ jsxs(
                  CommandItem,
                  {
                    value: role.role_name,
                    onSelect: () => {
                      setData2(
                        "role",
                        role.role_name
                      );
                      setOpen(false);
                    },
                    children: [
                      role.role_name,
                      /* @__PURE__ */ jsx(
                        CheckIcon,
                        {
                          className: cn(
                            "ml-auto h-4 w-4",
                            data.role === role.role_name ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  role.id
                )) })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.role,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: useTrans("Enregistrer")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EditEmployes
}, Symbol.toStringTag, { value: "Module" }));
const userColumns = [
  {
    accessorKey: "Utilisateurs",
    cell: ({ row }) => {
      const user = row.original;
      return /* @__PURE__ */ jsxs("div", { children: [
        user.first_name,
        " ",
        user.last_name
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "Utilisateurs" })
  },
  {
    accessorKey: "Email",
    cell: ({ row }) => {
      const user = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        user.email,
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "Email" })
  },
  {
    accessorKey: "N° téléphone",
    cell: ({ row }) => {
      const user = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        user.phone,
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "N° téléphone" })
  },
  {
    accessorKey: "Rôle",
    cell: ({ row }) => {
      const user = row.original;
      return /* @__PURE__ */ jsxs(Badge, { children: [
        user.role.role_name,
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "Rôle" })
  },
  {
    accessorKey: "date d'inscription",
    cell: ({ row }) => {
      const user = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        " ",
        user.created_at.split("T")[0]
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "date d'inscription" })
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      const { width } = useWindowDimensions();
      const [open, setopen] = React__default.useState(false);
      const [isopen, setIsOpen] = React__default.useState(false);
      const employ_permission = usePage().props.auth.permissions.employ;
      usePage().props.roles;
      const handleDelete = () => {
        router.delete(route("users.destroy", user.id), {
          preserveScroll: true,
          preserveState: true,
          onSuccess: () => {
            setopen(false);
            setIsOpen(false);
          }
        });
      };
      return /* @__PURE__ */ jsxs(
        DropdownMenu,
        {
          open: isopen ? true : open,
          onOpenChange: () => setopen(!open),
          children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "h-8 w-8 p-0", children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
              /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
              employ_permission.update && /* @__PURE__ */ jsxs(
                DropdownMenuItem,
                {
                  className: "cursor-pointer flex",
                  onClick: () => router.get(route("users.edit", user.id)),
                  children: [
                    /* @__PURE__ */ jsx(Pencil, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    /* @__PURE__ */ jsx("span", { children: useTrans("Modifier") })
                  ]
                }
              ),
              employ_permission.delete && /* @__PURE__ */ jsx(DropdownMenuItem, { children: width >= 767 ? /* @__PURE__ */ jsxs(
                Dialog,
                {
                  open: isopen,
                  onOpenChange: () => setIsOpen(!isopen),
                  children: [
                    /* @__PURE__ */ jsxs(
                      DialogTrigger,
                      {
                        className: buttonVariants({
                          variant: "destructive"
                        }),
                        children: [
                          /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
                          useTrans("Supprimer")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(DialogContent, { children: [
                      /* @__PURE__ */ jsxs(DialogHeader, { children: [
                        /* @__PURE__ */ jsxs(DialogTitle, { children: [
                          useTrans(
                            "Vous êtes sure?"
                          ),
                          " "
                        ] }),
                        /* @__PURE__ */ jsx(DialogDescription, { children: useTrans(
                          "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce utilisateur"
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => setIsOpen(false),
                            children: useTrans("Annuler")
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "destructive",
                            onClick: () => handleDelete(),
                            className: "flex justify-center",
                            children: [
                              /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                              useTrans("Supprimer")
                            ]
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) : /* @__PURE__ */ jsxs(
                Drawer,
                {
                  open: isopen,
                  onOpenChange: () => etIsOpen(!isopen),
                  children: [
                    /* @__PURE__ */ jsxs(
                      DrawerTrigger,
                      {
                        className: buttonVariants({
                          variant: "destructive"
                        }),
                        children: [
                          /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
                          useTrans("Supprimer")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(DrawerContent, { children: [
                      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
                        /* @__PURE__ */ jsxs(DrawerTitle, { children: [
                          useTrans(
                            "Vous êtes sure?"
                          ),
                          " "
                        ] }),
                        /* @__PURE__ */ jsxs(DrawerDescription, { children: [
                          useTrans(
                            "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce utilisateur"
                          ),
                          " "
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "destructive",
                            onClick: () => handleDelete(),
                            className: "flex justify-center",
                            children: [
                              /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                              useTrans("Supprimer")
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: useTrans("Annuler") }) })
                      ] })
                    ] })
                  ]
                }
              ) })
            ] })
          ]
        }
      );
    }
  }
];
function Employees({ users }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const employ_permission = usePage().props.auth.permissions.employ;
  console.log(employ_permission);
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Employees" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Employés") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: employ_permission.create && /* @__PURE__ */ jsx(Button, { variant: "secondary", children: /* @__PURE__ */ jsxs(Link, { href: route("users.create"), children: [
      useTrans("Ajouter un employé"),
      " "
    ] }) }) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: userColumns,
        data: users.data,
        paginate: users,
        selection: false
      }
    ) })
  ] });
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Employees
}, Symbol.toStringTag, { value: "Module" }));
const fileTypes$8 = ["JPG", "PNG", "GIF"];
function MyFileUploader() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "bg-card mt-2 p-4 rounded flex justify-between items-center border-dashed border-2 border-secondary", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center", children: [
      /* @__PURE__ */ jsx(ImagePlus, {}),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: useTrans("Télécharger ou déposer des images ici") })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
      fileTypes$8.map((type) => type + ","),
      " "
    ] })
  ] }) });
}
function ImagesViewer({ images, errors, deleteImage }) {
  return /* @__PURE__ */ jsx("div", { className: "pb-4", children: images.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2", children: images.map((image, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: image.url,
        alt: `Selected ${index}`,
        className: "rounded-md object-cover aspect-video"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => deleteImage(index),
        className: buttonVariants({
          variant: "destructive",
          className: "absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer"
        }),
        children: /* @__PURE__ */ jsx(Trash, {})
      }
    ),
    errors && /* @__PURE__ */ jsx(
      InputError,
      {
        message: errors == null ? void 0 : errors[`assets.${index}`],
        className: "mt-2"
      }
    )
  ] }, index)) }) });
}
const fileTypes$7 = ["JPG", "PNG", "GIF"];
function CreateEvent() {
  const [importedFiles, setImportedFiles] = useState([]);
  const [dateRange, setDateRange] = useState({
    from: "",
    to: ""
  });
  const { data, setData: setData2, post, errors, clearErrors } = useForm({
    event_name: "",
    event_descreption: "",
    event_start_date: "",
    event_end_date: "",
    event_price: "",
    assets: []
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("events.store"));
  };
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const handleDateChange = (range) => {
    if (range == null ? void 0 : range.from) {
      const formattedDate = formatDate(range.from);
      setData2("event_start_date", formattedDate);
    }
    if (range == null ? void 0 : range.to) {
      const formattedDate = formatDate(range.to);
      setData2("event_end_date", formattedDate);
    }
    setDateRange(range);
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Service" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Création d'évènement") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "Date d'évènement",
              value: useTrans("Date d'évènement")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Entrer la date ou le range de date de début et fin d'évènement"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "Date d'évènement",
              value: useTrans("Date d'évènement")
            }
          ),
          /* @__PURE__ */ jsx(
            DatePickerWithRange,
            {
              date: dateRange,
              onDateChange: handleDateChange
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_start_date,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_end_date,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_name",
              value: useTrans("Nom de l'évènement")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Entrer un nom claire et simple pour le nom de l'évènement"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_name",
              value: useTrans("Nom de l'évènement")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              placeholder: useTrans(
                "Exemple : fête 16 Avrile"
              ),
              id: "event_name",
              value: data.event_name,
              onChange: (e) => setData2("event_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_price",
              value: useTrans("Prix")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Quelle est le prix d'accés d'évènement"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_price",
              value: useTrans("Prix")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "event_price",
              value: data.event_price,
              onChange: (e) => setData2("event_price", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_price,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_descreption",
              value: useTrans("Description")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Vous pouvez ajouter des titre ou bien des style au desciption"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_descreption",
              value: useTrans("Description")
            }
          ),
          /* @__PURE__ */ jsx(
            RichEditor,
            {
              autofocus: false,
              content: data.event_descreption,
              onContentChange: ({ html }) => {
                setData2("event_descreption", html);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_descreption,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: useTrans("Photos")
              }
            ),
            /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
              "Ajouter des photos au l'évènement (ne dépasse pas 10 photos par évènement)"
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: useTrans("Photos")
              }
            ),
            /* @__PURE__ */ jsx(
              FileUploader,
              {
                handleChange: handleFiles,
                name: "file",
                id: "assets",
                types: fileTypes$7,
                multiple: true,
                children: /* @__PURE__ */ jsx(MyFileUploader, {})
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.assets,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          ImagesViewer,
          {
            images: importedFiles,
            errors,
            deleteImage
          }
        ),
        " "
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: useTrans("Créer")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateEvent
}, Symbol.toStringTag, { value: "Module" }));
function DbImageViewer({ assets, importedFiles }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2", children: assets.map((image, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: image.url,
        alt: `Selected ${index}`,
        className: "rounded-md object-cover aspect-video"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => {
          (importedFiles > 1 || assets.length > 0) && router.visit(route("assets.delete", image.id), {
            method: "GET",
            preserveState: true,
            preserveScroll: true
          });
        },
        className: buttonVariants({
          variant: "destructive",
          className: "absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer"
        }),
        children: /* @__PURE__ */ jsx(Trash, {})
      }
    )
  ] }, index)) });
}
const fileTypes$6 = ["JPG", "PNG", "GIF"];
function EditEvent({ event }) {
  const [importedFiles, setImportedFiles] = useState([]);
  const [dateRange, setDateRange] = useState({
    from: new Date(event.event_start_date),
    to: new Date(event.event_end_date)
  });
  const { data, setData: setData2, post, errors, clearErrors } = useForm({
    event_name: event.event_name,
    event_descreption: event.event_descreption,
    event_start_date: event.event_start_date,
    event_end_date: event.event_end_date,
    event_price: event.event_price,
    assets: []
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("events.update", event.event_id));
  };
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const handleDateChange = (range) => {
    if (range == null ? void 0 : range.from) {
      const formattedDate = formatDate(range.from);
      setData2("event_start_date", formattedDate);
    }
    if (range == null ? void 0 : range.to) {
      const formattedDate = formatDate(range.to);
      setData2("event_end_date", formattedDate);
    }
    setDateRange(range);
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Service" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Modification d'évènement") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "Date d'évènement",
              value: useTrans("Date d'évènement")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Entrer la date ou le range de date de début et fin d'évènement"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "Date d'évènement",
              value: useTrans("Date d'évènement")
            }
          ),
          /* @__PURE__ */ jsx(
            DatePickerWithRange,
            {
              date: dateRange,
              onDateChange: handleDateChange
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_start_date,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_end_date,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_name",
              value: useTrans("Nom de l'évènement")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Entrer un nom claire et simple pour le nom de l'évènement"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_name",
              value: useTrans("Nom de l'évènement")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              placeholder: useTrans(
                "Exemple : fête 16 Avrile"
              ),
              id: "event_name",
              value: data.event_name,
              onChange: (e) => setData2("event_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_price",
              value: useTrans("Prix")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Quelle est le prix d'accés d'évènement"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_price",
              value: useTrans("Prix")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "event_price",
              value: data.event_price,
              onChange: (e) => setData2("event_price", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_price,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_descreption",
              value: useTrans("Description")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Vous pouvez ajouter des titre ou bien des style au desciption"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_descreption",
              value: useTrans("Description")
            }
          ),
          /* @__PURE__ */ jsx(
            RichEditor,
            {
              autofocus: false,
              content: data.event_descreption,
              onContentChange: ({ html }) => {
                setData2("event_descreption", html);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_descreption,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: useTrans("Photos")
              }
            ),
            /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
              "Ajouter des photos au l'évènement (ne dépasse pas 10 photos par évènement)"
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: useTrans("Photos")
              }
            ),
            /* @__PURE__ */ jsx(
              FileUploader,
              {
                handleChange: handleFiles,
                name: "file",
                id: "assets",
                types: fileTypes$6,
                multiple: true,
                children: /* @__PURE__ */ jsx(MyFileUploader, {})
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.assets,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          ImagesViewer,
          {
            images: importedFiles,
            errors,
            deleteImage
          }
        ),
        " ",
        /* @__PURE__ */ jsx(
          DbImageViewer,
          {
            assets: event.assets,
            importedFiles: importedFiles.length
          }
        ),
        " "
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: useTrans("Enregistrer")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EditEvent
}, Symbol.toStringTag, { value: "Module" }));
function DeleteeDialog({ id, url, message }) {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  const handleDelete = (id2) => {
    router.delete(route(url, id2), {
      method: "delete",
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        setOpen(false);
      }
    });
  };
  if (width >= 767) {
    return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxs(
        DialogTrigger,
        {
          className: buttonVariants({ variant: "destructive" }),
          children: [
            /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
            useTrans("Supprimer")
          ]
        }
      ),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsxs(DialogTitle, { children: [
            useTrans("Vous êtes sure?"),
            " "
          ] }),
          /* @__PURE__ */ jsx(DialogDescription, { children: useTrans(message) })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              onClick: () => setOpen(false),
              children: useTrans("Annuler")
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "destructive",
              onClick: () => handleDelete(id),
              className: "flex justify-center",
              children: [
                /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                useTrans("Supprimer")
              ]
            }
          )
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxs(
      DrawerTrigger,
      {
        className: buttonVariants({ variant: "destructive" }),
        children: [
          /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
          useTrans("Supprimer")
        ]
      }
    ),
    /* @__PURE__ */ jsxs(DrawerContent, { children: [
      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
        /* @__PURE__ */ jsxs(DrawerTitle, { children: [
          useTrans("Vous êtes sure?"),
          " "
        ] }),
        /* @__PURE__ */ jsxs(DrawerDescription, { children: [
          useTrans(message),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "destructive",
            onClick: () => {
              handleDelete(id);
            },
            className: "flex justify-center",
            children: [
              /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
              useTrans("Supprimer")
            ]
          }
        ),
        /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: useTrans("Annuler") }) })
      ] })
    ] })
  ] });
}
function EventCardFooter$1({ event }) {
  const event_permission = usePage().props.event_permission;
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 justify-between w-full", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      useTrans("Créé par"),
      " :",
      " ",
      /* @__PURE__ */ jsxs("span", { children: [
        event.user.first_name,
        " ",
        event.user.last_name
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      event_permission.update && /* @__PURE__ */ jsx(Button, { variant: "secondary", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: route("events.edit", event.event_id),
          as: "button",
          children: useTrans("Modifier")
        }
      ) }),
      event_permission.delete && /* @__PURE__ */ jsx(
        DeleteeDialog,
        {
          id: event.event_id,
          url: "events.destroy",
          message: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette évènement"
        }
      )
    ] })
  ] });
}
function EventCard({ event }) {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Card, { className: "transition-transform ease-in-out duration-700 relative my-6 ", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(Carousel, { children: [
      /* @__PURE__ */ jsx(CarouselContent, { className: "h-full ", children: event.assets.map((asset, index) => /* @__PURE__ */ jsx(
        CarouselItem,
        {
          className: "md:basis-1/2 lg:basis-1/3",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: asset.url,
              alt: `Selected ${index}`,
              className: "rounded-md object-cover aspect-video w-full"
            }
          )
        },
        index
      )) }),
      /* @__PURE__ */ jsx(CarouselPrevious, { className: "bg-secondary left-0 text-secondary-foreground" }),
      /* @__PURE__ */ jsx(CarouselNext, { className: "bg-secondary right-0 text-secondary-foreground" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between w-full", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "text-lg font-bold text-xl flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { children: event.event_name }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-muted p-2 rounded", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            useTrans("Prix"),
            " "
          ] }),
          ":",
          /* @__PURE__ */ jsx("span", { className: "text-destructive text-2xl font-bold", children: event.event_price }),
          " ",
          /* @__PURE__ */ jsxs("span", { children: [
            useTrans("DA"),
            " "
          ] })
        ] })
      ] }),
      isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(CardContent, { children: [
          event.event_start_date == event.event_end_date ? /* @__PURE__ */ jsxs("div", { children: [
            useTrans("Date d'évènement"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: event.event_start_date })
          ] }) : /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              useTrans("Date début d'évènement"),
              " :",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: event.event_start_date })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              useTrans("Date fin d'évènement"),
              " :",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: event.event_end_date })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "font-bold text-lg my-4", children: [
              useTrans("Description"),
              " :",
              " "
            ] }),
            /* @__PURE__ */ jsx(
              RichEditor,
              {
                autofocus: false,
                editable: false,
                content: event.event_descreption
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(EventCardFooter$1, { event }) })
      ] })
    ] }),
    width >= 767 && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 right-1/2 translate-x-1/2 z-20", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: buttonVariants({
          variant: "outline",
          size: "icon"
        }),
        onClick: () => setIsOpen(!isOpen),
        children: /* @__PURE__ */ jsx(
          ChevronUp,
          {
            className: cn(
              "h-4 w-4 transition-transform ease-in-out duration-700 ",
              isOpen === false ? "rotate-180" : "rotate-0"
            )
          }
        )
      }
    ) })
  ] });
}
function Events$1({ events, event_permission }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  console.log(events);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Events" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Evènements") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: event_permission.create && /* @__PURE__ */ jsx(Button, { variant: "secondary", children: /* @__PURE__ */ jsx(Link, { href: route("events.create"), children: useTrans("Créer un évènement") }) }) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: events.lenght ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "font-bold p-4", children: [
        useTrans("List des évènements"),
        " :"
      ] }),
      events.map((event) => /* @__PURE__ */ jsx(EventCard, { event }, event.event_id))
    ] }) : /* @__PURE__ */ jsx(
      EmptyPage,
      {
        text: "Aucun évènement pour l'instant, essayez de créer une nouvelle",
        icon: Megaphone
      }
    ) })
  ] });
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Events$1
}, Symbol.toStringTag, { value: "Module" }));
function CreateFacture() {
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Facture Création" }),
    /* @__PURE__ */ jsx(PageHeading, { title: "Facture Création" }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: "Facture Création " })
  ] });
}
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateFacture
}, Symbol.toStringTag, { value: "Module" }));
function CreateGuests({ facture_id }) {
  const { data, setData: setData2, post, errors } = useForm({
    facture_id,
    guests_list: [{ guest_first_name: "", guest_last_name: "" }]
  });
  const addGuest = () => {
    setData2("guests_list", [
      ...data.guests_list,
      { guest_first_name: "", guest_last_name: "" }
    ]);
  };
  const minesGuest = (index) => {
    if (data.guests_list.length == 1) {
      return;
    }
    const updatedGuests = data.guests_list.filter((_, i) => i !== index);
    setData2("guests_list", updatedGuests);
  };
  const handleGuestChange = (index, field, value) => {
    const updatedGuests = data.guests_list.map(
      (guest, i) => i === index ? { ...guest, [field]: value } : guest
    );
    setData2("guests_list", updatedGuests);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("guests.store"));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "List d'invités" }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", onClick: addGuest, children: [
      /* @__PURE__ */ jsx(CirclePlus, { className: "mr-2 rtl:ml-2" }),
      useTrans("Ajouter")
    ] }) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      data.guests_list.map((guest, index) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: `guest_first_name_${index}`,
                value: useTrans("Prénom")
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                className: "mt-2 w-full bg-card",
                id: `guest_first_name_${index}`,
                value: guest.guest_first_name,
                onChange: (e) => handleGuestChange(
                  index,
                  "guest_first_name",
                  e.target.value
                )
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors[`guests_list.${index}.first_name`],
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: `guest_last_name_${index}`,
                value: useTrans("Nom")
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                className: "mt-2 w-full bg-card",
                id: `guest_last_name_${index}`,
                value: guest.guest_last_name,
                onChange: (e) => handleGuestChange(
                  index,
                  "guest_last_name",
                  e.target.value
                )
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors[`guests_list.${index}.guest_last_name`],
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center ", children: /* @__PURE__ */ jsx(
            CircleMinus,
            {
              className: "cursor-pointer hover:text-red-600",
              onClick: () => minesGuest(index)
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "my-4" })
      ] })),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: useTrans("Enregistrer") }) })
    ] }) })
  ] });
}
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateGuests
}, Symbol.toStringTag, { value: "Module" }));
function Facture({ facture, data, mail, total_ttc_words }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Facture" }),
    /* @__PURE__ */ jsx(PageHeading, { title: "Facture" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: route("factures.send", {
            id: facture.facture_id
          }),
          className: "flex w-full" + buttonVariants({ variant: "secondary", size: "sm" }),
          as: "button",
          children: [
            /* @__PURE__ */ jsx(Send, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
            /* @__PURE__ */ jsx("span", { children: useTrans("Email") })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: route("factures.print", {
            id: facture.facture_id
          }),
          target: "_blank",
          children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", children: [
            /* @__PURE__ */ jsx(Printer, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
            /* @__PURE__ */ jsx("span", { children: useTrans("Imprimer") })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: route("factures.download", {
            id: facture.facture_id
          }),
          children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", children: [
            /* @__PURE__ */ jsx(FileDown, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
            /* @__PURE__ */ jsx("span", { children: useTrans("Télécharger") })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("div", { className: "p-10 font-sans", children: [
      /* @__PURE__ */ jsxs("header", { className: "flex justify-between mb-4", children: [
        /* @__PURE__ */ jsx("div", { children: "Hôtel Sidi El Noui" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(AppLogo, { className: "h-10 w-10" }) }),
        /* @__PURE__ */ jsx("div", { children: "فندق سيدي النوي" })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "mb-4" }),
      /* @__PURE__ */ jsxs("main", { children: [
        /* @__PURE__ */ jsxs("section", { className: "text-center font-semibold mb-5", children: [
          /* @__PURE__ */ jsx("div", { children: "Siege Social : 18 rue Alioua Fodil CHERAGA" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: "Tél : 023 35 82 26 / 30 " }),
            /* @__PURE__ */ jsx("span", { children: "Fax : 023 35 82 32 / 34" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "Mail:",
              mail
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-1/2", children: [
          /* @__PURE__ */ jsxs("div", { className: "font-semibold mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block w-1/2", children: "Facture" }),
            /* @__PURE__ */ jsx("span", { className: "inline-block w-1/2 text-right", children: facture.facture_id })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "font-semibold mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block w-1/2", children: "Facturé le" }),
            /* @__PURE__ */ jsx("span", { className: "inline-block w-1/2 text-right", children: facture.created_at.split("T")[0] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-left my-4", children: [
          /* @__PURE__ */ jsx("div", { children: "Doit" }),
          /* @__PURE__ */ jsxs("div", { className: "border-2 border-black p-2 mt-2 h-36 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.first_name }),
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.last_name }),
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.adresse && " / Adresse : " + facture.booking.user.adresse + " / " }),
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.nif && "Numéro d'Identification Fiscale : " + facture.booking.user.nif + " / " }),
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.nis && "Numéro d'Identification Statistique : " + facture.booking.user.nis + " / " }),
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.nrc && "Numéro  de registre de commerce : " + facture.booking.user.nrc + " / " }),
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.n_article && "Numéro d'article : " + facture.booking.user.n_article })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse border border-black mb-6", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-muted text-muted-foreground", children: [
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2", children: "Description" }),
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2", children: "Date" }),
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2", children: "Nombre de jours" }),
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2", children: "Quantité" }),
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2", children: "Prix unitaire" }),
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2", children: "Montant HT" })
            ] }) }),
            /* @__PURE__ */ jsxs("tbody", { children: [
              data.rooms.map((room, index) => /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: room.room }),
                /* @__PURE__ */ jsxs("td", { className: "border border-black p-2", children: [
                  facture.booking.check_in,
                  " AU",
                  " ",
                  facture.booking.check_out
                ] }),
                /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: (new Date(
                  facture.booking.check_out
                ) - new Date(
                  facture.booking.check_in
                )) / (1e3 * 60 * 60 * 24) }),
                /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: room.quantity }),
                /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: room.unitare_price }),
                /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: room.unitare_price * room.quantity })
              ] }, index)),
              data.consomations.map(
                (consomation, index) => /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: consomation.consumption_name }),
                  /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: "/" }),
                  /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: "/" }),
                  /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: consomation.quantity }),
                  /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: consomation.unitare_price }),
                  /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: consomation.unitare_price * consomation.quantity })
                ] }, index)
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("table", { className: "w-2/5 ml-auto border-collapse border border-black", children: /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2 bg-muted text-muted-foreground", children: "Total HT" }),
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: data.total_ht })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("th", { className: "border border-black p-2 bg-muted text-muted-foreground", children: [
                "Total TVA ",
                facture.tva,
                "%"
              ] }),
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: data.total_tva })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: "Sous Total" }),
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: data.sous_total })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: "Taxe de séjour" }),
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: data.taxe_de_sejour })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: "Droit de timbre" }),
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: data.droit_de_timbre })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: "Total TTC" }),
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: data.total_ttc })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6", children: "LA PRESENTE FACTURE EST ARRETEE A LA SOMME DE :" }),
        /* @__PURE__ */ jsx("p", { className: "font-bold", children: total_ttc_words })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6" }),
      /* @__PURE__ */ jsxs("footer", { className: "mt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "footer-1 text-center mb-2", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "Sarl au capital de: 3 000 000 DA" }),
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "RC : 16/00-0011557 B 00" }),
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "NIF : 000016001155791" }),
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "A.I : 16500 35 10 11" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "footer-2 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "NIS : 0000165008341 61" }),
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "CPA Agence de AIN BENIAN" }),
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "RIB : 004 00 153 400 082361141" })
        ] })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Facture
}, Symbol.toStringTag, { value: "Module" }));
const factureColumns = [
  {
    accessorKey: "N° Facture",
    cell: ({ row }) => {
      const facture = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        facture.facture_id,
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "N° Facture" })
  },
  {
    accessorKey: "Client",
    cell: ({ row }) => {
      const facture = row.original;
      return /* @__PURE__ */ jsxs("div", { children: [
        facture.booking.user.first_name,
        " ",
        facture.booking.user.last_name
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "Client" })
  },
  {
    accessorKey: "Email",
    cell: ({ row }) => {
      const facture = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        facture.booking.user.email,
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "Email" })
  },
  {
    accessorKey: "Date",
    cell: ({ row }) => {
      function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      }
      const facture = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        formatDate(facture.created_at),
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "Date" })
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const facture = row.original;
      console.log(facture.booking.user.role.role_name);
      return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "h-8 w-8 p-0", children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
          /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
          facture.booking.user.role.role_name == "sositée" && /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("guests.show", {
                id: facture.facture_id
              }),
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(ClipboardList, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                useTrans("List des invités")
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("factures.show", {
                id: facture.facture_id
              }),
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                useTrans("Voir")
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("factures.send", {
                id: facture.facture_id
              }),
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(Send, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                /* @__PURE__ */ jsx("span", { children: useTrans("Email") })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: route("factures.print", {
                id: facture.facture_id
              }),
              target: "_blank",
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(Printer, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                /* @__PURE__ */ jsx("span", { children: useTrans("Imprimer") })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: route("factures.download", {
                id: facture.facture_id
              }),
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(FileDown, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                /* @__PURE__ */ jsx("span", { children: useTrans("Télécharger") })
              ]
            }
          ) })
        ] })
      ] });
    }
  }
];
function FactureSettings({ bill_settings }) {
  const [open, setOpen] = React__default.useState(false);
  const { data, setData: setData2, errors, post } = useForm({
    tva: bill_settings == null ? void 0 : bill_settings.tva,
    timbre: bill_settings == null ? void 0 : bill_settings.timbre,
    tourist_tax: bill_settings == null ? void 0 : bill_settings.tourist_tax
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("factures.bill.settings"), {
      onSuccess: () => setOpen(false)
    });
  };
  return /* @__PURE__ */ jsxs(Sheet, { open: open || !bill_settings, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(SheetTrigger, { children: /* @__PURE__ */ jsx(Settings2, {}) }),
    /* @__PURE__ */ jsx(SheetContent, { children: /* @__PURE__ */ jsxs(SheetHeader, { children: [
      /* @__PURE__ */ jsx(SheetTitle, { children: useTrans("Parametre de facture") }),
      /* @__PURE__ */ jsx(SheetDescription, { children: useTrans("Modifier les constant de facturation içi") }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full bg-muted p-4 shadow my-4", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "tva", value: "TVA" }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans("La valeur de TVA en %") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "tva",
              value: data.tva,
              onChange: (e) => setData2("tva", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.tva, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsxs("div", { className: "w-full bg-muted p-4 shadow my-4", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "tourist_tax",
              value: useTrans("Taxe de séjour")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "la valeur de taxe de séjour en DA/personne"
          ) }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "tourist_tax",
              value: data.tourist_tax,
              onChange: (e) => setData2("tourist_tax", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.tourist_tax,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsxs("div", { className: "w-full bg-muted p-4 shadow my-4", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "timbre",
              value: useTrans("Droit de timbre")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans("La valeur de tibmre en %") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "timbre",
              value: data.timbre,
              onChange: (e) => setData2("timbre", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.timbre,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            size: "sm",
            className: "w-full",
            children: useTrans("Enregistrer")
          }
        )
      ] })
    ] }) })
  ] });
}
function Factures({ factures, bill_settings }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const facture_permissions = usePage().props.auth.permissions.facture;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Factures" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Factures") }),
    facture_permissions.create && /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: /* @__PURE__ */ jsx(Link, { href: route("bookings.index"), children: useTrans("Générer pour une réservation") }) }),
      /* @__PURE__ */ jsx(FactureSettings, { bill_settings })
    ] }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: factures.data.lenght ? /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: factureColumns,
        data: factures.data,
        paginate: factures,
        selection: false
      }
    ) : /* @__PURE__ */ jsx(
      EmptyPage,
      {
        text: "Aucun factures pour l'instant, essayez de créer une nouvelle",
        icon: ReceiptText
      }
    ) })
  ] });
}
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Factures
}, Symbol.toStringTag, { value: "Module" }));
function GuestList({ guests }) {
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "List d'invités" }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        size: "sm",
        onClick: () => router.get(route("guests.create", 5)),
        children: useTrans("Ajouter des invités")
      }
    ) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("table", { className: "border w-full", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsxs("th", { className: "border px-4 ", children: [
          useTrans("Nom"),
          " "
        ] }),
        /* @__PURE__ */ jsxs("th", { className: "border px-4 ", children: [
          useTrans("Prénom"),
          " "
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: guests.map((guest) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-muted", children: [
        /* @__PURE__ */ jsxs("td", { className: "border px-4 ", children: [
          guest.guest_first_name,
          " "
        ] }),
        /* @__PURE__ */ jsx("td", { className: "border px-4 ", children: guest.guest_last_name })
      ] })) })
    ] }) })
  ] });
}
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GuestList
}, Symbol.toStringTag, { value: "Module" }));
const ResizablePanelGroup = ({ className, ...props }) => /* @__PURE__ */ jsx(
  ResizablePrimitive.PanelGroup,
  {
    className: cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    ),
    ...props
  }
);
const ResizablePanel = ResizablePrimitive.Panel;
const ResizableHandle = ({ withHandle, className, ...props }) => /* @__PURE__ */ jsx(
  ResizablePrimitive.PanelResizeHandle,
  {
    className: cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    ),
    ...props,
    children: withHandle && /* @__PURE__ */ jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ jsx(DragHandleDots2Icon, { className: "h-2.5 w-2.5" }) })
  }
);
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary dark:focus:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
function messages({ messages: messages2, filter }) {
  var _a, _b, _c, _d, _e, _f, _g;
  const [selectedMessage, setSelectedMessage] = useState(0);
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const hasUnreadMessages = usePage().props.hasUnreadMessages;
  const permission = usePage().props.auth.permissions.message;
  const { data, setData: setData2, post, errors } = useForm({
    message: "",
    client_email: (_a = messages2[selectedMessage]) == null ? void 0 : _a.client_email
  });
  useEffect(() => {
    var _a2;
    if (flash.message) {
      toast2({ description: (_a2 = flash.message) == null ? void 0 : _a2.message });
    }
  }, [flash.message, toast2]);
  const submit = (e) => {
    e.preventDefault();
    post(route("messages.reply"));
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}-${month}-${year}, ${hours}:${minutes}:${seconds}`;
  }
  function timeSince(date) {
    const now = /* @__PURE__ */ new Date();
    const past = new Date(date);
    const secondsAgo = Math.floor((now - past) / 1e3);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo > 0) {
      return `${daysAgo} jrs`;
    } else if (hoursAgo > 0) {
      return `${hoursAgo} h`;
    } else if (minutesAgo > 0) {
      return `${minutesAgo} min`;
    } else {
      return `${secondsAgo} s`;
    }
  }
  const readMessage = (id) => {
    router.put(
      route("messages.update", id),
      {},
      {
        preserveState: true,
        preserveScroll: true
      }
    );
  };
  const readAll = () => {
    router.get(route("messages.readAll"));
  };
  const getUnRead = () => {
    router.get(
      route("messages.index"),
      { filter: "unread" },
      { preserveState: true, preserveScroll: true }
    );
  };
  const getAll = () => {
    router.get(
      route("messages.index"),
      { filter: "all" },
      { preserveState: true, preserveScroll: true }
    );
  };
  const deleteMessage = (id) => {
    router.delete(route("messages.destroy", id));
  };
  const deleteAll = () => {
    router.delete(route("messages.destroyAll"));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Boîte de réception" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Boîte de réception") }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end mt-2 gap-4", children: [
      permission.update && /* @__PURE__ */ jsx(
        Button,
        {
          disabled: messages2.length < 1 || !hasUnreadMessages,
          onClick: () => {
            readAll();
          },
          variant: "ghost",
          className: "font-bold ",
          children: useTrans("Tout marquer comme lu")
        }
      ),
      permission.delete && /* @__PURE__ */ jsx(
        Button,
        {
          disabled: messages2.length < 1,
          onClick: () => {
            deleteAll();
          },
          variant: "ghost",
          className: "font-bold",
          children: useTrans("Supprimer Tous")
        }
      )
    ] }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs(ResizablePanelGroup, { direction: "horizontal", children: [
      /* @__PURE__ */ jsxs(ResizablePanel, { className: "w-1/2", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => {
              getAll();
            },
            variant: "ghost",
            className: cn(
              "font-bold mx-2",
              filter != "unread" && "bg-accent text-accent-foreground"
            ),
            children: useTrans("Tous")
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => {
              getUnRead();
            },
            variant: "ghost",
            className: cn(
              "font-bold",
              filter == "unread" && "bg-accent text-accent-foreground"
            ),
            children: useTrans("Non lu")
          }
        ),
        messages2.length > 0 ? /* @__PURE__ */ jsx(ScrollArea, { className: "h-96 mt-2", children: /* @__PURE__ */ jsx("div", { children: messages2.map((message, idx) => /* @__PURE__ */ jsxs(Card, { className: "mb-2", children: [
          /* @__PURE__ */ jsxs("div", { className: " hover:cursor-pointer hover:bg-accent", children: [
            /* @__PURE__ */ jsxs(
              CardHeader,
              {
                className: "p-3 flex justify-between itmes-center flex-row ",
                onClick: () => {
                  if (message.read_at == null) {
                    readMessage(
                      message.message_id
                    );
                  }
                  setSelectedMessage(idx);
                },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
                    message.subject,
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: message.user ? message.user.first_name : "Utilisateur" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground opacity-60", children: timeSince(
                      message.created_at
                    ) }),
                    message.read_at == null && /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary rounded-full" }),
                    " "
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              CardContent,
              {
                className: "p-3",
                onClick: () => {
                  readMessage(
                    message.message_id
                  );
                  setSelectedMessage(idx);
                },
                children: /* @__PURE__ */ jsxs(CardDescription, { children: [
                  message.message,
                  " "
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(CardFooter, { className: "p-3 flex justify-end gap-3", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "link",
                size: "sm",
                className: "text-secondary",
                children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "mailto:" + message.client_email,
                    children: useTrans(
                      "Reprendre avec votre adresse mail"
                    )
                  }
                )
              }
            ),
            permission.delete && /* @__PURE__ */ jsx(
              Button,
              {
                variant: "destructive",
                size: "sm",
                onClick: () => deleteMessage(
                  message.message_id
                ),
                children: useTrans("Supprimer")
              }
            )
          ] })
        ] }, idx)) }) }) : /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center flex-col h-96 mt-2 ", children: [
          /* @__PURE__ */ jsx(MessageSquareX, { size: 70 }),
          /* @__PURE__ */ jsxs("div", { children: [
            " ",
            useTrans("Aucun message a afficher"),
            " "
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(ResizableHandle, { withHandle: true, className: "mx-4" }),
      /* @__PURE__ */ jsxs(ResizablePanel, { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "my-2 flex justify-between itmes-center flex-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
            ((_b = messages2[selectedMessage]) == null ? void 0 : _b.user) ? messages2[selectedMessage].user.first_name : "Utilisateur",
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: ((_c = messages2[selectedMessage]) == null ? void 0 : _c.subject) ? messages2[selectedMessage].subject : "Sujet" }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
              useTrans("Repondre à :"),
              " ",
              ((_d = messages2[selectedMessage]) == null ? void 0 : _d.client_email) ? (_e = messages2[selectedMessage]) == null ? void 0 : _e.client_email : "client@gmail.com"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: ((_f = messages2[selectedMessage]) == null ? void 0 : _f.created_at) ? formatDate(
            messages2[selectedMessage].created_at
          ) : "00-00-0000, 00:00:00 " })
        ] }),
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsx(ScrollArea, { className: "h-1/2", children: /* @__PURE__ */ jsx("div", { className: "py-2", children: ((_g = messages2[selectedMessage]) == null ? void 0 : _g.message) ? messages2[selectedMessage].message : "Message" }) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 w-full", children: [
          /* @__PURE__ */ jsx(Separator, { className: "my-2 " }),
          /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
            /* @__PURE__ */ jsx(
              Textarea,
              {
                placeholder: "Répendre à CLIENT",
                value: data.message,
                onChange: (e) => setData2("message", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.message,
                className: "mt-2"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex justify-end  my-3", children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "secondary",
                size: "sm",
                disabled: messages2.length < 1,
                children: useTrans("Envoyé")
              }
            ) })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: messages
}, Symbol.toStringTag, { value: "Module" }));
function Notifications({ notifications }) {
  function timeSince(date) {
    const now = /* @__PURE__ */ new Date();
    const past = new Date(date);
    const secondsAgo = Math.floor((now - past) / 1e3);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo > 0) {
      return `${daysAgo} jrs`;
    } else if (hoursAgo > 0) {
      return `${hoursAgo} h`;
    } else if (minutesAgo > 0) {
      return `${minutesAgo} min`;
    } else {
      return `${secondsAgo} s`;
    }
  }
  const deleteAll = () => {
    router.get(route("notifications.deleteAll"));
  };
  const readAll = () => {
    router.get(route("notifications.readAll"));
  };
  const ViewNotification = (notif) => {
    router.get(
      route("bookings.show", notif.data.booking_id),
      {},
      {
        onSuccess: () => {
          router.post(route("notifications.read"), {
            id: notif.id
          });
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Notifications" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Notifications") }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end mt-2 -mb-4 gap-4", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => {
            readAll();
          },
          variant: "ghost",
          className: "font-bold",
          children: useTrans("Tout marquer comme lu")
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => {
            deleteAll();
          },
          variant: "ghost",
          className: "font-bold",
          children: useTrans("Supprimer Tous")
        }
      )
    ] }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: notifications.map((notification, index) => /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "ghost",
        className: cn(
          "relative w-full flex justify-between mb-2 items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
          notification.read_at == null ? "border border-input bg-background " : ""
        ),
        onClick: () => ViewNotification(notification),
        children: [
          console.log(notification),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
              notification.data.first_name,
              " ",
              notification.data.last_name
            ] }),
            " ",
            useTrans("a fait une réservation de"),
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: notification.data.check_in }),
            " ",
            useTrans("vers"),
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: notification.data.check_out }),
            " "
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ jsxs("span", { className: " text-xs tracking-widest opacity-60", children: [
              timeSince(notification == null ? void 0 : notification.created_at),
              " "
            ] }),
            notification.read_at == null && /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary rounded-full" })
          ] })
        ]
      },
      index
    )) })
  ] });
}
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Notifications
}, Symbol.toStringTag, { value: "Module" }));
function DangerButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function Modal({ children, show = false, maxWidth = "2xl", closeable = true, onClose = () => {
} }) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  return /* @__PURE__ */ jsx(Transition, { show, as: Fragment$1, leave: "duration-200", children: /* @__PURE__ */ jsxs(
    Dialog$1,
    {
      as: "div",
      id: "modal",
      className: "fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",
      onClose: close,
      children: [
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75" })
          }
        ),
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ jsx(
              Dialog$1.Panel,
              {
                className: `mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`,
                children
              }
            )
          }
        )
      ]
    }
  ) });
}
function SecondaryButton({ type = "button", className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      type,
      className: `inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "border-input dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary dark:focus:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-md shadow-sm " + className,
      ref: input
    }
  );
});
function DeleteUserForm$2({ className = "" }) {
  const [open, setOpen] = useState(false);
  const passwordInput = useRef();
  const { width } = useWindowDimensions();
  const {
    data,
    setData: setData2,
    delete: destroy,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => {
        setOpen(false);
        reset();
      },
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: useTrans("Supprimer le compte") }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: useTrans(
        "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Avant de supprimer votre compte, veuillez télécharger toutes les données ou informations que vous souhaitez conserver."
      ) })
    ] }),
    width >= 767 ? /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxs(
        DialogTrigger,
        {
          className: buttonVariants({ variant: "destructive" }),
          children: [
            /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
            useTrans("Supprimer le compte")
          ]
        }
      ),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsxs(DialogTitle, { children: [
            useTrans(
              "Etes-vous sûr de vouloir supprimer votre compte ?"
            ),
            " "
          ] }),
          /* @__PURE__ */ jsxs(DialogDescription, { children: [
            useTrans(
              "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte."
            ),
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "password",
                value: "Password",
                className: "sr-only"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                ref: passwordInput,
                value: data.password,
                onChange: (e) => setData2("password", e.target.value),
                className: "mt-1 ",
                isFocused: true,
                placeholder: "Password"
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.password,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setOpen(false),
                children: useTrans("Annuler")
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "destructive",
                onClick: () => {
                  deleteUser();
                },
                className: "flex justify-center",
                children: [
                  /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                  useTrans("Supprimer")
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxs(
        DrawerTrigger,
        {
          className: buttonVariants({ variant: "destructive" }),
          children: [
            /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
            useTrans("Supprimer le compte")
          ]
        }
      ),
      /* @__PURE__ */ jsxs(DrawerContent, { children: [
        /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
          /* @__PURE__ */ jsxs(DrawerTitle, { children: [
            useTrans(
              "Etes-vous sûr de vouloir supprimer votre compte ?"
            ),
            " "
          ] }),
          /* @__PURE__ */ jsxs(DrawerDescription, { children: [
            useTrans(
              "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte."
            ),
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6 px-4", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "password",
                value: "Password",
                className: "sr-only"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                ref: passwordInput,
                value: data.password,
                onChange: (e) => setData2("password", e.target.value),
                className: "mt-1",
                isFocused: true,
                placeholder: "Password"
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.password,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "destructive",
                onClick: () => {
                  deleteUser();
                },
                className: "flex justify-center",
                children: [
                  /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                  useTrans("Supprimer")
                ]
              }
            ),
            /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: useTrans("Annuler") }) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm$2
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm$2({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const {
    data,
    setData: setData2,
    errors,
    put,
    reset,
    processing,
    recentlySuccessful
  } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: useTrans("Mettre à jour le mot de passe") }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: useTrans(
        "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester en sécurité"
      ) })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, children: [
      /* @__PURE__ */ jsx("div", { className: "md:flex my-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full  bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "current_password",
            value: useTrans("Mot de passe actuel")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => setData2("current_password", e.target.value),
            type: "password",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.current_password,
            className: "mt-2"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "password",
              value: useTrans("nouveau mot de passe")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "password",
              ref: passwordInput,
              value: data.password,
              onChange: (e) => setData2("password", e.target.value),
              type: "password",
              autoComplete: "new-password"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.password,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "md:hidden my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "password_confirmation",
              value: useTrans("Confirmez le mot de passe")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "password_confirmation",
              value: data.password_confirmation,
              onChange: (e) => setData2("password_confirmation", e.target.value),
              type: "password",
              autoComplete: "new-password"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.password_confirmation,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
          Button,
          {
            disabled: processing,
            type: "submit",
            className: "mt-2 w-1/4",
            variant: "secondary",
            children: useTrans("Enregistrer")
          }
        ) }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: useTrans("Enregistrer") })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm$2
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation$2({
  mustVerifyEmail,
  status,
  className = ""
}) {
  const user = usePage().props.auth.user;
  const { data, setData: setData2, patch, errors, processing } = useForm({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("admin.profile.update"));
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium", children: useTrans("Les informations personnelles") }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "first_name",
              value: useTrans("Prénom")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "first_name",
              value: data.first_name,
              onChange: (e) => setData2("first_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.first_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "md:hidden my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "last_name",
              value: useTrans("Nom")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "last_name",
              value: data.last_name,
              onChange: (e) => setData2("last_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.last_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: useTrans("Email") }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "L'email doit être unique pour chaque utilisateur"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: useTrans("Email") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "email",
              value: data.email,
              onChange: (e) => setData2("email", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "phone",
              value: useTrans("N° téléphone d'employé")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Le N° téléphone doit être unique pour chaque utilisateur"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "phone",
              value: useTrans("N° téléphone d'employé")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "phone",
              value: data.phone,
              onChange: (e) => setData2("phone", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.phone, className: "mt-2" })
        ] })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800 dark:text-gray-200", children: [
          useTrans(
            "Votre adresse email n'est pas vérifiée."
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
              children: [
                useTrans(
                  "Cliquez ici pour renvoyer l'e-mail de vérification."
                ),
                " "
              ]
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600 dark:text-green-400", children: useTrans(
          "Un nouveau lien de vérification a été envoyé à votre adresse e-mail."
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          disabled: processing,
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: useTrans("Enregistrer")
        }
      ) })
    ] })
  ] });
}
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation$2
}, Symbol.toStringTag, { value: "Module" }));
function Edit$2({ mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
        UpdateProfileInformation$2,
        {
          mustVerifyEmail,
          status
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm$2, {}) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm$2, { className: "max-w-xl" }) })
    ] }) })
  ] });
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$2
}, Symbol.toStringTag, { value: "Module" }));
const fileTypes$5 = ["JPG", "PNG", "GIF"];
function CreatePromotion() {
  const [importedFiles, setImportedFiles] = useState([]);
  const { data, setData: setData2, post, errors, clearErrors } = useForm({
    promo_value: "",
    promo_descreption: "",
    promo_start_date: "",
    promo_end_date: "",
    is_active: false,
    assets: []
  });
  const [dateRange, setDateRange] = useState({
    from: "",
    to: ""
  });
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("promotions.store"));
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const handleDateChange = (range) => {
    if (range == null ? void 0 : range.from) {
      const formattedDate = formatDate(range.from);
      setData2("promo_start_date", formattedDate);
    }
    if (range == null ? void 0 : range.to) {
      const formattedDate = formatDate(range.to);
      setData2("promo_end_date", formattedDate);
    }
    setDateRange(range);
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Création de Promotion" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Création de promotion") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "Date de promotion",
              value: useTrans("Date de promotion")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Entrer la date ou le range de date de début et fin de promotion"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "Date de promotion",
              value: useTrans("Date de promotion")
            }
          ),
          /* @__PURE__ */ jsx(
            DatePickerWithRange,
            {
              date: dateRange,
              onDateChange: handleDateChange
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.promo_start_date,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.promo_end_date,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "promo_value",
              value: useTrans("Valeur de promotion")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Entrer la Valeur de promotion en DA"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "promo_value",
              value: useTrans("Valeur de promotion")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "promo_value",
              value: data.promo_value,
              onChange: (e) => setData2("promo_value", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.promo_value,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "promo_descreption",
              value: useTrans("Description")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Vous pouvez ajouter des titre ou bien des style au desciption"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "promo_descreption",
              value: useTrans("Description")
            }
          ),
          /* @__PURE__ */ jsx(
            RichEditor,
            {
              autofocus: false,
              content: data.promo_descreption,
              onContentChange: ({ html }) => {
                setData2("promo_descreption", html);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.promo_descreption,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: useTrans("Photos")
              }
            ),
            /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
              "Ajouter des photos au promotion (ne dépasse pas 10 photos par promotion)"
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: useTrans("Photos")
              }
            ),
            /* @__PURE__ */ jsx(
              FileUploader,
              {
                handleChange: handleFiles,
                name: "file",
                id: "assets",
                types: fileTypes$5,
                multiple: true,
                children: /* @__PURE__ */ jsx(MyFileUploader, {})
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.assets,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          ImagesViewer,
          {
            images: importedFiles,
            errors,
            deleteImage
          }
        ),
        " "
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: useTrans("Créer")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreatePromotion
}, Symbol.toStringTag, { value: "Module" }));
const fileTypes$4 = ["JPG", "PNG", "GIF"];
function EditPromotion({ promotion }) {
  const [importedFiles, setImportedFiles] = useState([]);
  const [dateRange, setDateRange] = useState({
    from: new Date(promotion.promo_start_date),
    to: new Date(promotion.promo_end_date)
  });
  const { data, setData: setData2, post, errors, clearErrors } = useForm({
    promo_value: promotion.promo_value,
    promo_descreption: promotion.promo_descreption,
    promo_start_date: promotion.promo_start_date,
    promo_end_date: promotion.promo_end_date,
    assets: []
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("promotions.update", promotion.promotion_id));
  };
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const handleDateChange = (range) => {
    if (range == null ? void 0 : range.from) {
      const formattedDate = formatDate(range.from);
      setData2("promo_start_date", formattedDate);
    }
    if (range == null ? void 0 : range.to) {
      const formattedDate = formatDate(range.to);
      setData2("promo_end_date", formattedDate);
    }
    setDateRange(range);
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Service" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Modification de promotion") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "Date de promotion",
              value: useTrans("Date de promotion")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Entrer la date ou le range de date de début et fin de promotion"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "Date de promotion",
              value: useTrans("Date de promotion")
            }
          ),
          /* @__PURE__ */ jsx(
            DatePickerWithRange,
            {
              date: dateRange,
              onDateChange: handleDateChange
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.promo_start_date,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.promo_end_date,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "promo_value",
              value: useTrans("Valeur de promotion")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Entrer la Valeur de promotion en DA"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "promo_value",
              value: useTrans("Valeur de promotion")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "promo_value",
              value: data.promo_value,
              onChange: (e) => setData2("promo_value", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.promo_value,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "promo_descreption",
              value: useTrans("Description")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Vous pouvez ajouter des titre ou bien des style au desciption"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "promo_descreption",
              value: useTrans("Description")
            }
          ),
          /* @__PURE__ */ jsx(
            RichEditor,
            {
              autofocus: false,
              content: data.promo_descreption,
              onContentChange: ({ html }) => {
                setData2("promo_descreption", html);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.promo_descreption,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: useTrans("Photos")
              }
            ),
            /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
              "Ajouter des photos au promotion (ne dépasse pas 10 photos par promotion)"
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: useTrans("Photos")
              }
            ),
            /* @__PURE__ */ jsx(
              FileUploader,
              {
                handleChange: handleFiles,
                name: "file",
                id: "assets",
                types: fileTypes$4,
                multiple: true,
                children: /* @__PURE__ */ jsx(MyFileUploader, {})
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.assets,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          ImagesViewer,
          {
            images: importedFiles,
            errors,
            deleteImage
          }
        ),
        " ",
        /* @__PURE__ */ jsx(
          DbImageViewer,
          {
            assets: promotion.assets,
            importedFiles: importedFiles.length
          }
        ),
        " "
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: useTrans("Enregistrer")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EditPromotion
}, Symbol.toStringTag, { value: "Module" }));
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-secondary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
function EventCardFooter({ promotion }) {
  const promotion_permission = usePage().props.promotion_permission;
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 w-full", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      useTrans("Créé par"),
      " :",
      " ",
      /* @__PURE__ */ jsxs("span", { children: [
        promotion.user.first_name,
        " ",
        promotion.user.last_name
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      promotion_permission.update && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          Switch,
          {
            checked: promotion.is_active,
            onCheckedChange: () => {
              router.post(
                route("promotions.toggle.activity"),
                {
                  promotion_id: promotion.promotion_id
                },
                {
                  preserveState: true,
                  preserveScroll: true
                }
              );
            }
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-2 ", children: promotion.is_active ? useTrans("Désactivé la promotin") : useTrans("Activé la promotion") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        promotion_permission.update && /* @__PURE__ */ jsx(Button, { variant: "secondary", children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route(
              "promotions.edit",
              promotion.promotion_id
            ),
            as: "button",
            children: useTrans("Modifier")
          }
        ) }),
        promotion_permission.delete && /* @__PURE__ */ jsx(
          DeleteeDialog,
          {
            id: promotion.promotion_id,
            url: "promotions.destroy",
            message: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette promotion"
          }
        )
      ] })
    ] })
  ] });
}
function PromotionCard({ promotion }) {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Card, { className: "transition-transform ease-in-out duration-700 relative my-6 ", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(Carousel, { children: [
      /* @__PURE__ */ jsx(CarouselContent, { className: "h-full ", children: promotion.assets.map((asset, index) => /* @__PURE__ */ jsx(
        CarouselItem,
        {
          className: "md:basis-1/2 lg:basis-1/3",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: asset.url,
              alt: `Selected ${index}`,
              className: "rounded-md object-cover aspect-video w-full"
            }
          )
        },
        index
      )) }),
      /* @__PURE__ */ jsx(CarouselPrevious, { className: "bg-secondary left-0 text-secondary-foreground" }),
      /* @__PURE__ */ jsx(CarouselNext, { className: "bg-secondary right-0 text-secondary-foreground" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between w-full", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "text-lg font-bold text-xl flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-destructive text-2xl font-bold", children: [
          "- ",
          promotion.promo_value,
          " ",
          useTrans("DA"),
          " "
        ] }),
        /* @__PURE__ */ jsx("div", { children: promotion.is_active ? /* @__PURE__ */ jsx(Badge, { variant: "success", children: useTrans("Active") }) : /* @__PURE__ */ jsx(Badge, { variant: "danger", children: useTrans("Désactivé") }) })
      ] }),
      isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(CardContent, { children: [
          promotion.promo_start_date == promotion.promo_end_date ? /* @__PURE__ */ jsxs("div", { children: [
            useTrans("Date de promotion"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: promotion.promo_start_date })
          ] }) : /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              useTrans("Date début de promotion"),
              " :",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: promotion.promo_start_date })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              useTrans("Date fin de promotion"),
              " :",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: promotion.promo_end_date })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "font-bold text-lg my-4", children: [
              useTrans("Description"),
              " :",
              " "
            ] }),
            /* @__PURE__ */ jsx(
              RichEditor,
              {
                autofocus: false,
                editable: false,
                content: promotion.promo_descreption
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(EventCardFooter, { promotion }) })
      ] })
    ] }),
    width >= 767 && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 right-1/2 translate-x-1/2 z-20", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: buttonVariants({
          variant: "outline",
          size: "icon"
        }),
        onClick: () => setIsOpen(!isOpen),
        children: /* @__PURE__ */ jsx(
          ChevronUp,
          {
            className: cn(
              "h-4 w-4 transition-transform ease-in-out duration-700 ",
              isOpen === false ? "rotate-180" : "rotate-0"
            )
          }
        )
      }
    ) })
  ] });
}
function Promotions({ promotions, promotion_permission }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Promotions" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Promotions") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: promotion_permission.create && /* @__PURE__ */ jsx(Button, { variant: "secondary", children: /* @__PURE__ */ jsx(Link, { href: route("promotions.create"), children: useTrans("Créer un promotion") }) }) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: promotions.lenght ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "font-bold p-4", children: [
        useTrans("List des promotions"),
        " :"
      ] }),
      promotions.map((promo) => /* @__PURE__ */ jsx(
        PromotionCard,
        {
          promotion: promo
        },
        promo.promotion_id
      ))
    ] }) : /* @__PURE__ */ jsx(
      EmptyPage,
      {
        text: "Aucun promotion pour l'instant, essayez de créer une nouvelle",
        icon: TicketMinus
      }
    ) })
  ] });
}
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Promotions
}, Symbol.toStringTag, { value: "Module" }));
function CreateRole({ permissions, permissions_actions }) {
  const { data, setData: setData2, post, errors } = useForm({
    role_name: "",
    permissions: []
  });
  const handleCheckboxChange = (id) => {
    if (data.permissions.includes(id)) {
      setData2(
        "permissions",
        data.permissions.filter((permissionId) => permissionId !== id)
      );
    } else {
      setData2("permissions", [...data.permissions, id]);
    }
  };
  const handleAllPermissionsCheck = (entity, e) => {
    if (e) {
      permissions.map(
        (permission) => permission.permission_name.split("-")[0] == entity && data.permissions.find((p) => p == permission.permission_id) ? setData2((data2) => {
          data2.permissions.splice(
            data2.permissions.findIndex(
              (p) => p == permission.permission_id
            ),
            1
          );
          return { ...data2 };
        }) : null
      );
      permissions.map(
        (permission) => permission.permission_name.split("-")[0] == entity ? setData2((data2) => {
          data2.permissions.push(permission.permission_id);
          return { ...data2 };
        }) : null
      );
    } else {
      permissions.forEach(
        (permission) => permission.permission_name.split("-")[0] == entity && setData2((data2) => {
          data2.permissions.splice(
            data2.permissions.indexOf(
              data2.permissions.find(
                (p) => p == permission.permission_id
              )
            ),
            1
          );
          return { ...data2 };
        })
      );
    }
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("roles.store"));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Rools" }),
    /* @__PURE__ */ jsx(PageHeading, { title: "Roles" }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "role_name",
              value: useTrans("Nom de rôle")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans("Le nom de rôle doit être unique") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "role_name",
              value: useTrans("Nom de rôle")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "role_name",
              value: data.role_name,
              onChange: (e) => setData2("role_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.role_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              value: useTrans("List des permissions")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans("Assigner des permissions a ce rôle") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex bg-card p-2 rounded", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "permissions",
                className: "w-1/4 ",
                value: useTrans("List des permissions")
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex justify-between w-3/4", children: permissions_actions.map((action) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex items-center mb-2",
                children: /* @__PURE__ */ jsx(InputLabel, { htmlFor: action, children: action })
              },
              action
            )) })
          ] }),
          permissions.map((permission, idx) => {
            var _a;
            return /* @__PURE__ */ jsx("div", { children: permissions[idx] != 0 && ((_a = permissions[idx - 1]) == null ? void 0 : _a.permission_name.split("-")[0]) != permission.permission_name.split(
              "-"
            )[0] && /* @__PURE__ */ jsxs("div", { className: "mb-4 flex bg-card p-2 rounded", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-1/4", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    id: permission.permission_name,
                    checked: permissions.filter(
                      (per) => per.permission_name.split(
                        "-"
                      )[0] == permission.permission_name.split(
                        "-"
                      )[0]
                    ).every(
                      (element) => data.permissions.includes(
                        element.permission_id
                      )
                    ),
                    onCheckedChange: (e) => handleAllPermissionsCheck(
                      permission.permission_name.split(
                        "-"
                      )[0],
                      e
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: permission.permission_name.split(
                      "-"
                    )[0],
                    children: permission.permission_name.split(
                      "-"
                    )[0]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex justify-between w-3/4", children: permissions.map(
                (perm) => perm.permission_name.split(
                  "-"
                )[0] == permission.permission_name.split(
                  "-"
                )[0] && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    id: perm.permission_id,
                    checked: data.permissions.includes(
                      perm.permission_id
                    ),
                    onCheckedChange: () => handleCheckboxChange(
                      perm.permission_id
                    )
                  }
                ) })
              ) })
            ] }) }, idx);
          })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: useTrans("Créer")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateRole
}, Symbol.toStringTag, { value: "Module" }));
function EditRole({ role, permissions, permissions_actions }) {
  const { data, setData: setData2, put, errors } = useForm({
    role_name: role.role_name,
    prevName: role.role_name,
    permissions: role.permissions.map(
      (permission) => permission.permission_id
    )
  });
  const handleCheckboxChange = (id) => {
    if (data.permissions.includes(id)) {
      setData2(
        "permissions",
        data.permissions.filter((permissionId) => permissionId !== id)
      );
    } else {
      setData2("permissions", [...data.permissions, id]);
    }
  };
  const handleAllPermissionsCheck = (entity, e) => {
    if (e) {
      permissions.map(
        (permission) => permission.permission_name.split("-")[0] == entity && data.permissions.find((p) => p == permission.permission_id) ? setData2((data2) => {
          data2.permissions.splice(
            data2.permissions.findIndex(
              (p) => p == permission.permission_id
            ),
            1
          );
          return { ...data2 };
        }) : null
      );
      permissions.map(
        (permission) => permission.permission_name.split("-")[0] == entity ? setData2((data2) => {
          data2.permissions.push(permission.permission_id);
          return { ...data2 };
        }) : null
      );
    } else {
      permissions.forEach(
        (permission) => permission.permission_name.split("-")[0] == entity && setData2((data2) => {
          data2.permissions.splice(
            data2.permissions.indexOf(
              data2.permissions.find(
                (p) => p == permission.permission_id
              )
            ),
            1
          );
          return { ...data2 };
        })
      );
    }
  };
  const submit = (e) => {
    e.preventDefault();
    put(route("roles.update", role.role_id));
  };
  console.log(errors);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Rools" }),
    /* @__PURE__ */ jsx(PageHeading, { title: "Roles" }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "role_name",
              value: useTrans("Nom de rôle")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans("Le nom de rôle doit être unique") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "role_name",
              value: useTrans("Nom de rôle")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "role_name",
              value: data.role_name,
              onChange: (e) => setData2("role_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.role_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              value: useTrans("List des permissions")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans("Assigner des permissions a ce rôle") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex bg-card p-2 rounded", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "permissions",
                className: "w-1/4 ",
                value: useTrans("List des permissions")
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex justify-between w-3/4", children: permissions_actions.map((action) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex items-center mb-2",
                children: /* @__PURE__ */ jsx(InputLabel, { htmlFor: action, children: action })
              },
              action
            )) })
          ] }),
          permissions.map((permission, idx) => {
            var _a;
            return /* @__PURE__ */ jsx("div", { children: permissions[idx] != 0 && ((_a = permissions[idx - 1]) == null ? void 0 : _a.permission_name.split("-")[0]) != permission.permission_name.split(
              "-"
            )[0] && /* @__PURE__ */ jsxs("div", { className: "mb-4 flex bg-card p-2 rounded", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-1/4", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    id: permission.permission_name,
                    checked: permissions.filter(
                      (per) => per.permission_name.split(
                        "-"
                      )[0] == permission.permission_name.split(
                        "-"
                      )[0]
                    ).every(
                      (element) => data.permissions.includes(
                        element.permission_id
                      )
                    ),
                    onCheckedChange: (e) => handleAllPermissionsCheck(
                      permission.permission_name.split(
                        "-"
                      )[0],
                      e
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: permission.permission_name.split(
                      "-"
                    )[0],
                    children: permission.permission_name.split(
                      "-"
                    )[0]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex justify-between w-3/4", children: permissions.map(
                (perm) => perm.permission_name.split(
                  "-"
                )[0] == permission.permission_name.split(
                  "-"
                )[0] && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    id: perm.permission_id,
                    checked: data.permissions.includes(
                      perm.permission_id
                    ),
                    onCheckedChange: () => handleCheckboxChange(
                      perm.permission_id
                    )
                  }
                ) })
              ) })
            ] }) }, idx);
          })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: useTrans("Modifier")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EditRole
}, Symbol.toStringTag, { value: "Module" }));
const roleColumns = [
  {
    accessorKey: "Rôle",
    cell: ({ row }) => {
      const role = row.original;
      return /* @__PURE__ */ jsx("div", { children: role.role_name });
    },
    header: ({ column }) => (
      // <DataTableColumnHeader column={column} title={useTrans("Rôle")} />
      /* @__PURE__ */ jsx(ColumnHeader, { title: "Rôle" })
    )
  },
  {
    accessorKey: "Permissions",
    cell: ({ row }) => {
      const role = row.original;
      const { width } = useWindowDimensions();
      const [isopen, setIsOpen] = React__default.useState(false);
      return width >= 767 ? /* @__PURE__ */ jsxs(Dialog, { open: isopen, onOpenChange: setIsOpen, children: [
        /* @__PURE__ */ jsx(DialogTrigger, { children: useTrans("Permissions") }),
        /* @__PURE__ */ jsxs(DialogContent, { children: [
          /* @__PURE__ */ jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxs(DialogTitle, { className: "text-left rtl:text-right rtl:pr-4", children: [
              useTrans("List des permissions pour le rôle"),
              " ",
              role.role_name
            ] }),
            /* @__PURE__ */ jsx(DialogDescription, { className: "flex flex-wrap", children: role.permissions.map((permission) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-2 py-1",
                children: permission.permission_name
              },
              permission.permission_id
            )) })
          ] }),
          /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              onClick: () => setIsOpen(false),
              children: useTrans("Annuler")
            }
          ) })
        ] })
      ] }) : /* @__PURE__ */ jsxs(Drawer, { open: isopen, onOpenChange: setIsOpen, children: [
        /* @__PURE__ */ jsxs(DrawerTrigger, { children: [
          useTrans("Permissions"),
          " "
        ] }),
        /* @__PURE__ */ jsxs(DrawerContent, { children: [
          /* @__PURE__ */ jsxs(DrawerHeader, { children: [
            /* @__PURE__ */ jsxs(DrawerTitle, { className: "text-left rtl:text-right", children: [
              useTrans("List des permissions pour le rôle"),
              " ",
              role.role_name,
              " "
            ] }),
            /* @__PURE__ */ jsx(DrawerDescription, { className: "flex flex-wrap", children: role.permissions.map((permission) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-2 py-1",
                children: permission.permission_name
              },
              permission.permission_id
            )) })
          ] }),
          /* @__PURE__ */ jsx(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: useTrans("Annuler") }) }) })
        ] })
      ] });
    },
    header: ({ column }) => (
      // <DataTableColumnHeader
      //     column={column}
      //     title={useTrans("Permissions")}
      // />
      /* @__PURE__ */ jsx(ColumnHeader, { title: "Permissions" })
    )
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const role = row.original;
      const { width } = useWindowDimensions();
      const [open, setopen] = React__default.useState(false);
      const [isopen, setIsOpen] = React__default.useState(false);
      const role_permission = usePage().props.role_permission;
      const handleDelete = () => {
        router.delete(route("roles.destroy", role.role_id), {
          preserveScroll: true,
          preserveState: true,
          onSuccess: () => {
            setopen(false);
            setIsOpen(false);
          }
        });
      };
      return /* @__PURE__ */ jsxs(
        DropdownMenu,
        {
          open: isopen ? true : open,
          onOpenChange: () => setopen(!open),
          children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "h-8 w-8 p-0", children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
              /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
              role_permission.update && /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("roles.edit", role.role_id),
                  className: "flex",
                  children: [
                    /* @__PURE__ */ jsx(Pencil, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    /* @__PURE__ */ jsx("span", { children: useTrans("Modifier") })
                  ]
                }
              ) }),
              role_permission.delete && /* @__PURE__ */ jsx(DropdownMenuItem, { children: width >= 767 ? /* @__PURE__ */ jsxs(
                Dialog,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsxs(
                      DialogTrigger,
                      {
                        className: buttonVariants({
                          variant: "destructive"
                        }),
                        children: [
                          /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
                          useTrans("Supprimer")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(DialogContent, { children: [
                      /* @__PURE__ */ jsxs(DialogHeader, { children: [
                        /* @__PURE__ */ jsxs(DialogTitle, { children: [
                          useTrans(
                            "Vous êtes sure?"
                          ),
                          " "
                        ] }),
                        /* @__PURE__ */ jsx(DialogDescription, { children: useTrans(
                          "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce rôle, les utilisateur avec ce rôle sera prendre le rôle de simple admin et perdre tous leur permissions"
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => setIsOpen(false),
                            children: useTrans("Annuler")
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "destructive",
                            onClick: () => handleDelete(),
                            className: "flex justify-center",
                            children: [
                              /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                              useTrans("Supprimer")
                            ]
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) : /* @__PURE__ */ jsxs(
                Drawer,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsxs(
                      DrawerTrigger,
                      {
                        className: buttonVariants({
                          variant: "destructive"
                        }),
                        children: [
                          /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
                          useTrans("Supprimer")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(DrawerContent, { children: [
                      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
                        /* @__PURE__ */ jsxs(DrawerTitle, { children: [
                          useTrans(
                            "Vous êtes sure?"
                          ),
                          " "
                        ] }),
                        /* @__PURE__ */ jsxs(DrawerDescription, { children: [
                          useTrans(
                            "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce rôle, les utilisateur avec ce rôle sera prendre le rôle de simple admin et perdre tous leur permissions"
                          ),
                          " "
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "destructive",
                            onClick: () => handleDelete(),
                            className: "flex justify-center",
                            children: [
                              /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                              useTrans("Supprimer")
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: useTrans("Annuler") }) })
                      ] })
                    ] })
                  ]
                }
              ) })
            ] })
          ]
        }
      );
    }
  }
];
function Roles({ roles: roles2, role_permission }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Rools" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Rôles") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: role_permission.create && /* @__PURE__ */ jsx(Button, { variant: "secondary", children: /* @__PURE__ */ jsx(Link, { href: route("roles.create"), children: useTrans("Ajouter un rôle") }) }) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: roleColumns,
        data: roles2.data,
        paginate: roles2,
        selection: false
      }
    ) })
  ] });
}
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Roles
}, Symbol.toStringTag, { value: "Module" }));
const featuresColumns = [
  {
    accessorKey: "Nom",
    cell: ({ row }) => {
      const features = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        " ",
        features.features_name
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "Nom de caractéristique" })
  },
  {
    accessorKey: "Valeur",
    cell: ({ row }) => {
      const feature = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        " ",
        feature.need_value ? /* @__PURE__ */ jsx(Badge, { variant: "success", children: /* @__PURE__ */ jsx(Check, { size: 18 }) }) : /* @__PURE__ */ jsx(Badge, { variant: "danger", children: /* @__PURE__ */ jsx(X, { size: 18 }) }),
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "Besoin de valeur" })
  },
  {
    accessorKey: "Categorie",
    cell: ({ row }) => {
      const feature = row.original;
      return /* @__PURE__ */ jsx("span", { children: feature.category.categorie_name });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "Catégorie" })
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const feature = row.original;
      const [isopen, setIsOpen] = React__default.useState(false);
      const [Editopen, setEditOpen] = React__default.useState(false);
      const [open, setopen] = React__default.useState(false);
      const { width } = useWindowDimensions();
      const { data, setData: setData2, put, errors } = useForm({
        features_name: feature.features_name,
        categorie_id: feature.category.categorie_id,
        need_value: feature.need_value
      });
      const submit = (e) => {
        e.preventDefault();
        put(route("features.update", feature.feature_id), {
          onSuccess: () => {
            setopen(false);
            setEditOpen(false);
          }
        });
      };
      const handleDelete = () => {
        router.delete(route("features.destroy", feature.feature_id), {
          preserveScroll: true,
          preserveState: true,
          onSuccess: () => {
            setIsOpen(false);
            setopen(false);
          }
        });
      };
      return /* @__PURE__ */ jsxs(
        DropdownMenu,
        {
          open: isopen || Editopen ? true : open,
          onOpenChange: () => setopen(!open),
          children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "h-8 ", children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
              /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
              /* @__PURE__ */ jsx(DropdownMenuItem, { children: width >= 767 ? /* @__PURE__ */ jsxs(
                Dialog,
                {
                  open: Editopen,
                  onOpenChange: setEditOpen,
                  children: [
                    /* @__PURE__ */ jsxs(DialogTrigger, { className: "flex justify-center", children: [
                      /* @__PURE__ */ jsx(Pencil, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                      /* @__PURE__ */ jsx("span", { children: useTrans("Modifier") })
                    ] }),
                    /* @__PURE__ */ jsxs(DialogContent, { children: [
                      /* @__PURE__ */ jsxs(DialogHeader, { children: [
                        /* @__PURE__ */ jsx(DialogTitle, { children: useTrans(
                          "Modifier cette caractéristique"
                        ) }),
                        /* @__PURE__ */ jsx(DialogDescription, { children: useTrans(
                          "Modifier cette caractéristique"
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(
                        "form",
                        {
                          className: "grid items-start gap-4 px-4",
                          onSubmit: submit,
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                              /* @__PURE__ */ jsx(
                                InputLabel,
                                {
                                  htmlFor: "features_name",
                                  value: useTrans(
                                    "Nom de caractéristique"
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                Input,
                                {
                                  placeholder: useTrans(
                                    "Example : wifi, dimension"
                                  ),
                                  id: "features_name",
                                  value: data.features_name,
                                  onChange: (e) => setData2(
                                    "features_name",
                                    e.target.value
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                InputError,
                                {
                                  message: errors.features_name,
                                  className: "mt-2"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                              /* @__PURE__ */ jsx(
                                InputLabel,
                                {
                                  htmlFor: "categorie_id",
                                  value: useTrans(
                                    "Catégorie"
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                Input,
                                {
                                  id: "categorie_id",
                                  disabled: true,
                                  value: feature.category.categorie_name
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                InputError,
                                {
                                  message: errors.categorie_id,
                                  className: "mt-2"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                              /* @__PURE__ */ jsx(
                                Checkbox,
                                {
                                  id: "need_value",
                                  checked: data.need_value,
                                  onCheckedChange: () => setData2(
                                    "need_value",
                                    !data.need_value
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                InputLabel,
                                {
                                  htmlFor: "need_value",
                                  value: useTrans(
                                    "Besoin de valeur"
                                  )
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsx(
                              Button,
                              {
                                variant: "secondary",
                                type: "submit",
                                children: useTrans("Enregistrer")
                              }
                            )
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ) : /* @__PURE__ */ jsxs(
                Drawer,
                {
                  open: Editopen,
                  onOpenChange: setEditOpen,
                  children: [
                    /* @__PURE__ */ jsxs(DrawerTrigger, { className: "flex justify-center", children: [
                      /* @__PURE__ */ jsx(Pencil, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                      /* @__PURE__ */ jsx("span", { children: useTrans("Modifier") })
                    ] }),
                    /* @__PURE__ */ jsxs(DrawerContent, { children: [
                      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
                        /* @__PURE__ */ jsx(DrawerTitle, { children: useTrans(
                          "Modifier cette caractéristique"
                        ) }),
                        /* @__PURE__ */ jsx(DrawerDescription, { children: useTrans(
                          "Modifier cette caractéristique"
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(
                        "form",
                        {
                          className: "grid items-start gap-4 px-4",
                          onSubmit: submit,
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                              /* @__PURE__ */ jsx(
                                InputLabel,
                                {
                                  htmlFor: "features_name",
                                  value: useTrans(
                                    "Nom de caractéristique"
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                Input,
                                {
                                  placeholder: useTrans(
                                    "Example : wifi, dimension"
                                  ),
                                  id: "features_name",
                                  value: data.features_name,
                                  onChange: (e) => setData2(
                                    "features_name",
                                    e.target.value
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                InputError,
                                {
                                  message: errors.features_name,
                                  className: "mt-2"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                              /* @__PURE__ */ jsx(
                                InputLabel,
                                {
                                  htmlFor: "categorie_id",
                                  value: useTrans(
                                    "Catégorie"
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                Input,
                                {
                                  id: "categorie_id",
                                  disabled: true,
                                  value: feature.category.categorie_name
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                InputError,
                                {
                                  message: errors.categorie_id,
                                  className: "mt-2"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                              /* @__PURE__ */ jsx(
                                Checkbox,
                                {
                                  id: "need_value",
                                  checked: data.need_value,
                                  onCheckedChange: () => setData2(
                                    "need_value",
                                    !data.need_value
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                InputLabel,
                                {
                                  htmlFor: "need_value",
                                  value: useTrans(
                                    "Besoin de valeur"
                                  )
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsx(
                              Button,
                              {
                                variant: "secondary",
                                type: "submit",
                                children: useTrans("Enregistrer")
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: useTrans("Annuler") }) }) })
                    ] })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(DropdownMenuItem, { children: width >= 767 ? /* @__PURE__ */ jsxs(Dialog, { open: isopen, onOpenChange: setIsOpen, children: [
                /* @__PURE__ */ jsxs(
                  DialogTrigger,
                  {
                    className: buttonVariants({
                      variant: "destructive"
                    }),
                    children: [
                      /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
                      useTrans("Supprimer")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(DialogContent, { children: [
                  /* @__PURE__ */ jsxs(DialogHeader, { children: [
                    /* @__PURE__ */ jsxs(DialogTitle, { children: [
                      useTrans("Vous êtes sure?"),
                      " "
                    ] }),
                    /* @__PURE__ */ jsx(DialogDescription, { children: useTrans(
                      "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette caractéristique et chaque chambre avoir cette caractéristique va le perdre"
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "secondary",
                        onClick: () => setIsOpen(false),
                        children: useTrans("Annuler")
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "destructive",
                        onClick: () => handleDelete(),
                        className: "flex justify-center",
                        children: [
                          /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                          useTrans("Supprimer")
                        ]
                      }
                    )
                  ] })
                ] })
              ] }) : /* @__PURE__ */ jsxs(Drawer, { open: isopen, onOpenChange: setIsOpen, children: [
                /* @__PURE__ */ jsxs(
                  DrawerTrigger,
                  {
                    className: buttonVariants({
                      variant: "destructive"
                    }),
                    children: [
                      /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
                      useTrans("Supprimer")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(DrawerContent, { children: [
                  /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
                    /* @__PURE__ */ jsxs(DrawerTitle, { children: [
                      useTrans("Vous êtes sure?"),
                      " "
                    ] }),
                    /* @__PURE__ */ jsxs(DrawerDescription, { children: [
                      useTrans(
                        "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette caractéristique et chaque chambre avoir cette caractéristique va le perdre"
                      ),
                      " "
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "destructive",
                        onClick: () => handleDelete(),
                        className: "flex justify-center",
                        children: [
                          /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                          useTrans("Supprimer")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: useTrans("Annuler") }) })
                  ] })
                ] })
              ] }) })
            ] })
          ]
        }
      );
    }
  }
];
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
function FeatureCreateDialog({ categorys }) {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const { width } = useWindowDimensions();
  const { data, setData: setData2, post, errors } = useForm({
    features_name: "",
    categorie_id: "",
    need_value: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("features.store"), {
      onSuccess: () => {
        setOpen(false);
      }
    });
  };
  const addToCategorys = (value) => {
    router.post(
      route("categorys.store"),
      { categorie_name: value },
      {
        onSuccess: () => {
          setSearchValue("");
          setIsOpen(false);
        }
      }
    );
  };
  if (width >= 767) {
    return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          onClick: () => !categorys && router.reload({ only: ["categorys"] }),
          children: useTrans("Créer un Caractéristique")
        }
      ) }),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsx(DialogTitle, { children: useTrans("Ajouter un nouveau Caractéristique") }),
          /* @__PURE__ */ jsx(DialogDescription, { children: useTrans("Ajouter un nouveau Caractéristique") })
        ] }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            className: "grid items-start gap-4 px-4",
            onSubmit: submit,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "features_name",
                    value: useTrans("Nom de caractéristique")
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: useTrans(
                      "Example : wifi, dimension"
                    ),
                    id: "features_name",
                    value: data.features_name,
                    onChange: (e) => setData2("features_name", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.features_name,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "categorie_id",
                    value: useTrans("Catégorie"),
                    className: "w-fit"
                  }
                ),
                /* @__PURE__ */ jsxs(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [
                  /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": open,
                      className: "w-full justify-between",
                      children: [
                        selectedCategory ? selectedCategory : useTrans(
                          "Selectioner un categorie..."
                        ),
                        /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(PopoverContent, { children: /* @__PURE__ */ jsxs(Command, { children: [
                    /* @__PURE__ */ jsx(
                      CommandInput,
                      {
                        placeholder: useTrans(
                          "Chercher un categorie..."
                        ),
                        value: searchValue,
                        onValueChange: (newValue) => setSearchValue(newValue)
                      }
                    ),
                    /* @__PURE__ */ jsxs(CommandList, { children: [
                      /* @__PURE__ */ jsx(CommandEmpty, { children: searchValue ? /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "outline",
                          onClick: () => addToCategorys(
                            searchValue
                          ),
                          children: /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("div", { children: "Ajouter" }),
                            /* @__PURE__ */ jsx("div", { className: "font-bold", children: searchValue }),
                            /* @__PURE__ */ jsx("div", { children: "au categorie" })
                          ] })
                        }
                      ) : /* @__PURE__ */ jsx("span", { children: useTrans(
                        "Chercher un categorie..."
                      ) }) }),
                      /* @__PURE__ */ jsx(CommandGroup, { children: categorys && categorys.map(
                        (category) => /* @__PURE__ */ jsxs(
                          CommandItem,
                          {
                            value: category.categorie_id,
                            onSelect: (currentValue) => {
                              setData2(
                                "categorie_id",
                                category.categorie_id
                              );
                              setSelectedCategory(
                                currentValue === category.categorie_id ? "" : currentValue
                              );
                              setIsOpen(
                                false
                              );
                            },
                            children: [
                              category.categorie_name,
                              /* @__PURE__ */ jsx(
                                CheckIcon,
                                {
                                  className: cn(
                                    "ml-auto h-4 w-4",
                                    selectedCategory === category.categorie_name ? "opacity-100" : "opacity-0"
                                  )
                                }
                              )
                            ]
                          },
                          category.categorie_id
                        )
                      ) })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.categorie_id,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    id: "need_value",
                    checked: data.need_value,
                    onCheckedChange: () => setData2("need_value", !data.need_value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "need_value",
                    value: useTrans("Besoin de valeur")
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(Button, { variant: "secondary", type: "submit", children: useTrans("Créer") })
            ]
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        onClick: () => !categorys && router.reload({ only: ["categorys"] }),
        children: useTrans("Créer un Caractéristique")
      }
    ) }),
    /* @__PURE__ */ jsxs(DrawerContent, { children: [
      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
        /* @__PURE__ */ jsx(DrawerTitle, { children: useTrans("Ajouter un nouveau Caractéristique") }),
        /* @__PURE__ */ jsx(DrawerDescription, { children: useTrans("Ajouter un nouveau Caractéristique") })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "grid items-start gap-4 px-4", onSubmit: submit, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "features_name",
              value: useTrans("Nom de caractéristique")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: useTrans("Example : wifi, dimension"),
              id: "features_name",
              value: data.features_name,
              onChange: (e) => setData2("features_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.features_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "categorie_id",
              value: useTrans("Catégorie"),
              className: "w-fit"
            }
          ),
          /* @__PURE__ */ jsxs(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [
            /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                role: "combobox",
                "aria-expanded": open,
                className: "w-full justify-between",
                children: [
                  selectedCategory ? selectedCategory : useTrans(
                    "Selectioner un categorie..."
                  ),
                  /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(PopoverContent, { children: /* @__PURE__ */ jsxs(Command, { children: [
              /* @__PURE__ */ jsx(
                CommandInput,
                {
                  placeholder: useTrans(
                    "Chercher un categorie..."
                  ),
                  value: searchValue,
                  onValueChange: (newValue) => setSearchValue(newValue)
                }
              ),
              /* @__PURE__ */ jsxs(CommandList, { children: [
                /* @__PURE__ */ jsx(CommandEmpty, { children: searchValue ? /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => addToCategorys(
                      searchValue
                    ),
                    children: /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { children: "Ajouter" }),
                      /* @__PURE__ */ jsx("div", { className: "font-bold", children: searchValue }),
                      /* @__PURE__ */ jsx("div", { children: "au categorie" })
                    ] })
                  }
                ) : /* @__PURE__ */ jsx("span", { children: useTrans(
                  "Chercher un categorie..."
                ) }) }),
                /* @__PURE__ */ jsx(CommandGroup, { children: categorys && categorys.map((category) => /* @__PURE__ */ jsxs(
                  CommandItem,
                  {
                    value: category.categorie_id,
                    onSelect: (currentValue) => {
                      setData2(
                        "categorie_id",
                        category.categorie_id
                      );
                      setSelectedCategory(
                        currentValue === category.categorie_id ? "" : currentValue
                      );
                      setIsOpen(false);
                    },
                    children: [
                      category.categorie_name,
                      /* @__PURE__ */ jsx(
                        CheckIcon,
                        {
                          className: cn(
                            "ml-auto h-4 w-4",
                            selectedCategory === category.categorie_name ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  category.categorie_id
                )) })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.categorie_id,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              id: "need_value",
              checked: data.need_value,
              onCheckedChange: () => setData2("need_value", !data.need_value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "need_value",
              value: useTrans("Besoin de valeur")
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "secondary", type: "submit", children: useTrans("Créer") })
      ] }),
      /* @__PURE__ */ jsx(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: useTrans("Annuler") }) }) })
    ] })
  ] });
}
function CategoryDialog({ category, mode }) {
  const [open, setOpen] = React.useState(false);
  const { width } = useWindowDimensions();
  const { data, setData: setData2, post, put, errors } = useForm({
    categorie_name: category == null ? void 0 : category.categorie_name
  });
  const submit = (e) => {
    e.preventDefault();
    if (mode == "create") {
      post(route("categorys.store"), {
        onSuccess: () => {
          setOpen(false);
        }
      });
    } else {
      put(route("categorys.update", category.categorie_id), {
        onSuccess: () => setOpen(false)
      });
    }
  };
  if (width >= 767) {
    return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: mode == "create" ? useTrans("Ajouter un categorie") : useTrans("Modifier") }) }),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsxs(DialogTitle, { children: [
            mode == "create" ? useTrans("Ajouter un nouveau Catégorie") : useTrans("Modifier cette Catégorie"),
            " "
          ] }),
          /* @__PURE__ */ jsxs(DialogDescription, { children: [
            mode == "create" ? useTrans("Ajouter un nouveau Catégorie") : useTrans("Modifier cette Catégorie"),
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            className: "grid items-start gap-4 px-4",
            onSubmit: submit,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "categorie_name",
                    value: useTrans("Nom de catégorie :")
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: useTrans(
                      "Example : wifi, dimension"
                    ),
                    id: "categorie_name",
                    value: data.categorie_name,
                    onChange: (e) => setData2("categorie_name", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.categorie_name,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "secondary", type: "submit", children: [
                mode == "create" ? useTrans("Créer") : useTrans("Enregistrer"),
                " "
              ] })
            ]
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", children: [
      mode == "create" ? useTrans("Ajouter un categorie") : useTrans("Modifier"),
      " "
    ] }) }),
    /* @__PURE__ */ jsxs(DrawerContent, { children: [
      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
        /* @__PURE__ */ jsxs(DrawerTitle, { children: [
          mode == "create" ? useTrans("Ajouter un nouveau Catégorie") : useTrans("Modifier cette Catégorie"),
          " "
        ] }),
        /* @__PURE__ */ jsxs(DrawerDescription, { children: [
          mode == "create" ? useTrans("Ajouter un nouveau Catégorie") : useTrans("Modifier cette Catégorie"),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "grid items-start gap-4 px-4", onSubmit: submit, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "categorie_name",
              value: useTrans("Nom de catégorie :")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: useTrans("Example : wifi, dimension"),
              id: "categorie_name",
              value: data.categorie_name,
              onChange: (e) => setData2("categorie_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.categorie_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Button, { variant: "secondary", type: "submit", children: [
          mode == "create" ? useTrans("Créer") : useTrans("Enregistrer"),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsx(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: useTrans("Annuler") }) }) })
    ] })
  ] });
}
function CategoryCard({ category }) {
  return /* @__PURE__ */ jsxs(
    Card,
    {
      className: "rounded-lg border-none mt-6 bg-muted",
      children: [
        /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsx("div", { className: "bg-card p-2 rounded", children: category.categorie_name }) }),
        /* @__PURE__ */ jsxs(CardFooter, { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsx(CategoryDialog, { mode: "edit", category }),
          /* @__PURE__ */ jsx(
            DeleteeDialog,
            {
              id: category.categorie_id,
              url: "categorys.destroy",
              message: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce élément et chaque caractéristique de cette categorie va supprimé"
            }
          )
        ] })
      ]
    },
    category.categorie_id
  );
}
function Features({ features, categorys }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Rooms" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Caractéristiques") }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "features", className: "mt-2", children: [
      /* @__PURE__ */ jsx(TabsList, { className: "w-full flex justify-start rtl:justify-end bg-transparent border-b-2 rounded-none	", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-start", children: [
        /* @__PURE__ */ jsx(
          TabsTrigger,
          {
            value: "features",
            className: "mr-2 font-bold text-xl rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-primary data-[state=active]:text-primary shadow-none ",
            children: useTrans("Caractéristiques")
          }
        ),
        /* @__PURE__ */ jsx(
          TabsTrigger,
          {
            onClick: () => !categorys && router.reload({ only: ["categorys"] }),
            value: "category",
            className: "mr-2 font-bold text-xl rounded-none bg-transparent shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-primary data-[state=active]:text-primary ",
            children: useTrans("Catégories")
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "features", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end rtl:justify-start ", children: /* @__PURE__ */ jsx(FeatureCreateDialog, { categorys }) }),
        /* @__PURE__ */ jsx(PlaceholderContent, { children: features.length ? /* @__PURE__ */ jsx(
          DataTable,
          {
            columns: featuresColumns,
            data: features,
            selection: true
          }
        ) : /* @__PURE__ */ jsx(
          EmptyPage,
          {
            icon: Hotel,
            text: "Aucun caractéristiques pour l'instant, essayez de créer une nouvelle"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "category", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end rtl:justify-start", children: /* @__PURE__ */ jsx(CategoryDialog, { mode: "create" }) }),
        /* @__PURE__ */ jsx(PlaceholderContent, { children: categorys.length ? /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children: categorys && categorys.map((category) => /* @__PURE__ */ jsx(CategoryCard, { category })) }) : /* @__PURE__ */ jsx(
          EmptyPage,
          {
            icon: Hotel,
            text: "Aucun categories pour l'instant, essayez de créer une nouvelle"
          }
        ) })
      ] })
    ] })
  ] });
}
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Features
}, Symbol.toStringTag, { value: "Module" }));
function Room({ room, categorys }) {
  const categoryExists = (features, category_id) => {
    return features.some((item) => item.categorie_id === category_id);
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Rooms" }),
    /* @__PURE__ */ jsx(
      PageHeading,
      {
        title: useTrans("La Chambre N°") + " " + room.room_number
      }
    ),
    /* @__PURE__ */ jsxs(PlaceholderContent, { children: [
      /* @__PURE__ */ jsxs(Carousel, { children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: room.assets.map((asset, index) => /* @__PURE__ */ jsx(
          CarouselItem,
          {
            className: "md:basis-1/2 lg:basis-1/3",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: asset.url,
                alt: `Selected ${index}`,
                className: "rounded-md object-cover aspect-video w-full"
              }
            )
          },
          index
        )) }),
        /* @__PURE__ */ jsx(CarouselPrevious, { className: "bg-secondary text-secondary-foreground" }),
        /* @__PURE__ */ jsx(CarouselNext, { className: "bg-secondary text-secondary-foreground" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-xl", children: [
            room.type.type_designation,
            " ",
            useTrans("avec"),
            " ",
            room.beeds_number,
            " ",
            useTrans("lits"),
            " "
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "font-bold text-xl bg-muted p-2 rounded", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              useTrans("Prix de chmabre"),
              " : "
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-destructive", children: [
              room.room_price,
              " ",
              useTrans("DA")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8", children: categorys.map((category) => /* @__PURE__ */ jsx("div", { children: categoryExists(
          room.features,
          category.categorie_id
        ) && /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "m-4", children: [
            category.categorie_name,
            /* @__PURE__ */ jsx(Separator, {})
          ] }),
          room.features.map(
            (feature) => feature.categorie_id === category.categorie_id && /* @__PURE__ */ jsxs(
              "div",
              {
                className: "mx-2",
                children: [
                  feature.features_name,
                  " ",
                  feature.need_value ? " : " + feature.pivot.valeur : null
                ]
              },
              feature.feature_id
            )
          )
        ] }) }) }, category.categorie_id)) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "font-bold text-lg my-4", children: [
            useTrans("Description"),
            " :",
            " "
          ] }),
          /* @__PURE__ */ jsx(
            RichEditor,
            {
              autofocus: false,
              editable: false,
              content: room.room_descreption,
              onContentChange: ({ html }) => {
                setData("room_descreption", html);
              }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-4", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: /* @__PURE__ */ jsxs(
        Link,
        {
          href: route("rooms.edit", room.room_number),
          className: "flex w-full",
          children: [
            useTrans("Modifier"),
            " ",
            /* @__PURE__ */ jsx(Pencil, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" })
          ]
        }
      ) }) })
    ] })
  ] });
}
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Room
}, Symbol.toStringTag, { value: "Module" }));
const fileTypes$3 = ["JPG", "PNG", "GIF"];
function CreateRoomForm({ types, categorys }) {
  const [type, setType] = React__default.useState("");
  const [open, setOpen] = React__default.useState(false);
  const [searchValue, setSearchValue] = React__default.useState("");
  const [importedFiles, setImportedFiles] = useState([]);
  const { data, setData: setData2, post, errors, clearErrors } = useForm({
    room_number: "",
    room_price: "",
    room_descreption: "",
    type_id: "",
    beeds_number: "",
    features: [],
    assets: []
  });
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("rooms.store"));
  };
  const isPressedFn = (feature) => data.features.some((f) => f.id === feature.feature_id);
  const handleFeatures = (pressed, feature) => {
    setData2((data2) => {
      if (pressed) {
        data2.features.push({
          id: feature.feature_id,
          name: feature.features_name,
          need_value: feature.need_value,
          value: ""
        });
      } else {
        data2.features.splice(
          data2.features.indexOf(
            data2.features.find((f) => f.id === feature.feature_id)
          ),
          1
        );
      }
      return { ...data2 };
    });
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_number",
            value: useTrans("Numéro de chmabre")
          }
        ),
        /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
          "Quel est le numéro unique de cette chambre ?"
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_number",
            value: useTrans("Numéro de chmabre")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            placeholder: "102",
            id: "room_number",
            value: data.room_number,
            onChange: (e) => setData2("room_number", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.room_number, className: "mt-2" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_price",
            value: useTrans("Prix de chmabre")
          }
        ),
        /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
          "Ce sont les prix de la chambre avec tous taxe inclus"
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_price",
            value: useTrans("Prix de chmabre")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            placeholder: "5500 DA",
            id: "room_price",
            value: data.room_price,
            onChange: (e) => setData2("room_price", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.room_price, className: "mt-2" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "beeds_number",
            value: useTrans("Nombre de lits")
          }
        ),
        /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
          "Quel est le nombre de lits dans cette chambre"
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "beeds_number",
            value: useTrans("Nombre de lits")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            placeholder: "3",
            id: "beeds_number",
            value: data.beeds_number,
            onChange: (e) => setData2("beeds_number", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.beeds_number,
            className: "mt-2"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "room_type", value: useTrans("Type") }),
        /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans("Quel est le type de cette chambre") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_type",
            value: useTrans("Type"),
            className: "mb-2"
          }
        ),
        /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              role: "combobox",
              "aria-expanded": open,
              className: "w-full justify-between",
              children: [
                type ? type : useTrans("Selectioner un Type..."),
                /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(PopoverContent, { children: /* @__PURE__ */ jsxs(Command, { children: [
            /* @__PURE__ */ jsx(
              CommandInput,
              {
                placeholder: useTrans(
                  "Chercher un Type..."
                ),
                value: searchValue,
                onValueChange: (newValue) => setSearchValue(newValue)
              }
            ),
            /* @__PURE__ */ jsxs(CommandList, { children: [
              /* @__PURE__ */ jsx(CommandEmpty, { children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("types.store"),
                  method: "post",
                  as: "button",
                  data: {
                    type_designation: searchValue
                  },
                  children: [
                    "Ajouter ",
                    /* @__PURE__ */ jsx("b", { children: searchValue }),
                    " au Types"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(CommandGroup, { children: types.map(
                ({ type_id, type_designation }) => /* @__PURE__ */ jsxs(
                  CommandItem,
                  {
                    value: type_designation,
                    onSelect: (currentValue) => {
                      setData2(
                        "type_id",
                        type_id
                      );
                      setType(
                        currentValue === type ? "" : currentValue
                      );
                      setOpen(false);
                    },
                    children: [
                      type_designation,
                      /* @__PURE__ */ jsx(
                        CheckIcon,
                        {
                          className: cn(
                            "ml-auto h-4 w-4",
                            type === type_designation ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  type_id
                )
              ) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(InputError, { message: errors.type_id, className: "mt-2" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_descreption",
            value: useTrans("Description")
          }
        ),
        /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
          "Entrer une description générale sur cette chambre"
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_descreption",
            value: useTrans("Description")
          }
        ),
        /* @__PURE__ */ jsx(
          RichEditor,
          {
            autofocus: false,
            content: data.room_descreption,
            onContentChange: ({ html }) => {
              setData2("room_descreption", html);
            }
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.room_descreption,
            className: "mt-2"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex  my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_descreption",
            value: useTrans("Caractéristiques")
          }
        ),
        /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
          "Choisis parmi ces caractéristiques, et ajouter des valeur aux caractéristiques qui'il besoin"
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow flex gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-2/3", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "room_descreption",
              value: useTrans("Caractéristiques")
            }
          ),
          /* @__PURE__ */ jsxs(Accordion, { type: "multiple", children: [
            categorys.map((category) => /* @__PURE__ */ jsxs(
              AccordionItem,
              {
                className: "my-2 bg-card ",
                value: category.categorie_name,
                children: [
                  /* @__PURE__ */ jsx(AccordionTrigger, { className: "flex flex-wrap justify-center", children: category.categorie_name }),
                  /* @__PURE__ */ jsx(AccordionContent, { className: " px-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-4", children: category.feature.map(
                    (feature, idx) => {
                      return /* @__PURE__ */ jsx(
                        Toggle,
                        {
                          pressed: isPressedFn(
                            feature
                          ),
                          onPressedChange: (p) => handleFeatures(
                            p,
                            feature
                          ),
                          children: feature.features_name
                        },
                        idx
                      );
                    }
                  ) }) })
                ]
              },
              category.categorie_id
            )),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.features,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 w-1/3 ", children: data.features.map(
          (feature, idx) => feature.need_value ? /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { children: feature.name }),
            /* @__PURE__ */ jsx(
              Input,
              {
                className: "mt-2 w-full bg-card",
                value: feature.value,
                onChange: (e) => {
                  setData2((data2) => {
                    data2.features[idx].value = e.target.value;
                    return { ...data2 };
                  });
                }
              }
            )
          ] }, idx) : null
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "assets",
              value: useTrans("Photos")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Ajouter des photos au chambres (ne dépasse pas 10 photos par chambres)"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "assets",
              value: useTrans("Photos")
            }
          ),
          /* @__PURE__ */ jsx(
            FileUploader,
            {
              handleChange: handleFiles,
              name: "file",
              id: "assets",
              types: fileTypes$3,
              multiple: true,
              children: /* @__PURE__ */ jsx(MyFileUploader, {})
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.assets, className: "mt-2" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        ImagesViewer,
        {
          images: importedFiles,
          errors,
          deleteImage
        }
      ),
      " "
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
      Button,
      {
        type: "submit",
        className: "mt-2 w-1/4",
        variant: "secondary",
        children: useTrans("Crée")
      }
    ) })
  ] });
}
function RoomCreate({ types, categorys }) {
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Rooms crete" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Chambre Création") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto ", children: /* @__PURE__ */ jsx(CreateRoomForm, { types, categorys }) }) })
  ] });
}
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RoomCreate
}, Symbol.toStringTag, { value: "Module" }));
const fileTypes$2 = ["JPG", "PNG", "GIF"];
function EditRoomForm({ types, categorys, room }) {
  const [type, setType] = React__default.useState(room.type.type_designation);
  const [open, setOpen] = React__default.useState(false);
  const [searchValue, setSearchValue] = React__default.useState("");
  const [importedFiles, setImportedFiles] = useState([]);
  const { data, setData: setData2, post, errors, clearErrors } = useForm({
    room_number: room.room_number,
    type_id: room.type_id,
    room_descreption: room.room_descreption,
    room_price: room.room_price,
    beeds_number: room.beeds_number,
    features: room.features.map((feature) => {
      return {
        feature_id: feature.feature_id,
        features_name: feature.features_name,
        need_value: feature.need_value,
        value: feature.pivot.valeur
      };
    }),
    assets: []
  });
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    post(route("rooms.update", room.room_number));
  };
  const isPressedFn = (feature) => data.features.some((f) => f.feature_id === feature.feature_id);
  const handleFeatures = (pressed, feature) => {
    setData2((data2) => {
      if (pressed) {
        data2.features.push({
          feature_id: feature.feature_id,
          features_name: feature.features_name,
          need_value: feature.need_value,
          value: ""
        });
      } else {
        data2.features.splice(
          data2.features.indexOf(
            data2.features.find(
              (f) => f.feature_id === feature.feature_id
            )
          ),
          1
        );
      }
      return { ...data2 };
    });
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit, children: [
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_number",
            value: useTrans("Numéro de chmabre")
          }
        ),
        /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
          "Quel est le numéro unique de cette chambre ?"
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_number",
            value: useTrans("Numéro de chmabre")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            placeholder: "102",
            id: "room_number",
            value: data.room_number,
            onChange: (e) => setData2("room_number", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.room_number, className: "mt-2" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_price",
            value: useTrans("Prix de chmabre")
          }
        ),
        /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
          "Ce sont les prix de la chambre avec tous taxe inclus"
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_price",
            value: useTrans("Prix de chmabre")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            placeholder: "5500 DA",
            id: "room_price",
            value: data.room_price,
            onChange: (e) => setData2("room_price", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.room_price, className: "mt-2" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "beeds_number",
            value: useTrans("Nombre de lits")
          }
        ),
        /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
          "Quel est le nombre de lits dans cette chambre"
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "beeds_number",
            value: useTrans("Nombre de lits")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            placeholder: "3",
            id: "beeds_number",
            value: data.beeds_number,
            onChange: (e) => setData2("beeds_number", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.beeds_number,
            className: "mt-2"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "room_type", value: useTrans("Type") }),
        /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans("Quel est le type de cette chambre") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_type",
            value: useTrans("Type"),
            className: "mb-2"
          }
        ),
        /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              role: "combobox",
              "aria-expanded": open,
              className: "w-full justify-between",
              children: [
                type ? type : useTrans("Selectioner un Type..."),
                /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(PopoverContent, { children: /* @__PURE__ */ jsxs(Command, { children: [
            /* @__PURE__ */ jsx(
              CommandInput,
              {
                placeholder: useTrans(
                  "Chercher un Type..."
                ),
                value: searchValue,
                onValueChange: (newValue) => setSearchValue(newValue)
              }
            ),
            /* @__PURE__ */ jsxs(CommandList, { children: [
              /* @__PURE__ */ jsx(CommandEmpty, { children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("types.store"),
                  method: "post",
                  as: "button",
                  data: {
                    type_designation: searchValue
                  },
                  children: [
                    "Ajouter ",
                    /* @__PURE__ */ jsx("b", { children: searchValue }),
                    " au Types"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(CommandGroup, { children: types.map(
                ({ type_id, type_designation }) => /* @__PURE__ */ jsxs(
                  CommandItem,
                  {
                    value: type_designation,
                    onSelect: (currentValue) => {
                      setData2(
                        "type_id",
                        type_id
                      );
                      setType(
                        currentValue === type ? "" : currentValue
                      );
                      setOpen(false);
                    },
                    children: [
                      type_designation,
                      /* @__PURE__ */ jsx(
                        CheckIcon,
                        {
                          className: cn(
                            "ml-auto h-4 w-4",
                            type === type_designation ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  type_id
                )
              ) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(InputError, { message: errors.type_id, className: "mt-2" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_descreption",
            value: useTrans("Description")
          }
        ),
        /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
          "Entrer une description générale sur cette chambre"
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_descreption",
            value: useTrans("Description")
          }
        ),
        /* @__PURE__ */ jsx(
          RichEditor,
          {
            autofocus: false,
            content: data.room_descreption,
            onContentChange: ({ html }) => {
              setData2("room_descreption", html);
            }
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.room_descreption,
            className: "mt-2"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex  my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_descreption",
            value: useTrans("Caractéristiques")
          }
        ),
        /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
          "Choisis parmi ces caractéristiques, et ajouter des valeur aux caractéristiques qui'il besoin"
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow flex gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-2/3", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "room_descreption",
              value: useTrans("Caractéristiques")
            }
          ),
          /* @__PURE__ */ jsxs(Accordion, { type: "multiple", children: [
            categorys.map((category) => /* @__PURE__ */ jsxs(
              AccordionItem,
              {
                className: "my-2 bg-card ",
                value: category.categorie_name,
                children: [
                  /* @__PURE__ */ jsx(AccordionTrigger, { className: "flex flex-wrap justify-center", children: category.categorie_name }),
                  /* @__PURE__ */ jsx(AccordionContent, { className: " px-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-4", children: category.feature.map(
                    (feature, idx) => {
                      return /* @__PURE__ */ jsx(
                        Toggle,
                        {
                          pressed: isPressedFn(
                            feature
                          ),
                          onPressedChange: (p) => handleFeatures(
                            p,
                            feature
                          ),
                          children: feature.features_name
                        },
                        idx
                      );
                    }
                  ) }) })
                ]
              },
              category.categorie_id
            )),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.features,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 w-1/3 ", children: data.features.map(
          (feature, idx) => feature.need_value ? /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { children: feature.features_name }),
            /* @__PURE__ */ jsx(
              Input,
              {
                className: "mt-2 w-full bg-card",
                value: feature.value,
                onChange: (e) => {
                  setData2((data2) => {
                    data2.features[idx].value = e.target.value;
                    return { ...data2 };
                  });
                }
              }
            )
          ] }, idx) : null
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "assets",
              value: useTrans("Photos")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Ajouter des photos au chambres (ne dépasse pas 10 photos par chambres)"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "assets",
              value: useTrans("Photos")
            }
          ),
          /* @__PURE__ */ jsx(
            FileUploader,
            {
              handleChange: handleFiles,
              name: "file",
              id: "assets",
              types: fileTypes$2,
              multiple: true,
              children: /* @__PURE__ */ jsxs("div", { className: "bg-card mt-2 p-4 rounded flex justify-between items-center border-dashed border-2 border-secondary", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center", children: [
                  /* @__PURE__ */ jsx(ImagePlus, {}),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: useTrans(
                    "Télécharger ou déposer des images ici"
                  ) })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                  fileTypes$2.map((type2) => type2 + ","),
                  " "
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.assets, className: "mt-2" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        ImagesViewer,
        {
          images: importedFiles,
          errors,
          deleteImage
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
        DbImageViewer,
        {
          assets: room.assets,
          importedFiles: importedFiles.length
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
      Button,
      {
        type: "submit",
        className: "mt-2 w-1/4",
        variant: "secondary",
        children: useTrans("Enregistrer")
      }
    ) })
  ] });
}
function RoomEdit({ room, types, categorys }) {
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Rooms crete" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Chambre Modification") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto ", children: /* @__PURE__ */ jsx(
      EditRoomForm,
      {
        types,
        categorys,
        room: room[0]
      }
    ) }) })
  ] });
}
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RoomEdit
}, Symbol.toStringTag, { value: "Module" }));
const columns = [
  {
    accessorKey: "Numéro de chambre",
    cell: ({ row }) => {
      const room = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        " ",
        room.room_number
      ] });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "Numéro de chambre" })
  },
  {
    accessorKey: "Type",
    cell: ({ row }) => {
      const room = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        " ",
        room.type.type_designation,
        " "
      ] });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "Type" })
  },
  {
    accessorKey: "Status",
    cell: ({ row }) => {
      const room = row.original;
      return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center rtl:justify-start space-x-2", children: room.room_status === "hors service" ? /* @__PURE__ */ jsxs(Badge, { variant: "danger", children: [
        room.room_status,
        " "
      ] }) : room.room_status === "libre" ? /* @__PURE__ */ jsxs(Badge, { variant: "success", children: [
        room.room_status,
        " "
      ] }) : /* @__PURE__ */ jsxs(Badge, { variant: "warning", children: [
        room.room_status,
        " "
      ] }) });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "Status" })
  },
  {
    accessorKey: "Prix",
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "Prix de chambre" }),
    cell: ({ row }) => {
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "DZD"
      }).format(row.original.room_price);
      return /* @__PURE__ */ jsx("div", { className: "font-medium", children: formatted });
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const room = row.original;
      const room_permission = usePage().props.room_permission;
      return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "h-8 w-8 p-0", children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
          /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
          room_permission.viewAny && /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("rooms.show", room.room_number),
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                useTrans("Voir")
              ]
            }
          ) }),
          room_permission.update && /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("rooms.edit", room.room_number),
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(Pencil, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                useTrans("Modifier")
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          room_permission.update && /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx(
              Switch,
              {
                checked: room.room_status !== "hors service",
                onCheckedChange: () => {
                  router.post(
                    route("rooms.toggle.status"),
                    {
                      room_number: room.room_number,
                      room_status: room.room_status === "hors service" ? "libre" : "hors service"
                    }
                  );
                }
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "ml-2 ", children: room.room_status === "hors service" ? useTrans("Marqué comme disponible") : useTrans("Marqué comme hors service") })
          ] })
        ] })
      ] });
    }
  }
];
function RoomCard$2({ room }) {
  return /* @__PURE__ */ jsxs(Card, { className: "rounded-lg border-none mt-6", children: [
    /* @__PURE__ */ jsxs(CardContent, { className: "p-6 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(CardTitle, { children: [
          useTrans("La Chambre N°"),
          " ",
          room.room_number,
          " / ",
          room.type.type_designation
        ] }),
        /* @__PURE__ */ jsxs(CardDescription, { children: [
          useTrans("Prix de chmabre"),
          " : ",
          room.room_price,
          " ",
          useTrans("DA")
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center space-x-2", children: room.room_status === "hors service" ? /* @__PURE__ */ jsxs(Badge, { variant: "danger", children: [
        room.room_status,
        " "
      ] }) : room.room_status === "libre" ? /* @__PURE__ */ jsxs(Badge, { variant: "success", children: [
        room.room_status,
        " "
      ] }) : /* @__PURE__ */ jsxs(Badge, { variant: "warning", children: [
        room.room_status,
        " "
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs(CardDescription, { className: "flex", children: [
        /* @__PURE__ */ jsx(
          Switch,
          {
            checked: room.room_status !== "hors service",
            onCheckedChange: () => {
              router.post(
                route("rooms.toggle.status"),
                {
                  room_number: room.room_number,
                  room_status: room.room_status === "hors service" ? "libre" : "hors service"
                },
                {
                  preserveState: true,
                  preserveScroll: true
                }
              );
            }
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "mx-2 ", children: room.room_status === "hors service" ? useTrans("Marqué comme disponible") : useTrans("Marqué comme hors service") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("rooms.show", room.room_number),
            className: "flex w-full",
            children: [
              /* @__PURE__ */ jsx(Eye, { className: "mx-2 h-3.5 w-3.5 text-muted-foreground/70" }),
              " ",
              useTrans("Voir")
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("rooms.edit", room.room_number),
            className: "flex w-full",
            children: [
              /* @__PURE__ */ jsx(Pencil, { className: "mx-2 h-3.5 w-3.5 text-muted-foreground/70" }),
              useTrans("Modifier")
            ]
          }
        ) })
      ] })
    ] })
  ] }, room.room_number);
}
function TopButton({ href, text }) {
  const { width } = useWindowDimensions();
  const handleButton = () => {
    router.visit(href, { method: "get" });
  };
  return width <= 767 ? /* @__PURE__ */ jsx("div", { className: "fixed bottom-10 right-10 ", children: /* @__PURE__ */ jsx(
    Button,
    {
      variant: "secondary",
      className: "h-16 w-16 rounded-full opacity-85",
      onClick: () => {
        handleButton();
      },
      children: /* @__PURE__ */ jsx(CirclePlus, {})
    }
  ) }) : /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
    Button,
    {
      variant: "secondary",
      onClick: () => {
        handleButton();
      },
      children: text
    }
  ) });
}
function MobilePagination({ data }) {
  const navigateTo = (url) => {
    router.visit(url, {
      preserveState: true,
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start gap-16 px-2 mt-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex text-sm text-muted-foreground", children: [
      data.to - data.from + 1,
      " of ",
      data.total,
      " "
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx(Pagination, { children: /* @__PURE__ */ jsxs(PaginationContent, { children: [
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !data.prev_page_url,
          onClick: () => navigateTo(data.first_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to first page" }),
            /* @__PURE__ */ jsx(DoubleArrowLeftIcon, { className: "h-4 w-4" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !data.prev_page_url,
          onClick: () => navigateTo(data.prev_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to previous page" }),
            /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "h-4 w-4" })
          ]
        }
      ) }),
      data.links.slice(1, -1).filter(
        (link, index, array) => link.active || index > 0 && array[index - 1].active
      ).map((link) => /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: link.active ? "outline" : "ghost",
          className: "h-8 w-8 p-0",
          onClick: () => navigateTo(link.url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to next page" }),
            link.label
          ]
        }
      ) }, link.label)),
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !data.next_page_url,
          onClick: () => navigateTo(data.next_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to next page" }),
            /* @__PURE__ */ jsx(ChevronRightIcon, { className: "h-4 w-4" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !data.next_page_url,
          onClick: () => navigateTo(data.last_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to last page" }),
            /* @__PURE__ */ jsx(DoubleArrowRightIcon, { className: "h-4 w-4" })
          ]
        }
      ) })
    ] }) }) })
  ] });
}
function Rooms$1({ rooms, room_permission }) {
  const { width } = useWindowDimensions();
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Rooms" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Chambres", "Rooms") }),
    room_permission.create && /* @__PURE__ */ jsx(
      TopButton,
      {
        href: route("rooms.create"),
        text: useTrans("Crée un chambre")
      }
    ),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: rooms.data.lenght ? width <= 767 ? /* @__PURE__ */ jsxs("div", { children: [
      rooms.data.map((room) => /* @__PURE__ */ jsx(RoomCard$2, { room }, room.room_number)),
      /* @__PURE__ */ jsx(MobilePagination, { data: rooms })
    ] }) : /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto invisible md:visible", children: /* @__PURE__ */ jsx(
      DataTable,
      {
        columns,
        data: rooms.data,
        paginate: rooms,
        selection: false
      }
    ) }) : /* @__PURE__ */ jsx(
      EmptyPage,
      {
        icon: Hotel,
        text: "No Rooms to show, try creating new Rooms!"
      }
    ) })
  ] });
}
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rooms$1
}, Symbol.toStringTag, { value: "Module" }));
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      ref,
      className: cn(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border dark:border-gray-700 dark:bg-gray-900 border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:border-primary dark:focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(CaretSortIcon, { className: "h-4 w-4 opacity-50" }) })
      ]
    }
  )
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUpIcon, {})
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDownIcon, {})
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
function ConsommationDialog({ services, mode, consumption }) {
  var _a, _b;
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  const { data, setData: setData2, post, put, errors } = useForm({
    consumption_name: consumption == null ? void 0 : consumption.consumption_name,
    consumption_price: consumption == null ? void 0 : consumption.consumption_price,
    service_id: consumption == null ? void 0 : consumption.service_id
  });
  const submit = (e) => {
    e.preventDefault();
    if (mode == "create") {
      post(route("consumptions.store"), {
        onSuccess: () => setOpen(false)
      });
    } else {
      put(route("consumptions.update", consumption.consumption_id), {
        onSuccess: () => setOpen(false)
      });
    }
  };
  if (width >= 767) {
    return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: mode == "create" ? useTrans("Créer un consommation") : useTrans("Modifier") }) }),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: mode == "create" ? useTrans("Créer un nouveau consommation") : useTrans("Modifier cette consommation") }) }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            className: "grid items-start gap-4 px-4",
            onSubmit: submit,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "service_id",
                    value: useTrans("Service"),
                    className: "w-fit"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Select,
                  {
                    name: "service_id",
                    onValueChange: (value) => {
                      setData2("service_id", value);
                    },
                    children: [
                      /* @__PURE__ */ jsxs(SelectTrigger, { className: " w-full", children: [
                        /* @__PURE__ */ jsx(
                          SelectValue,
                          {
                            placeholder: data.service_id ? "" : useTrans(
                              "Selectionner un service"
                            )
                          }
                        ),
                        (_a = services.find(
                          (s) => s.service_id == data.service_id
                        )) == null ? void 0 : _a.service_name
                      ] }),
                      /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
                        /* @__PURE__ */ jsx(SelectLabel, { children: "Services" }),
                        services.map((service) => /* @__PURE__ */ jsx(
                          SelectItem,
                          {
                            value: service.service_id,
                            children: service.service_name
                          },
                          service.service_id
                        ))
                      ] }) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.service_id,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "consumption_name",
                    value: useTrans("Nom de consommation")
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: useTrans("Exemple : Diner"),
                    id: "consumption_name",
                    value: data.consumption_name,
                    onChange: (e) => setData2("consumption_name", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.consumption_name,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "consumption_price",
                    value: useTrans("Prix de consommation")
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    className: "mt-2",
                    id: "consumption_price",
                    value: data.consumption_price,
                    onChange: (e) => setData2("consumption_price", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.consumption_price,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(Button, { variant: "secondary", type: "submit", children: mode == "create" ? useTrans("Créer") : useTrans("Enregistrer") })
            ]
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", children: [
      mode == "create" ? useTrans("Créer un consommation") : useTrans("Modifier"),
      " "
    ] }) }),
    /* @__PURE__ */ jsxs(DrawerContent, { children: [
      /* @__PURE__ */ jsx(DrawerHeader, { className: "text-left", children: /* @__PURE__ */ jsxs(DrawerTitle, { children: [
        mode == "create" ? useTrans("Créer un nouveau consommation") : useTrans("Modifier cette consommation"),
        " "
      ] }) }),
      /* @__PURE__ */ jsxs("form", { className: "grid items-start gap-4 px-4", onSubmit: submit, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_id",
              value: useTrans("Service"),
              className: "w-fit"
            }
          ),
          /* @__PURE__ */ jsxs(
            Select,
            {
              name: "service_id",
              onValueChange: (value) => {
                setData2("service_id", value);
              },
              children: [
                /* @__PURE__ */ jsxs(SelectTrigger, { className: " w-full", children: [
                  /* @__PURE__ */ jsx(
                    SelectValue,
                    {
                      placeholder: data.service_id ? "" : useTrans(
                        "Selectionner un service"
                      )
                    }
                  ),
                  (_b = services.find(
                    (s) => s.service_id == data.service_id
                  )) == null ? void 0 : _b.service_name
                ] }),
                /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
                  /* @__PURE__ */ jsx(SelectLabel, { children: "Services" }),
                  services.map((service) => /* @__PURE__ */ jsx(
                    SelectItem,
                    {
                      value: service.service_id,
                      children: service.service_name
                    },
                    service.service_id
                  ))
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.service_id,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "consumption_name",
              value: useTrans("Nom de consommation")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: useTrans("Exemple : Diner"),
              id: "consumption_name",
              value: data.consumption_name,
              onChange: (e) => setData2("consumption_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.consumption_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "consumption_price",
              value: useTrans("Prix de consommation")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2",
              id: "consumption_price",
              value: data.consumption_price,
              onChange: (e) => setData2("consumption_price", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.consumption_price,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "secondary", type: "submit", children: mode == "create" ? useTrans("Créer") : useTrans("Enregistrer") })
      ] }),
      /* @__PURE__ */ jsx(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: useTrans("Annuler") }) }) })
    ] })
  ] });
}
function ConsommationCard({
  consumption,
  services
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "w-full", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "flex-row items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "font-bold text-xl", children: consumption.consumption_name }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Badge, { variant: "success", children: [
        consumption.service.service_name,
        " "
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      useTrans("Prix Unitaire:"),
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-destructive font-bold", children: consumption.consumption_price }),
      " ",
      useTrans("DA")
    ] }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "gap-4", children: [
      /* @__PURE__ */ jsx(
        DeleteeDialog,
        {
          id: consumption.consumption_id,
          url: "consumptions.destroy",
          message: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette consommation"
        }
      ),
      /* @__PURE__ */ jsx(
        ConsommationDialog,
        {
          consumption,
          services,
          mode: "edit"
        }
      )
    ] })
  ] });
}
function Consumptions({ consumptions, services }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Consumptions" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Consommations") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(ConsommationDialog, { services, mode: "create" }) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: consumptions.lenght ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "font-bold p-4", children: [
        useTrans("List des consommations"),
        " :"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children: consumptions.map((consumption) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        ConsommationCard,
        {
          consumption,
          services
        }
      ) }, consumption.consumption_id)) })
    ] }) : /* @__PURE__ */ jsx(
      EmptyPage,
      {
        text: "Aucun consommations pour l'instant, essayez de créer un nouveau",
        icon: HandPlatter
      }
    ) })
  ] });
}
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Consumptions
}, Symbol.toStringTag, { value: "Module" }));
const fileTypes$1 = ["JPG", "PNG", "GIF"];
function CreateService() {
  const { data, setData: setData2, post, errors, clearErrors } = useForm({
    service_name: "",
    service_descreption: "",
    assets: []
  });
  const [importedFiles, setImportedFiles] = useState([]);
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("services.store"));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Service" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Service Création") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_name",
              value: useTrans("Nom de service")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Entrer un nom claire et simple pour le nom de service"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_name",
              value: useTrans("Nom de service")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              placeholder: useTrans("Exemple : Restaurant"),
              id: "service_name",
              value: data.service_name,
              onChange: (e) => setData2("service_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.service_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_descreption",
              value: useTrans("Description")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Vous pouvez ajouter des titre ou bien des style au desciption"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_descreption",
              value: useTrans("Description")
            }
          ),
          /* @__PURE__ */ jsx(
            RichEditor,
            {
              autofocus: false,
              content: data.service_descreption,
              onContentChange: ({ html }) => {
                setData2("service_descreption", html);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.service_descreption,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: useTrans("Photos")
              }
            ),
            /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
              "Ajouter des photos au service (ne dépasse pas 10 photos par service)"
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: useTrans("Photos")
              }
            ),
            /* @__PURE__ */ jsx(
              FileUploader,
              {
                handleChange: handleFiles,
                name: "file",
                id: "assets",
                types: fileTypes$1,
                multiple: true,
                children: /* @__PURE__ */ jsx(MyFileUploader, {})
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.assets,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          ImagesViewer,
          {
            images: importedFiles,
            errors,
            deleteImage
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: useTrans("Créer")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateService
}, Symbol.toStringTag, { value: "Module" }));
const fileTypes = ["JPG", "PNG", "GIF"];
function EditService({ service }) {
  const { data, setData: setData2, post, errors, clearErrors } = useForm({
    service_name: service.service_name,
    service_descreption: service.service_descreption,
    assets: []
  });
  const [importedFiles, setImportedFiles] = useState([]);
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("services.update", service.service_id));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Service" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Service Modification") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_name",
              value: useTrans("Nom de service")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Entrer un nom claire et simple pour le nom de service"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_name",
              value: useTrans("Nom de service")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              placeholder: useTrans("Exemple : Restaurant"),
              id: "service_name",
              value: data.service_name,
              onChange: (e) => setData2("service_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.service_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_descreption",
              value: useTrans("Description")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Vous pouvez ajouter des titre ou bien des style au desciption"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_descreption",
              value: useTrans("Description")
            }
          ),
          /* @__PURE__ */ jsx(
            RichEditor,
            {
              autofocus: false,
              content: data.service_descreption,
              onContentChange: ({ html }) => {
                setData2("service_descreption", html);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.service_descreption,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: useTrans("Photos")
              }
            ),
            /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
              "Ajouter des photos au service (ne dépasse pas 10 photos par service)"
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: useTrans("Photos")
              }
            ),
            /* @__PURE__ */ jsx(
              FileUploader,
              {
                handleChange: handleFiles,
                name: "file",
                id: "assets",
                types: fileTypes,
                multiple: true,
                children: /* @__PURE__ */ jsx(MyFileUploader, {})
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.assets,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          ImagesViewer,
          {
            images: importedFiles,
            errors,
            deleteImage
          }
        ),
        /* @__PURE__ */ jsx(
          DbImageViewer,
          {
            assets: service.assets,
            importedFiles: importedFiles.length
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: useTrans("Enregistrer")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EditService
}, Symbol.toStringTag, { value: "Module" }));
function ServiceCardFooter({ service }) {
  const service_permission = usePage().props.service_permission;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    service_permission.update && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        Switch,
        {
          checked: service.availability,
          onCheckedChange: () => {
            router.post(
              route("services.toggle.availability"),
              {
                service_id: service.service_id
              },
              {
                preserveState: true,
                preserveScroll: true
              }
            );
          }
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "ml-2 ", children: service.availability ? useTrans("Marqué comme hors service") : useTrans("Marqué comme disponible") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      service_permission.update && /* @__PURE__ */ jsx(Button, { variant: "secondary", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: route("services.edit", service.service_id),
          as: "button",
          children: useTrans("Modifier")
        }
      ) }),
      service_permission.delete && /* @__PURE__ */ jsx(
        DeleteeDialog,
        {
          id: service.service_id,
          url: "services.destroy",
          message: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce élément et chaque caractéristique de cette categorie va supprimé"
        }
      )
    ] })
  ] });
}
function ServiceCard$1({ service }) {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    Card,
    {
      className: "transition-transform ease-in-out duration-700 relative my-6 ",
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(Carousel, { children: [
          /* @__PURE__ */ jsx(CarouselContent, { className: "h-full ", children: service.assets.map((asset, index) => /* @__PURE__ */ jsx(
            CarouselItem,
            {
              className: "md:basis-1/2 lg:basis-1/3",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: asset.url,
                  alt: `Selected ${index}`,
                  className: "rounded-md object-cover aspect-video w-full"
                }
              )
            },
            index
          )) }),
          /* @__PURE__ */ jsx(CarouselPrevious, { className: "bg-secondary left-0 text-secondary-foreground" }),
          /* @__PURE__ */ jsx(CarouselNext, { className: "bg-secondary right-0 text-secondary-foreground" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between w-full", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "text-lg font-bold text-xl flex flex-row items-start justify-between", children: [
            /* @__PURE__ */ jsx("div", { children: service.service_name }),
            /* @__PURE__ */ jsx("div", { className: "m-0", children: service.availability ? /* @__PURE__ */ jsx(Badge, { variant: "success", children: useTrans("Disponible") }) : /* @__PURE__ */ jsx(Badge, { variant: "danger", children: useTrans("Indisponible") }) })
          ] }),
          isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxs("div", { className: "font-bold text-lg my-4", children: [
                useTrans("Description"),
                " :",
                " "
              ] }),
              /* @__PURE__ */ jsx(
                RichEditor,
                {
                  autofocus: false,
                  editable: false,
                  content: service.service_descreption
                }
              )
            ] }),
            /* @__PURE__ */ jsx(CardFooter, { className: "justify-end gap-4 ", children: /* @__PURE__ */ jsx(ServiceCardFooter, { service }) })
          ] })
        ] }),
        width >= 767 && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 right-1/2 translate-x-1/2 z-20", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: buttonVariants({
              variant: "outline",
              size: "icon"
            }),
            onClick: () => setIsOpen(!isOpen),
            children: /* @__PURE__ */ jsx(
              ChevronUp,
              {
                className: cn(
                  "h-4 w-4 transition-transform ease-in-out duration-700 ",
                  isOpen === false ? "rotate-180" : "rotate-0"
                )
              }
            )
          }
        ) })
      ]
    },
    service.service_id
  );
}
function Services$1({ services, service_permission }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Services" }),
    /* @__PURE__ */ jsx(PageHeading, { title: useTrans("Services") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: service_permission.create && /* @__PURE__ */ jsx(Button, { variant: "secondary", children: /* @__PURE__ */ jsx(Link, { href: route("services.create"), as: "button", children: useTrans("Créer un service") }) }) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: services.lenght ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "font-bold p-4", children: [
        useTrans("List des services"),
        " :"
      ] }),
      services.map((service) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ServiceCard$1, { service }) }, service.service_id))
    ] }) : /* @__PURE__ */ jsx(
      EmptyPage,
      {
        text: "Aucun services pour l'instant, essayez de créer un nouveau",
        icon: HandPlatter
      }
    ) })
  ] });
}
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Services$1
}, Symbol.toStringTag, { value: "Module" }));
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center bg-muted", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex w-1/2 h-screen flex-col sm:justify-center items-center bg-secondary", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "http://localhost:8000/storage/sidi-el-noui-logo-removebg.png",
        className: "object-content w-1/3 md:w-2/3 rounded-xl relative z-10  hover:corsur-pointer  transition-transform duration-300 hover:scale-105 "
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 flex flex-col sm:justify-center items-center pt-6 sm:pt-2 bg-muted", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(AppLogo, { className: "w-20 h-20" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg", children })
    ] })
  ] });
}
function PrimaryButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function AdminLogin({ status, canResetPassword }) {
  const { data, setData: setData2, post, processing, errors, reset } = useForm({
    auth: "",
    password: "",
    remember: false
  });
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("admin.store"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "auth",
            value: useTrans("Email ou N° téléphone")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "auth",
            type: "text",
            name: "auth",
            value: data.auth,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData2("auth", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.auth, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "password",
            value: useTrans("Mot de passe")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData2("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onCheckedChange: (e) => setData2("remember", !data.remember)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ms-2 text-sm text-gray-600 dark:text-gray-400", children: useTrans("Souviens moi") })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
            children: useTrans("Mot de passe oublié ?")
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            size: "sm",
            className: "ms-4 w-1/4",
            disabled: processing,
            children: processing ? /* @__PURE__ */ jsx(LoaderCircle, { className: "animate-spin" }) : useTrans("Se Connecter")
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminLogin
}, Symbol.toStringTag, { value: "Module" }));
function ConfirmPassword() {
  const { data, setData: setData2, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600 dark:text-gray-400", children: useTrans(
      "Il s'agit d'une zone sécurisée de l'application. Veuillez confirmer votre mot de passe avant de continuer."
    ) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: useTrans("Mot de passe") }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            onChange: (e) => setData2("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(Button, { className: "ms-4", variant: "secondary", size: "sm", children: processing ? /* @__PURE__ */ jsx(LoaderCircle, { className: "animate-spin" }) : useTrans(
        "Confirmer"
      ) }) })
    ] })
  ] });
}
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword({ status }) {
  const { data, setData: setData2, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600 dark:text-gray-400", children: useTrans(
      "Vous avez oublié votre mot de passe ? Aucun problème. Indiquez-nous simplement votre adresse e-mail et nous vous enverrons par e-mail un lien de réinitialisation de mot de passe qui vous permettra de choisir un nouveau mot de passe."
    ) }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600 dark:text-green-400", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: (e) => setData2("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(Button, { className: "ms-4", variant: "secondary", size: "sm", children: processing ? /* @__PURE__ */ jsx(LoaderCircle, { className: "animate-spin" }) : useTrans(
        "Lien de réinitialisation du mot de passe par e-mail"
      ) }) })
    ] })
  ] });
}
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
function Login({ status, canResetPassword }) {
  const { data, setData: setData2, post, processing, errors, reset } = useForm({
    auth: "",
    password: "",
    remember: false
  });
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "auth",
            value: useTrans("Email ou N° téléphone")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "auth",
            type: "text",
            name: "auth",
            value: data.auth,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData2("auth", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.auth, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "password",
            value: useTrans("Mot de passe")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData2("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onCheckedChange: (e) => setData2("remember", !data.remember)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ms-2 text-sm text-gray-600 dark:text-gray-400", children: useTrans("Souviens moi") })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
            children: useTrans("Mot de passe oublié ?")
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            size: "sm",
            className: "ms-4 w-1/4",
            disabled: processing,
            children: processing ? /* @__PURE__ */ jsx(LoaderCircle, { className: "animate-spin" }) : useTrans("Se Connecter")
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
function Register() {
  const { data, setData: setData2, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.name,
            className: "mt-1 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: (e) => setData2("name", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData2("email", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData2("password", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData2("password_confirmation", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("login"),
            className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
            children: "Already registered?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Register" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
function ResetPassword({ token, email }) {
  const { data, setData: setData2, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData2("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "password",
            value: useTrans("Mot de passe")
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            isFocused: true,
            onChange: (e) => setData2("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "password_confirmation",
            value: useTrans("Confirmez le mot de passe")
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "password",
            id: "password_confirmation",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData2("password_confirmation", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.password_confirmation,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: useTrans("Réinitialiser le mot de passe") }) })
    ] })
  ] });
}
const __vite_glob_0_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600 dark:text-gray-400", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600 dark:text-green-400", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
          children: "Log Out"
        }
      )
    ] }) })
  ] });
}
const __vite_glob_0_44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
function getNavList(activeSection) {
  return [
    {
      label: useTrans("Accueil"),
      href: "#home-section",
      active: activeSection === "home-section"
    },
    {
      label: useTrans("Nos Chambres"),
      href: "#rooms-section",
      active: activeSection === "rooms-section"
    },
    {
      label: useTrans("Services"),
      href: "#services-section",
      active: activeSection === "services-section"
    },
    {
      label: useTrans("contactez-nous"),
      href: "#contact-section",
      active: activeSection === "contact-section"
    }
  ];
}
function NavLinks() {
  const [activeSection, setActiveSection] = useState("home-section");
  const menuList = getNavList(activeSection);
  const current = route().current();
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", function(e) {
        });
      });
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row lg:gap-10 gap-6", children: current != "client.index" ? menuList.map((link, idx) => /* @__PURE__ */ jsx(
    Link,
    {
      href: route("client.index"),
      className: "hover:text-primary ",
      children: link.label
    },
    idx
  )) : menuList.map((link, idx) => /* @__PURE__ */ jsx(
    "a",
    {
      className: cn(
        "hover:text-primary",
        link.active ? "text-primary hover:text-primary " : ""
      ),
      href: link.href,
      onClick: () => setActiveSection(link.href.slice(1)),
      children: link.label
    },
    idx
  )) });
}
function LinkSheet() {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  return /* @__PURE__ */ jsxs(
    Sheet,
    {
      open: width > 767 ? false : open,
      onOpenChange: () => setOpen(!open),
      children: [
        /* @__PURE__ */ jsx(SheetTrigger, { className: "md:hidden", asChild: true, children: /* @__PURE__ */ jsx(Button, { className: "h-8", variant: "outline", size: "icon", children: /* @__PURE__ */ jsx(MenuIcon, { size: 20 }) }) }),
        /* @__PURE__ */ jsxs(
          SheetContent,
          {
            className: "w-72 px-3 h-full flex flex-col gap-8",
            side: "right",
            children: [
              /* @__PURE__ */ jsx(SheetHeader, { children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("client.index"),
                  className: "flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(AppLogo, { className: "h-10 w-10" }),
                    /* @__PURE__ */ jsx("h1", { className: "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300", children: "Sidi El Noui" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(NavLinks, {})
            ]
          }
        )
      ]
    }
  );
}
function UserNav() {
  const user = usePage().props.auth.user;
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(TooltipProvider, { disableHoverableContent: true, children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          className: "relative h-8 w-8 rounded-full",
          children: /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 relative", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: "#", alt: "Avatar" }),
            /* @__PURE__ */ jsxs(AvatarFallback, { className: "bg-transparent uppercase", children: [
              user.first_name.charAt(0),
              user.last_name.charAt(0)
            ] })
          ] })
        }
      ) }) }),
      /* @__PURE__ */ jsx(TooltipContent, { side: "bottom", children: useTrans("Profile") })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium leading-none", children: [
          user == null ? void 0 : user.first_name,
          " ",
          user == null ? void 0 : user.last_name
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs leading-none text-muted-foreground", children: user == null ? void 0 : user.email })
      ] }) }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
        /* @__PURE__ */ jsx(DropdownMenuItem, { className: "hover:cursor-pointer", asChild: true, children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("client.profile.edit"),
            className: "flex items-center",
            children: [
              /* @__PURE__ */ jsx(User, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
              useTrans("Compte")
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { className: "hover:cursor-pointer", asChild: true, children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("client.bookings.index"),
            className: "flex items-center",
            children: [
              /* @__PURE__ */ jsx(BookmarkCheck, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
              useTrans("Mes réservations")
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          className: "hover:cursor-pointer",
          onClick: () => {
            router.post(route("logout"));
          },
          children: [
            /* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
            useTrans("Se déconnecter")
          ]
        }
      )
    ] })
  ] });
}
function LangSwitch() {
  const locale = localStorage.getItem("locale") || "fr";
  const [lang, setLang] = React.useState(locale);
  const handleSwitch = () => {
    const newLang = lang === "ar" ? "fr" : "ar";
    setLang(newLang);
    localStorage.setItem("locale", newLang);
    router.visit(route("client.switch.lang"), {
      data: { lang: newLang },
      preserveState: true,
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsx(TooltipProvider, { disableHoverableContent: true, children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        className: "rounded-full w-8 h-8 bg-background",
        variant: "outline",
        size: "icon",
        onClick: handleSwitch,
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 ",
                lang === "ar" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
              ),
              children: "ar"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 ",
                lang === "fr" ? "rotate-0 scale-100" : "rotate-90 scale-0"
              ),
              children: "fr"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Switch langue" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(TooltipContent, { side: "bottom", children: [
      useTrans("Changer la langue"),
      " "
    ] })
  ] }) });
}
function NavBar() {
  const user = usePage().props.auth.user;
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 w-full shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary", children: /* @__PURE__ */ jsxs("div", { className: "mx-4 sm:mx-8 flex h-14 items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4 lg:space-x-0", children: /* @__PURE__ */ jsx(Link, { href: route("client.index"), children: /* @__PURE__ */ jsx(AppLogo, { className: "w-10 h-10" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "invisible md:visible", children: /* @__PURE__ */ jsx(NavLinks, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 justify-end", children: [
      user ? /* @__PURE__ */ jsx(UserNav, {}) : /* @__PURE__ */ jsx(
        Button,
        {
          size: "sm",
          variant: "secondary",
          onClick: () => router.get(route("login")),
          children: "Se Connecter"
        }
      ),
      /* @__PURE__ */ jsx(LangSwitch, {}),
      /* @__PURE__ */ jsx(ThemeToggle, {}),
      /* @__PURE__ */ jsx(LinkSheet, {})
    ] })
  ] }) });
}
function Footer() {
  const menuList = getNavList();
  const current = route().current();
  return /* @__PURE__ */ jsxs("footer", { className: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:px-28 px-10 py-4 flex flex-col  gap-4 ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-row pb-4 flex-col justify-between items-center gap-4 w-full", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "phone:04505050",
            className: "flex gap-4 items-center justify-start w-full",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center", children: /* @__PURE__ */ jsx(Phone, {}) }),
              /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-col gap-4 sm:gap-1 ", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  useTrans("N° téléphone"),
                  " :",
                  " "
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium ", children: "0540304050" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:sidielnoui@gmail.com",
            className: "flex gap-4 items-center justify-start w-full",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center", children: /* @__PURE__ */ jsx(Mail, {}) }),
              /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-col gap-4 sm:gap-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  useTrans("Email"),
                  " :",
                  " "
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: "sidielnoui@gmail.com" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.googlemap.com",
            className: "flex gap-4 items-center justify-start w-full",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center", children: /* @__PURE__ */ jsx(MapPin, {}) }),
              /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-col gap-4 sm:gap-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  useTrans("Adresse"),
                  " :",
                  " "
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: "chéraga alger, Algerie" })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-row flex-col items-start gap-4 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-center gap-4 sm:w-2/4 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 w-1/2", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold", children: [
              useTrans("Liens"),
              " "
            ] }),
            current != "client.index" ? menuList.map((link, idx) => /* @__PURE__ */ jsx(
              Link,
              {
                href: route("client.index"),
                className: "hover:text-primary ",
                children: link.label
              },
              idx
            )) : menuList.map((link, idx) => /* @__PURE__ */ jsx(
              "a",
              {
                className: "hover:text-primary",
                href: link.href,
                children: link.label
              },
              idx
            ))
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center gap-4 w-1/2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", children: useTrans("Réseaux Sociaux") }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://web.facebook.com/p/Hotel-sidi-el-noui-100088684863459/?locale=fr_FR&_rdc=1&_rdr",
                className: "flex gap-4 items-center ",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center", children: /* @__PURE__ */ jsx(Facebook, {}) }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-medium hover:underline", children: "Sidi el noui" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://www.instagram.com/hotelsidielnoui?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                className: "flex gap-4 items-center  ",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center", children: /* @__PURE__ */ jsx(Instagram, {}) }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-medium hover:underline", children: "Sidi_el_noui" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-2/4", children: [
          /* @__PURE__ */ jsx(AppLogo, { className: "w-20 h-20" }),
          /* @__PURE__ */ jsxs("div", { children: [
            useTrans(
              "Bienvenue à SIDI EL NOUI - Votre refuge luxueux au cœur de Chéraga Découvrez un confort inégalé et une élégance raffinée en plein centre d'Alger. Notre hôtel offre des vues à couper le souffle, des équipements haut de gamme, et un service exceptionnel pour rendre votre séjour inoubliable."
            ),
            " "
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-secondary text-secondary-foreground p-4 text-center", children: [
      /* @__PURE__ */ jsx("span", { children: "© 2024 Copyright: " }),
      /* @__PURE__ */ jsx("a", { className: "font-semibold", href: "https://sidielnouihotel.com", children: "SIDI EL NOUI" })
    ] })
  ] });
}
function ClientLayout({ children }) {
  const locale = localStorage.getItem("locale") || "fr";
  useEffect(() => {
    document.documentElement.dir = locale == "ar" ? "rtl" : "ltr";
  }, [locale]);
  return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-muted -z-[2]", children: [
      /* @__PURE__ */ jsx(NavBar, {}),
      /* @__PURE__ */ jsx("main", { className: "m-3 sm:m-10 lg:mx-28 min-h-screen ", children }),
      /* @__PURE__ */ jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
function UserDataForm({
  booking_data,
  selectedRooms,
  setFinal,
  errors,
  handleSetData,
  data,
  submit,
  total,
  promotion
}) {
  const auth = usePage().props.auth;
  return /* @__PURE__ */ jsxs("div", { className: "relative flex gap-2 m-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-1/3 flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "font-bold p-2", children: useTrans("Détails de votre réservation") }),
        /* @__PURE__ */ jsxs(CardContent, { className: "flex justify-between p-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              useTrans("Arrivée"),
              " "
            ] }),
            /* @__PURE__ */ jsx("div", { className: "font-bold", children: booking_data.check_in }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "12h00 - 23h00" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              useTrans("Départ"),
              " "
            ] }),
            /* @__PURE__ */ jsx("div", { className: "font-bold", children: booking_data.check_out }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "07h00 - 12h00" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col items-start p-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            useTrans("Durée de séjour"),
            " "
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
            (new Date(booking_data.check_out) - new Date(booking_data.check_in)) / (1e3 * 60 * 60 * 24),
            " ",
            useTrans("nuit")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "font-bold p-2", children: [
          useTrans("Vous avez sélectionné pour"),
          " ",
          booking_data.guest_number,
          " ",
          useTrans("adult"),
          " ",
          booking_data.kids_number && /* @__PURE__ */ jsxs(Fragment, { children: [
            useTrans("et"),
            " ",
            booking_data.kids_number,
            " ",
            useTrans("bébés"),
            " :",
            " "
          ] }),
          " "
        ] }),
        /* @__PURE__ */ jsx(CardContent, { className: "p-2", children: selectedRooms.map((room) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "shadow rounded-lg py-1 px-2 mb-1 flex justify-between",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                useTrans("chambre"),
                " ",
                room.type.type_designation,
                " "
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "font-bold text-primary", children: [
                room.room_price,
                " ",
                useTrans("DA"),
                " x",
                " ",
                (new Date(booking_data.check_out) - new Date(booking_data.check_in)) / (1e3 * 60 * 60 * 24),
                " ",
                useTrans("nuit")
              ] })
            ]
          },
          room.room_number
        )) }),
        /* @__PURE__ */ jsx(CardFooter, { className: "justify-center p-2", children: /* @__PURE__ */ jsx(Button, { variant: "link", onClick: () => setFinal(false), children: useTrans("Modifier la selection") }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "p-2 font-bold", children: useTrans("Récapitulatif du montant") }),
        /* @__PURE__ */ jsxs(CardContent, { className: "p-2 text-3xl font-bold text-primary", children: [
          promotion ? /* @__PURE__ */ jsxs("div", { className: "text-xl line-through", children: [
            " ",
            total + promotion.promo_value * selectedRooms.length * (new Date(booking_data.check_out) - new Date(booking_data.check_in)) / (1e3 * 60 * 60 * 24),
            " ",
            useTrans("DA"),
            " "
          ] }) : null,
          total,
          " ",
          useTrans("DA")
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { className: "p-2 text-muted-foreground", children: useTrans("Ce prix avec tout tax inclus") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-2/3 h-fit bg-card p-2 pb-6 rounded-lg", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ jsx(
          FormInput,
          {
            label: "Nom",
            error: errors.first_name,
            type: "text",
            data: data.first_name,
            setData: handleSetData,
            fieldName: "first_name",
            disabled: auth.user != null
          }
        ),
        /* @__PURE__ */ jsx(
          FormInput,
          {
            label: "Prénom",
            error: errors.last_name,
            type: "text",
            data: data.last_name,
            setData: handleSetData,
            fieldName: "last_name",
            disabled: auth.user != null
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx(
        FormInput,
        {
          label: "Email",
          error: errors.email,
          type: "email",
          data: data.email,
          setData: handleSetData,
          fieldName: "email",
          disabled: auth.user != null
        }
      ),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx(
        FormInput,
        {
          label: "N° téléphone",
          error: errors.phone,
          type: "phone",
          data: data.phone,
          setData: handleSetData,
          fieldName: "phone",
          disabled: auth.user != null
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "w-1/4", children: useTrans("Réserver") }) })
    ] }) })
  ] });
}
function RoomsServces({
  rooms,
  services,
  booking_data,
  selectedRooms,
  setSelectedRooms,
  data,
  setData: setData2,
  total,
  setTotal,
  beedsNumber,
  setBeedsNumber,
  promotion
}) {
  const addRoom = (room) => {
    let nights = (new Date(booking_data.check_out) - new Date(booking_data.check_in)) / (1e3 * 60 * 60 * 24);
    promotion ? setTotal(
      total + (room.room_price - promotion.promo_value) * nights
    ) : setTotal(total + room.room_price * nights);
    setBeedsNumber(beedsNumber + Number(room.beeds_number));
    setSelectedRooms([...selectedRooms, room]);
    setData2((prevData) => {
      prevData.rooms.push({ id: room.id, room_price: room.room_price });
      return { ...prevData };
    });
  };
  const generateTableRows = (data2) => {
    const rows = [];
    for (const [roomType, beds] of Object.entries(data2)) {
      let typeRowSpan = 0;
      for (const bed of Object.values(beds)) {
        typeRowSpan += Object.keys(bed).length;
      }
      let firstTypeRow = true;
      for (const [bedNumber, prices] of Object.entries(beds)) {
        let bedRowSpan = Object.keys(prices).length;
        let firstBedRow = true;
        for (const [price, rooms2] of Object.entries(prices)) {
          rows.push(
            /* @__PURE__ */ jsxs("tr", { children: [
              firstTypeRow && /* @__PURE__ */ jsx(
                "td",
                {
                  className: "boreder border-2 border-secondary px-3 align-top ",
                  rowSpan: typeRowSpan,
                  children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start ", children: [
                    /* @__PURE__ */ jsx("div", { children: roomType }),
                    /* @__PURE__ */ jsx("div", { children: rooms2[0].features.map(
                      (feature) => /* @__PURE__ */ jsxs(
                        Badge,
                        {
                          className: "m-px",
                          children: [
                            feature.features_name,
                            feature.need_value == true && ": " + feature.pivot.valeur
                          ]
                        },
                        feature.feature_id
                      )
                    ) })
                  ] })
                }
              ),
              firstBedRow && /* @__PURE__ */ jsx(
                "td",
                {
                  className: "boreder border-2 border-secondary px-3 ",
                  rowSpan: bedRowSpan,
                  children: /* @__PURE__ */ jsx("div", { className: "flex", children: Array.from(
                    { length: bedNumber },
                    (_, index) => /* @__PURE__ */ jsx(BedSingle, {}, index)
                  ) })
                }
              ),
              /* @__PURE__ */ jsxs("td", { className: "boreder border-2 border-secondary px-3 ", children: [
                promotion ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("span", { className: "line-through", children: [
                    price,
                    " ",
                    useTrans("DA")
                  ] }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    " ",
                    price - promotion.promo_value,
                    " ",
                    useTrans("DA")
                  ] })
                ] }) : price + useTrans("DA"),
                " "
              ] }),
              /* @__PURE__ */ jsxs("td", { className: "boreder-b border-2 border-b-secondary px-3 flex justify-between items-center", children: [
                rooms2.length,
                " ",
                useTrans("Chambre"),
                rooms2.length == 1 ? "" : useTrans("s"),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    size: "icon",
                    variant: "outline",
                    className: "z-[1]",
                    disabled: beedsNumber >= booking_data.guest_number || rooms2.length <= 1 && selectedRooms.includes(
                      rooms2[rooms2.length - 1]
                    ) || selectedRooms.includes(
                      rooms2.filter(
                        (r) => r.id !== rooms2[rooms2.length - 1].id
                      )[rooms2.filter(
                        (r) => r.id !== rooms2[rooms2.length - 1].id
                      ).length - 1]
                    ),
                    onClick: () => addRoom(
                      selectedRooms.includes(
                        rooms2[rooms2.length - 1]
                      ) ? rooms2.filter(
                        (r) => r.id !== rooms2[rooms2.length - 1].id
                      )[rooms2.filter(
                        (r) => r.id !== rooms2[rooms2.length - 1].id
                      ).length - 1] : rooms2[rooms2.length - 1]
                    ),
                    children: /* @__PURE__ */ jsx(CirclePlus, {})
                  }
                )
              ] })
            ] }, `${roomType}-${bedNumber}-${price}`)
          );
          firstTypeRow = false;
          firstBedRow = false;
        }
      }
    }
    return rows;
  };
  const increment = (consumption) => {
    setTotal(total + consumption.consumption_price);
    setData2((prevData) => {
      const existingIndex = prevData.consomation.findIndex(
        (c) => c.consumption_id === consumption.consumption_id
      );
      if (existingIndex > -1) {
        prevData.consomation[existingIndex].quantity += 1;
      } else {
        prevData.consomation.push({
          consumption_id: consumption.consumption_id,
          quantity: 1,
          current_consumption_price: consumption.consumption_price,
          name: consumption.consumption_name
        });
      }
      return { ...prevData };
    });
  };
  const decrement = (consumption) => {
    setTotal(total - consumption.consumption_price);
    setData2((prevData) => {
      const existingIndex = prevData.consomation.findIndex(
        (c) => c.consumption_id === consumption.consumption_id
      );
      if (existingIndex > -1) {
        if (prevData.consomation[existingIndex].quantity === 1) {
          prevData.consomation.splice(existingIndex, 1);
        } else {
          prevData.consomation[existingIndex].quantity -= 1;
        }
      }
      return { ...prevData };
    });
  };
  const getQuantity = (consumption_id) => {
    const item = data == null ? void 0 : data.consomation.find(
      (c) => c.consumption_id === consumption_id
    );
    return item ? item.quantity : 0;
  };
  return /* @__PURE__ */ jsxs(
    Accordion,
    {
      type: "single",
      collapsible: true,
      className: "w-3/4",
      defaultValue: "rooms",
      children: [
        /* @__PURE__ */ jsxs(AccordionItem, { value: "rooms", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "bg-card mb-2 p-3 rounded", children: useTrans("Chambres") }),
          /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsxs("table", { className: "relative border-muted border-1 border bg-card z-[10]", children: [
            /* @__PURE__ */ jsx("thead", { className: "relative", children: /* @__PURE__ */ jsxs("tr", { className: "border border-secondary  border-2", children: [
              /* @__PURE__ */ jsxs("th", { className: "w-1/2", children: [
                useTrans("Type de logement"),
                " "
              ] }),
              /* @__PURE__ */ jsxs("th", { children: [
                useTrans("Nombre de lits"),
                " "
              ] }),
              /* @__PURE__ */ jsxs("th", { className: "w-1/4", children: [
                useTrans("Tarif"),
                " "
              ] }),
              /* @__PURE__ */ jsx("th", { className: "w-1/4", children: useTrans("Selectionner des chambres") })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: generateTableRows(rooms) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(AccordionItem, { value: "rooms-1", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "bg-card mb-2 p-3 rounded", children: useTrans("Consommations") }),
          /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx("div", { className: "relative bg-card z-[10] p-4 rounded", children: services.map((service) => /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold", children: service.service_name }),
            /* @__PURE__ */ jsx("div", { children: service.consomation.map((consomation) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex justify-between gap-4 items-center",
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    consomation.consumption_name,
                    " à",
                    " ",
                    /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
                      consomation.consumption_price,
                      " ",
                      "DA"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center border rounded p-1 bg-muted", children: [
                    /* @__PURE__ */ jsx(
                      CircleMinus,
                      {
                        onClick: () => decrement(consomation),
                        className: "cursor-pointer hover:text-secondary"
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "w-1/2 flex justify-center", children: getQuantity(
                      consomation.consumption_id
                    ) }),
                    /* @__PURE__ */ jsx(
                      CirclePlus,
                      {
                        onClick: () => increment(consomation),
                        className: "cursor-pointer hover:text-secondary"
                      }
                    )
                  ] })
                ]
              },
              consomation.consumption_id
            )) })
          ] }, service.service_id)) }) })
        ] })
      ]
    }
  );
}
function BookingsCard({
  setFinal,
  selectedRooms,
  data,
  total,
  setBeedsNumber,
  beedsNumber,
  setTotal,
  setSelectedRooms,
  setData: setData2,
  booking_data,
  promotion
}) {
  let nights = (new Date(booking_data.check_out) - new Date(booking_data.check_in)) / (1e3 * 60 * 60 * 24);
  const unselectRoom = (room) => {
    promotion ? setTotal(
      total - (room.room_price - promotion.promo_value) * nights
    ) : setTotal(total - room.room_price * nights);
    setBeedsNumber(beedsNumber - Number(room.beeds_number));
    setSelectedRooms(selectedRooms.filter((r) => r.id !== room.id));
    setData2((prevData) => {
      const existingIndex = prevData.rooms.findIndex(
        (r) => r === room.id
      );
      prevData.rooms.splice(existingIndex, 1);
      return { ...prevData };
    });
  };
  const unselectConsommation = (consomation) => {
    setTotal(
      total - consomation.current_consumption_price * consomation.quantity
    );
    setData2((prevData) => {
      const existingIndex = data.consomation.findIndex(
        (c) => c.consumption_id === consomation.consumption_id
      );
      prevData.consomation.splice(existingIndex, 1);
      return { ...prevData };
    });
  };
  return /* @__PURE__ */ jsx("div", { className: "w-1/4 rounded px-1 bg-card ", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-10", children: [
    /* @__PURE__ */ jsxs(
      Button,
      {
        onClick: () => setFinal(true),
        variant: "secondary",
        size: "sm",
        className: "my-4 w-full z-[1] justify-between",
        disabled: selectedRooms == false,
        children: [
          useTrans("Dernière étape"),
          " ",
          /* @__PURE__ */ jsx(ChevronRight, {})
        ]
      }
    ),
    total > 0 && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-lg font-bold", children: [
      useTrans("Total"),
      " : ",
      total,
      " ",
      useTrans("DA"),
      " "
    ] }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      selectedRooms.map((room) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex gap-2 justify-between py-1 ",
          children: [
            /* @__PURE__ */ jsxs(Dialog, { children: [
              /* @__PURE__ */ jsxs(DialogTrigger, { className: "hover:underline", children: [
                useTrans("Chambre N°"),
                " :",
                " ",
                room.room_number
              ] }),
              /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs(DialogHeader, { children: [
                /* @__PURE__ */ jsxs(DialogTitle, { children: [
                  useTrans("Chambre"),
                  " ",
                  room.type.type_designation,
                  " ",
                  useTrans("avec"),
                  " ",
                  room.beeds_number,
                  " ",
                  useTrans("lits"),
                  " ",
                  useTrans("Pour : "),
                  " ",
                  room.room_price,
                  " ",
                  useTrans("DA")
                ] }),
                room.assets.length > 0 && /* @__PURE__ */ jsxs(Carousel, { children: [
                  /* @__PURE__ */ jsx(CarouselContent, { children: room.assets.map(
                    (asset) => /* @__PURE__ */ jsx(
                      CarouselItem,
                      {
                        children: /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: asset.url,
                            alt: asset.name,
                            className: "w-full h-32 object-cover aspect-video rounded-md"
                          }
                        )
                      },
                      asset.id
                    )
                  ) }),
                  /* @__PURE__ */ jsx(CarouselPrevious, {}),
                  /* @__PURE__ */ jsx(CarouselNext, {})
                ] }),
                room.features.length > 0 && /* @__PURE__ */ jsxs("div", { className: "font-bold flex", children: [
                  useTrans("Caractéristiques"),
                  " :",
                  " "
                ] }),
                /* @__PURE__ */ jsx("div", { children: room.features.map((feature) => /* @__PURE__ */ jsxs(
                  Badge,
                  {
                    className: "m-px",
                    children: [
                      feature.features_name,
                      feature.need_value == true && ": " + feature.pivot.valeur
                    ]
                  },
                  feature.feature_id
                )) }),
                /* @__PURE__ */ jsx(DialogDescription, { children: /* @__PURE__ */ jsx(
                  RichEditor,
                  {
                    className: "bg-transparent border-none",
                    classNames: {
                      content: "text-ellipsis overflow-hidden ... "
                    },
                    autofocus: false,
                    editable: false,
                    content: room.room_descreption,
                    length: 200
                  }
                ) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "icon",
                variant: "outline",
                onClick: () => unselectRoom(room),
                children: /* @__PURE__ */ jsx(CircleMinus, {})
              }
            )
          ]
        },
        room.room_number
      )),
      data == null ? void 0 : data.consomation.map((consomation) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex gap-2 justify-between py-1 ",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("div", { children: consomation.name }),
              /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground text-sm", children: [
                consomation.price,
                " x ",
                consomation.quantity
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "icon",
                variant: "outline",
                onClick: () => unselectConsommation(consomation),
                children: /* @__PURE__ */ jsx(CircleMinus, {})
              }
            )
          ]
        },
        consomation.consumption_id
      ))
    ] })
  ] }) });
}
function AviableRooms({
  rooms,
  booking_data,
  services,
  promotion
}) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [total, setTotal] = useState(0);
  const [beedsNumber, setBeedsNumber] = useState(0);
  const [final, setFinal] = useState(false);
  const user = usePage().props.auth.user;
  const { data, setData: setData2, post, errors } = useForm({
    rooms: [],
    consomation: [],
    check_in: booking_data.check_in,
    check_out: booking_data.check_out,
    guest_number: booking_data.guest_number,
    kids_number: booking_data.kids_number,
    first_name: user ? user.first_name : "",
    last_name: user ? user.last_name : "",
    email: user ? user.email : "",
    phone: user ? user.phone : "",
    promo_value: promotion ? promotion.promo_value : null
  });
  const handleSetData = (field, value) => {
    setData2((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("client.store.bookings"));
  };
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Aviable rooms" }),
    /* @__PURE__ */ jsx("div", { className: "font-bold text-xl m-6 ", children: useTrans("Finaliser votre réservation") }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-1/2 h-1/2 left-[0]  top-[10]  translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] min-w-1/2 w-[37rem] h-[27rem] left-[calc(60%-28.5rem)] top-[50%] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] min-w-1/2 w-[37rem] h-[37rem] left-[0]  top-[50%] translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    final ? /* @__PURE__ */ jsx(
      UserDataForm,
      {
        booking_data,
        selectedRooms,
        setFinal,
        handleSetData,
        errors,
        data,
        submit,
        total,
        promotion
      }
    ) : /* @__PURE__ */ jsxs("div", { className: "relative flex gap-2 m-6", children: [
      /* @__PURE__ */ jsx(
        RoomsServces,
        {
          rooms,
          services,
          booking_data,
          selectedRooms,
          setSelectedRooms,
          data,
          setData: setData2,
          total,
          setTotal,
          beedsNumber,
          setBeedsNumber,
          promotion
        }
      ),
      /* @__PURE__ */ jsx(
        BookingsCard,
        {
          setFinal,
          booking_data,
          data,
          setData: setData2,
          total,
          setTotal,
          beedsNumber,
          setBeedsNumber,
          selectedRooms,
          setSelectedRooms,
          promotion
        }
      )
    ] })
  ] });
}
const __vite_glob_0_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AviableRooms
}, Symbol.toStringTag, { value: "Module" }));
function MyBookings$1({ booking }) {
  const totalPrice = () => {
    let total = 0;
    let days = (new Date(booking.check_out) - new Date(booking.check_in)) / (1e3 * 60 * 60 * 24);
    booking.rooms.map((room) => {
      total += room.pivot.room_price * days;
    });
    booking.consomation.map((consomation) => {
      total += consomation.consumption_price * consomation.pivot.quantity;
    });
    return total;
  };
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Mes Réservations" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[47rem] h-[47rem] left-[calc(40%-20rem)] top-[30rem] sm:translate-x-[10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[20rem] bottom-[5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx(
      PageHeading,
      {
        title: useTrans("Réservation"),
        className: "my-10 relative"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col md:flex-row gap-2 m-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-1/3 w-full flex md:flex-col gap-2", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "font-bold p-2", children: useTrans("Informations personnels") }),
          /* @__PURE__ */ jsx(CardContent, { className: "flex justify-between p-2", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
              booking.user.first_name,
              " ",
              booking.user.last_name,
              " "
            ] }),
            /* @__PURE__ */ jsx("div", { children: booking.user.email }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: booking.user.phone })
          ] }) }),
          /* @__PURE__ */ jsx(CardFooter, { className: "flex-col items-end p-2", children: /* @__PURE__ */ jsx(
            Button,
            {
              variant: "link",
              onClick: () => router.get(route("client.profile.edit")),
              children: useTrans("Voir le profile")
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "font-bold p-2", children: useTrans("Détails de votre réservation") }),
          /* @__PURE__ */ jsxs(CardContent, { className: "flex justify-between p-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                useTrans("Arrivée"),
                " "
              ] }),
              /* @__PURE__ */ jsx("div", { className: "font-bold", children: booking.check_in }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "12h00 - 23h00" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                useTrans("Départ"),
                " "
              ] }),
              /* @__PURE__ */ jsx("div", { className: "font-bold", children: booking.check_out }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "07h00 - 12h00" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { className: "flex justify-between p-2", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              useTrans("Nombre des personnes"),
              " "
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
              booking.guest_number,
              " "
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: useTrans("adult") }),
            booking.kids_number ? /* @__PURE__ */ jsxs(Fragment, { children: [
              " ",
              useTrans("et"),
              " ",
              /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
                booking.kids_number,
                " "
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: useTrans("bébés") })
            ] }) : null
          ] }) }),
          /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col items-start p-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              useTrans("Durée de séjour"),
              " "
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
              (new Date(booking.check_out) - new Date(booking.check_in)) / (1e3 * 60 * 60 * 24),
              " ",
              useTrans("nuit")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "p-2 font-bold", children: useTrans("Récapitulatif du montant") }),
          /* @__PURE__ */ jsxs(CardContent, { className: "p-2 text-3xl font-bold text-primary", children: [
            totalPrice(booking.rooms),
            " ",
            useTrans("DA")
          ] }),
          /* @__PURE__ */ jsx(CardFooter, { className: "p-2 text-muted-foreground", children: useTrans("Ce prix avec tout tax inclus") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:w-2/3 w-full h-fit bg-card p-2 pb-6 rounded-lg", children: [
        booking.rooms.map((room) => /* @__PURE__ */ jsxs(Card, { className: "w-full mb-2", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "font-bold p-2 pb-0 flex-row items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              useTrans("Chambre"),
              " ",
              room.type.type_designation,
              " ",
              useTrans("avec"),
              " ",
              room.beeds_number,
              " ",
              useTrans("lits")
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
              (new Date(booking.check_out) - new Date(booking.check_in)) / (1e3 * 60 * 60 * 24),
              " ",
              "x ",
              room.pivot.room_price,
              " ",
              useTrans("DA")
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { className: "p-2 ", children: room.features.slice(0, 4).map((feature) => /* @__PURE__ */ jsxs(
            Badge,
            {
              className: "m-0 w-autot",
              children: [
                feature.features_name,
                feature.need_value == true && ": " + feature.pivot.valeur
              ]
            },
            feature.feature_id
          )) }),
          /* @__PURE__ */ jsx(CardFooter, { className: "flex-col items-end p-2 pt-0", children: /* @__PURE__ */ jsxs(Dialog, { children: [
            /* @__PURE__ */ jsx(
              DialogTrigger,
              {
                className: buttonVariants({
                  variant: "link"
                }),
                children: useTrans("Voir Plus")
              }
            ),
            /* @__PURE__ */ jsxs(DialogContent, { className: "p-0 mb-10 max-h-screen", children: [
              /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { className: "p-0", children: /* @__PURE__ */ jsxs(Carousel, { children: [
                /* @__PURE__ */ jsx(CarouselContent, { children: room.assets.map(
                  (asset) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: asset.url,
                      alt: asset.name,
                      className: "w-full"
                    }
                  ) })
                ) }),
                /* @__PURE__ */ jsx(CarouselPrevious, {}),
                /* @__PURE__ */ jsx(CarouselNext, {})
              ] }) }) }),
              /* @__PURE__ */ jsxs(DialogDescription, { className: "p-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-bold text-foreground flex justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    useTrans("Chambre"),
                    " ",
                    room.type.type_designation,
                    " ",
                    useTrans("avec"),
                    " ",
                    room.beeds_number,
                    " ",
                    useTrans("lits")
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
                    " ",
                    room.pivot.room_price,
                    " ",
                    useTrans("DA")
                  ] })
                ] }),
                room.features.length > 0 && /* @__PURE__ */ jsxs("div", { className: "my-2 ", children: [
                  /* @__PURE__ */ jsx(Separator, {}),
                  /* @__PURE__ */ jsxs("div", { className: "font-bold text-foreground pb-2 flex justify-start", children: [
                    useTrans(
                      "Caractéristiques"
                    ),
                    " ",
                    ":"
                  ] }),
                  room.features.slice(0, 4).map((feature) => /* @__PURE__ */ jsxs(
                    Badge,
                    {
                      className: "m-0 w-autot",
                      children: [
                        feature.features_name,
                        feature.need_value == true && ": " + feature.pivot.valeur
                      ]
                    },
                    feature.feature_id
                  ))
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
                  /* @__PURE__ */ jsx(Separator, {}),
                  /* @__PURE__ */ jsx(
                    RichEditor,
                    {
                      className: "bg-transparent border-none max-h-[200px] overflow-auto",
                      autofocus: false,
                      editable: false,
                      content: room.room_descreption
                    }
                  )
                ] })
              ] })
            ] })
          ] }) })
        ] }, room.room_number)),
        booking.consomation.map((consomation) => /* @__PURE__ */ jsx(
          Card,
          {
            className: "w-full mb-2",
            children: /* @__PURE__ */ jsxs(CardHeader, { className: "p-2 font-bold flex flex-row items-center justify-between", children: [
              /* @__PURE__ */ jsx("div", { children: consomation.consumption_name }),
              /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
                consomation.pivot.quantity,
                " x",
                " ",
                consomation.consumption_price,
                " DA"
              ] })
            ] })
          },
          consomation.consumption_id
        ))
      ] })
    ] })
  ] });
}
const __vite_glob_0_46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MyBookings$1
}, Symbol.toStringTag, { value: "Module" }));
function DataTableColumnHeader({
  column,
  title,
  className
}) {
  if (!column.getCanSort()) {
    return /* @__PURE__ */ jsx("div", { className: cn(className), children: title });
  }
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center space-x-2", className), children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "ghost",
        size: "sm",
        className: "-ml-3 h-8 data-[state=open]:bg-accent",
        children: [
          /* @__PURE__ */ jsx("span", { children: title }),
          column.getIsSorted() === "desc" ? /* @__PURE__ */ jsx(ArrowDownIcon, { className: "ml-2 h-4 w-4" }) : column.getIsSorted() === "asc" ? /* @__PURE__ */ jsx(ArrowUpIcon, { className: "ml-2 h-4 w-4" }) : /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "start", children: [
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          onClick: () => column.toggleSorting(false),
          children: [
            /* @__PURE__ */ jsx(ArrowUpIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
            useTrans("Croissante")
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          onClick: () => column.toggleSorting(true),
          children: [
            /* @__PURE__ */ jsx(ArrowDownIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
            useTrans("Décroissante")
          ]
        }
      ),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          onClick: () => column.toggleVisibility(false),
          children: [
            /* @__PURE__ */ jsx(EyeNoneIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
            useTrans("Cacher")
          ]
        }
      )
    ] })
  ] }) });
}
const mybookingscolumns = [
  {
    accessorKey: "Ref",
    cell: ({ row }) => {
      const booking = row.original;
      return /* @__PURE__ */ jsx("div", { className: "font-bold text-base", children: booking.booking_id });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(DataTableColumnHeader, { column, title: useTrans("Ref") })
  },
  {
    accessorKey: "Chambre",
    cell: ({ row }) => {
      const booking = row.original;
      console.log(booking.rooms);
      return /* @__PURE__ */ jsxs("span", { children: [
        booking.rooms.length,
        " ",
        useTrans("chambre"),
        booking.rooms.length > 1 && "s",
        " "
      ] });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(
      DataTableColumnHeader,
      {
        column,
        title: useTrans("Chambres")
      }
    )
  },
  {
    accessorKey: "date d'entrée - date de sortie",
    cell: ({ row }) => {
      const booking = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        booking.check_in,
        " - ",
        booking.check_out,
        " "
      ] });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(
      DataTableColumnHeader,
      {
        column,
        title: useTrans("date d'entrée / sortie")
      }
    )
  },
  {
    accessorKey: "Date de réservation",
    cell: ({ row }) => {
      const booking = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        booking.created_at.split("T")[0],
        " "
      ] });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(
      DataTableColumnHeader,
      {
        column,
        title: useTrans("Date de réservation")
      }
    )
  },
  {
    accessorKey: "Status",
    cell: ({ row }) => {
      const booking = row.original;
      return booking.booking_status == "confirmer" ? /* @__PURE__ */ jsx(Badge, { variant: "success", children: booking.booking_status }) : booking.booking_status == "en attente" ? /* @__PURE__ */ jsx(Badge, { variant: "warning", children: booking.booking_status }) : /* @__PURE__ */ jsx(Badge, { variant: "danger", children: booking.booking_status });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(DataTableColumnHeader, { column, title: useTrans("Status") })
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const booking = row.original;
      const { width } = useWindowDimensions();
      const [open, setopen] = React__default.useState(false);
      const [isopen, setIsOpen] = React__default.useState(false);
      return /* @__PURE__ */ jsxs(
        DropdownMenu,
        {
          open: isopen ? true : open,
          onOpenChange: setopen,
          children: [
            /* @__PURE__ */ jsxs(
              DropdownMenuTrigger,
              {
                className: buttonVariants({
                  variant: "ghost",
                  size: "icon"
                }),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
                  /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
              /* @__PURE__ */ jsxs(
                DropdownMenuItem,
                {
                  onClick: () => router.get(
                    route(
                      "client.bookings.show",
                      booking.booking_id
                    )
                  ),
                  className: "cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      useTrans("Voir"),
                      " "
                    ] })
                  ]
                }
              ),
              booking.booking_status == "en attente" || booking.booking_status == "confirmer" ? /* @__PURE__ */ jsx(DropdownMenuItem, { className: "cursor-pointer flex bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", children: width >= 767 ? /* @__PURE__ */ jsxs(
                Dialog,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsx(DialogTrigger, { className: "w-full", children: useTrans("Annuler") }),
                    /* @__PURE__ */ jsxs(DialogContent, { children: [
                      /* @__PURE__ */ jsxs(DialogHeader, { children: [
                        /* @__PURE__ */ jsx(DialogTitle, { children: useTrans(
                          "Vous êtes sure?"
                        ) }),
                        /* @__PURE__ */ jsx(DialogDescription, { children: useTrans(
                          "Vous êtes sur que vous voulez annuler cette réservation"
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "destructive",
                            onClick: () => router.post(
                              route(
                                "client.bookings.cancel",
                                booking.booking_id
                              )
                            ),
                            children: useTrans("Oui")
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => {
                              setopen(false);
                              setIsOpen(false);
                            },
                            children: useTrans("Non")
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) : /* @__PURE__ */ jsxs(
                Drawer,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsx(DrawerTrigger, { className: "cursor-pointer flex", children: /* @__PURE__ */ jsx(Button, { variant: "destructive", children: "Annuler" }) }),
                    /* @__PURE__ */ jsxs(DrawerContent, { children: [
                      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
                        /* @__PURE__ */ jsx(DrawerTitle, { children: useTrans(
                          "Vous êtes sure?"
                        ) }),
                        /* @__PURE__ */ jsx(DrawerDescription, { children: useTrans(
                          "Vous êtes sur que vous voulez annuler cette réservation"
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "destructive",
                            onClick: () => router.post(
                              route(
                                "client.bookings.cancel",
                                booking.booking_id
                              )
                            ),
                            children: useTrans("Oui")
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => {
                              setopen(false);
                              setIsOpen(false);
                            },
                            children: useTrans("Non")
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) }) : null
            ] })
          ]
        }
      );
    }
  }
];
function MyBookings({ bookings }) {
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Mes Réservations" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[47rem] h-[47rem] left-[calc(40%-20rem)] top-[30rem] sm:translate-x-[10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx(
      PageHeading,
      {
        title: useTrans("Mes réservations"),
        className: "my-10 relative"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "bg-card p-4 rounded-lg my-4 relative", children: /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: mybookingscolumns,
        data: bookings.data,
        paginate: bookings,
        selection: false
      }
    ) })
  ] });
}
const __vite_glob_0_47 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MyBookings
}, Symbol.toStringTag, { value: "Module" }));
function FormBook() {
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
  const handleIncrementAdults = () => {
    setRooms(
      (prevRooms) => prevRooms.map((room) => ({ ...room, adults: room.adults + 1 }))
    );
  };
  const handleDecrementAdults = () => {
    setRooms(
      (prevRooms) => prevRooms.map(
        (room) => room.adults > 0 ? { ...room, adults: room.adults - 1 } : room
      )
    );
  };
  const handleIncrementChildren = () => {
    setRooms(
      (prevRooms) => prevRooms.map((room) => ({ ...room, children: room.children + 1 }))
    );
  };
  const handleDecrementChildren = () => {
    setRooms(
      (prevRooms) => prevRooms.map(
        (room) => room.children > 0 ? { ...room, children: room.children - 1 } : room
      )
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      arrivalDate,
      departureDate,
      rooms
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "absolute bottom-16 left-28   backdrop-blur-sm bg-white/70   w-5/6 p-4  mx-auto text-lg rounded-lg  b", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-secondary text-4xl flex justify-center  py-4 font-serif italic mb-4", children: "Reserver maintente" }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: " flex flex-row  items-start  text-secondary p-2",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 mr-6 w-auto text-xxl ", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "arrivalDate", className: "block  font-medium", children: "Date D'arriver" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                id: "arrivalDate",
                value: arrivalDate,
                onChange: (e) => setArrivalDate(e.target.value),
                className: "mt-1 block w-full border border-gray-300 rounded-md",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 w-auto", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "departureDate",
                className: "block  font-medium  ",
                children: "Date De Departe"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                id: "departureDate",
                value: departureDate,
                onChange: (e) => setDepartureDate(e.target.value),
                className: "mt-1 block w-full border border-gray-300 rounded-md",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 ", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center flex-row justify-around ", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-col", children: [
              /* @__PURE__ */ jsx("label", { className: "", children: "Adult(s):" }),
              /* @__PURE__ */ jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleDecrementAdults,
                    className: "px-2 py-1  rounded-l",
                    children: "-"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: rooms[0].adults,
                    readOnly: true,
                    className: "w-12 text-center border border-gray-300"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleIncrementAdults,
                    className: "px-2 py-1  rounded-r",
                    children: "+"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flix-col", children: [
              /* @__PURE__ */ jsx("label", { className: "", children: "enfant(s):" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleDecrementChildren,
                    className: "px-2 py-1  rounded-l",
                    children: "-"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: rooms[0].children,
                    readOnly: true,
                    className: "w-12 text-center border border-gray-300"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleIncrementChildren,
                    className: "px-2 py-1  rounded-r",
                    children: "+"
                  }
                )
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 min-w-[200px]", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-48 bg-blue-500 text-white py-2  rounded mt-6",
              children: "chercher"
            }
          ) })
        ]
      }
    )
  ] });
}
const __vite_glob_0_51 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FormBook
}, Symbol.toStringTag, { value: "Module" }));
function AutoCarousel() {
  const carouselItems = [
    "https://scontent.forn2-1.fna.fbcdn.net/v/t39.30808-6/428611218_371702122462614_5065970390852309285_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGOnZKDwnVsoLUz7RbZzLNeVL8bcF0GllRUvxtwXQaWVFzvmY0gUy6F-i3PMMtINvVk1FfxuDEc3MBEUs_MF6Mb&_nc_ohc=Q_tripheACwQ7kNvgEYQgd4&_nc_zt=23&_nc_ht=scontent.forn2-1.fna&cb_e2o_trans=t&oh=00_AYB1NT2pGZSvaIu-xpPnvW9_XEpaCXlEPUUr3Km8gSSFCw&oe=66D02866",
    "https://scontent.forn2-1.fna.fbcdn.net/v/t39.30808-6/428603936_371702929129200_1184689777793078171_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHiAAqVe0aAEcUTslDNDdGtJAe-kvu90K0kB76S-73QrIcFe_6AE6c-AAUwmLsh7SfUsaDxlFQgxb-Dxy9MvCr&_nc_ohc=DY79bysyhJAQ7kNvgGpzgem&_nc_zt=23&_nc_ht=scontent.forn2-1.fna&cb_e2o_trans=t&oh=00_AYC8myNxY1jW5RiSTy_yZ7s7RKj5lx5ICTlAixi5TxWnjQ&oe=66D01039",
    "https://scontent.forn2-1.fna.fbcdn.net/v/t39.30808-6/428603936_371702929129200_1184689777793078171_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHiAAqVe0aAEcUTslDNDdGtJAe-kvu90K0kB76S-73QrIcFe_6AE6c-AAUwmLsh7SfUsaDxlFQgxb-Dxy9MvCr&_nc_ohc=DY79bysyhJAQ7kNvgGpzgem&_nc_zt=23&_nc_ht=scontent.forn2-1.fna&cb_e2o_trans=t&oh=00_AYC8myNxY1jW5RiSTy_yZ7s7RKj5lx5ICTlAixi5TxWnjQ&oe=66D01039"
  ];
  return /* @__PURE__ */ jsx("div", { className: "relative h-dvh lg:-mx-28", children: /* @__PURE__ */ jsxs(Carousel, { className: "h-min ", children: [
    /* @__PURE__ */ jsx(CarouselContent, { children: carouselItems.map((asset, index) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
      "img",
      {
        src: asset,
        alt: `Selected ${index}`,
        className: "rounded-md w-full h-dvh object-cover aspect-video"
      }
    ) }, index)) }),
    /* @__PURE__ */ jsx(CarouselPrevious, { className: "bg-secondary left-0 text-secondary-foreground" }),
    /* @__PURE__ */ jsx(CarouselNext, { className: "bg-secondary right-0 text-secondary-foreground" })
  ] }) });
}
const __vite_glob_0_48 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AutoCarousel
}, Symbol.toStringTag, { value: "Module" }));
const Mimg = "/build/assets/map--GxbgbOc.png";
function ContactSection() {
  return /* @__PURE__ */ jsx("div", { className: "text-black py-16 px-6 md:px-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-center mb-12", children: "Contacter Nous" }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-4", children: "Contact Information" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsx(FaMapMarkerAlt, { className: "text-2xl mr-4" }),
            /* @__PURE__ */ jsx("span", { children: "Hotel sidi el noui cheraga ,alger,algerie" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsx(FaPhone, { className: "text-2xl mr-4" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+2130772444444", children: "+213 23 34 45 56" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsx(FaEnvelope, { className: "text-2xl mr-4" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:sidielnoui@gmail.com", children: "sidielnoui@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "w-full h-auto rounded-lg shadow-lg",
            children: [
              " ",
              /* @__PURE__ */ jsx("a", { href: "https://maps.app.goo.gl/Ac5ueppFgW4HCXvG7", target: "blank", children: /* @__PURE__ */ jsx("img", { src: Mimg, alt: "google maps" }) })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-4", children: "envoyer nous un message" }),
        /* @__PURE__ */ jsxs("form", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "nom",
                className: "w-full p-3 rounded-md bg-white text-gray-900"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Email",
                className: "w-full p-3 rounded-md bg-white text-gray-900"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "sujet",
              className: "w-full p-3 rounded-md bg-white text-gray-900"
            }
          ),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              placeholder: "Message",
              rows: "5",
              className: "w-full p-3 rounded-md bg-white text-gray-900"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-full py-3 bg-blue-600 rounded-md text-lg font-semibold hover:bg-blue-900 transition duration-300 text-white",
              children: "Envoyer Message"
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}
const __vite_glob_0_49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContactSection
}, Symbol.toStringTag, { value: "Module" }));
function Event() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const events = [
    {
      id: 1,
      name: "Notre anniversiare hotel ",
      price: "4000DA",
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1c/87/e9/c0/it-has-been-2-years-of.jpg",
      detailsLink: "#",
      description: "isjnclvabkvbnlshdbfanisubhvush ljsc vlkhaslhdkvakhscv bfvkuasbdfjaw vasvg asjdbakusbcausdvc awsgvajsbduckbsadvcasdgvkasdusd asudybuaysbcuasydv qweuasdbilawefcsdciaiwdhbqwiehfvssa dcisahcbawgfevwidsuc wefhsadouyerwef cbsbdyuwerbwyebdycsdy"
    }
    // Add more events as needed
  ];
  const openModal = (event) => {
    setCurrentEvent(event);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentEvent(null);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto py-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "  text-5xl font-bold italic my-8 text-center text-primary font-serif mb-16", children: "Nos Evenments" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-1 gap-8", children: events.map((event) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative h-96 w-full bg-cover bg-center rounded-lg shadow-lg",
          style: {
            backgroundImage: `url(${event.imageUrl})`
          },
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black bg-opacity-40 rounded-lg" }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 text-secondary bg-primary p-4 rounded-md", children: /* @__PURE__ */ jsx("h3", { className: "text-3xl font-semibold ", children: event.price }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 text-secondary  bg-primary p-2 rounded-md", children: /* @__PURE__ */ jsx("h3", { className: "text-3xl font-semibold", children: event.name }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 right-4 text-white text-xl", children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                onClick: () => openModal(event),
                className: "inline text-lg mt-2 underline mx-3",
                children: "Details"
              }
            ) })
          ]
        },
        event.id
      )) })
    ] }),
    isModalOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        onClick: closeModal,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-secondary p-6 rounded-lg mw-auto mx-auto shadow-lg",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary mb-4", children: currentEvent.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-primary mb-4", children: currentEvent.description }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: closeModal,
                  className: "bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-700",
                  children: "ferme"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
const __vite_glob_0_50 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Event
}, Symbol.toStringTag, { value: "Module" }));
function ReservationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    arrivalDate: "",
    departureDate: "",
    numberOfPersons: 1,
    roomType: "Single Room"
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return /* @__PURE__ */ jsxs("div", { className: "  w-5/6 mx-auto bg-gray-200 p-8 mt-8 rounded-lg shadow-lg", children: [
    /* @__PURE__ */ jsx("h1", { className: " sm:text-5xl text-2xl font-bold text-center text-secondary mb-8", children: "Réservation" }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "space-y-6 w-auto ",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "firstName",
                className: "block text-lg font-medium text-gray-700",
                children: "nom"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "firstName",
                name: "firstName",
                value: formData.firstName,
                onChange: handleChange,
                required: true,
                className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "lastName",
                className: "block text-lg font-medium text-gray-700",
                children: "prenom"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "lastName",
                name: "lastName",
                value: formData.lastName,
                onChange: handleChange,
                required: true,
                className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "email",
                className: "block text-lg font-medium text-gray-700",
                children: "Email"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                value: formData.email,
                onChange: handleChange,
                required: true,
                className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "phoneNumber",
                className: "block text-lg font-medium text-gray-700",
                children: "Numéro de Téléphone"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                id: "phoneNumber",
                name: "phoneNumber",
                value: formData.phoneNumber,
                onChange: handleChange,
                required: true,
                className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "arrivalDate",
                className: "block text-lg font-medium text-gray-700",
                children: "Date d'arrivée"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                id: "arrivalDate",
                name: "arrivalDate",
                value: formData.arrivalDate,
                onChange: handleChange,
                required: true,
                className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "departureDate",
                className: "block text-lg font-medium text-gray-700",
                children: "Date de Départ"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                id: "departureDate",
                name: "departureDate",
                value: formData.departureDate,
                onChange: handleChange,
                required: true,
                className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "roomType",
                className: "block text-lg font-medium text-gray-700",
                children: "Type de Chambre"
              }
            ),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "roomType",
                name: "roomType",
                value: formData.roomType,
                onChange: handleChange,
                required: true,
                className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary",
                children: [
                  /* @__PURE__ */ jsx("option", { children: "Single Room" }),
                  /* @__PURE__ */ jsx("option", { children: "Double Room" }),
                  /* @__PURE__ */ jsx("option", { children: "Triple Room" }),
                  /* @__PURE__ */ jsx("option", { children: "Suite" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "numberOfPersons",
                className: "block text-lg font-medium text-gray-700",
                children: "Nombre de Personnes"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                id: "numberOfPersons",
                name: "numberOfPersons",
                value: formData.numberOfPersons,
                onChange: handleChange,
                required: true,
                min: "1",
                className: "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-full py-3 bg-secondary text-white font-semibold rounded-lg shadow-lg hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50",
              children: "Réserver"
            }
          ) })
        ]
      }
    )
  ] });
}
const __vite_glob_0_52 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ReservationForm
}, Symbol.toStringTag, { value: "Module" }));
function RoomCard$1() {
  const rooms = [
    {
      id: 1,
      name: "Chambre Single",
      imageUrl: "https://www.hotelsbarriere.com/content/dam/hotels/visuels-site-national/suites/0121-47%281%29.jpg/jcr%3Acontent/renditions/cq5dam.web.1280.1280.jpeg",
      features: ["tv", "bed"],
      description: "Une chambre magnifique pour une seule personne avec un lit confortable et tous les services."
    },
    {
      id: 2,
      name: "Chambre Standard",
      imageUrl: "https://static-otelico.com/cache/regina_berck/hotel_regina-berck_sur_mer-chambre_premium_1.jpg",
      features: ["wifi", "bed", "tv"],
      description: "Une chambre confortable avec des équipements essentiels."
    },
    {
      id: 3,
      name: "Chambre Standard",
      imageUrl: "https://static-otelico.com/cache/regina_berck/hotel_regina-berck_sur_mer-chambre_premium_1.jpg",
      features: ["wifi", "bed"],
      description: "Une chambre confortable avec des équipements essentiels."
    },
    {
      id: 4,
      name: "Chambre Standard",
      imageUrl: "https://static-otelico.com/cache/regina_berck/hotel_regina-berck_sur_mer-chambre_premium_1.jpg",
      features: ["wifi", "bed"],
      description: "Une chambre confortable avec des équipements essentiels."
    }
  ];
  const handleClick = (roomId) => {
  };
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-8  justify-between", children: rooms.map((room) => /* @__PURE__ */ jsxs(
    "div",
    {
      onClick: () => handleClick(room.id),
      className: "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-md overflow-hidden relative cursor-pointer",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-full h-48 object-cover",
            src: room.imageUrl,
            alt: room.name
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-6 pb-16", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-2", children: room.name }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-base", children: room.description })
        ] }),
        /* @__PURE__ */ jsx(Button, { className: "absolute bottom-4 right-12 transform translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700", children: "Réserver" })
      ]
    },
    room.id
  )) });
}
const __vite_glob_0_53 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RoomCard$1
}, Symbol.toStringTag, { value: "Module" }));
function RoomDetail({ room }) {
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto p-8", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-full h-96 object-cover rounded-lg shadow-md",
        src: room.imageUrl,
        alt: room.name
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap space-x-4 my-6", children: room.sliderImages.map((image, index) => /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-24 h-24 object-cover rounded-md shadow-sm",
        src: image,
        alt: `Slider ${index + 1}`
      },
      index
    )) }),
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-semibold mb-4", children: room.name }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
      room.features.includes("wifi") && /* @__PURE__ */ jsx(FaWifi, { className: "text-gray-600" }),
      room.features.includes("tv") && /* @__PURE__ */ jsx(FaTv, { className: "text-gray-600" }),
      room.features.includes("bed") && /* @__PURE__ */ jsx(FaBed, { className: "text-gray-600" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-lg mb-4", children: room.description }),
    /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold mb-4", children: `Price: ${room.price} €` }),
    /* @__PURE__ */ jsx(Button, { className: "bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700", children: "Reserver" })
  ] });
}
const __vite_glob_0_54 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RoomDetail
}, Symbol.toStringTag, { value: "Module" }));
function ServicesPage() {
  const hotelServices = [
    {
      id: 1,
      name: "Cafétéria",
      description: "Profitez d'une large sélection de cafés et de pâtisseries dans notre cafétéria confortable.",
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/18/06/3e/ac/ambiance-vintage-dans.jpg",
      icon: /* @__PURE__ */ jsx(Coffee, {})
    },
    {
      id: 2,
      name: "Restaurant",
      description: "Découvrez une cuisine gastronomique avec une variété de plats du monde entier.",
      imageUrl: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg",
      icon: /* @__PURE__ */ jsx(Utensils, {})
    }
  ];
  const roomServices = [
    { name: "WiFi Gratuit", icon: /* @__PURE__ */ jsx(Wifi, {}) },
    { name: "Télévision     ", icon: /* @__PURE__ */ jsx(Tv, {}) },
    { name: "Lits Confortables", icon: /* @__PURE__ */ jsx(Bed, {}) },
    { name: "Salle de Bain ", icon: /* @__PURE__ */ jsx(Bath, {}) },
    { name: "Coin Salon", icon: /* @__PURE__ */ jsx(Armchair, {}) },
    { name: " petit dejunie ", icon: /* @__PURE__ */ jsx(Coffee, {}) },
    { name: "chambre fumable", icon: /* @__PURE__ */ jsx(Cigarette, {}) }
    // Add more services as needed
  ];
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-center mb-12 text-primary italic font-serif  mb-28", children: "Nos Services" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-12 mb-16  ", children: hotelServices.map((service) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col md:flex-row items-center",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: service.imageUrl,
              alt: service.name,
              className: "w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "md:ml-8 mt-4 md:mt-0", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-semibold mb-16", children: service.name }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 mt-4", children: service.description })
          ] })
        ]
      },
      service.id
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-300 pt-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold text-center mb-8", children: "Services De Chambre" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center space-x-6 text-blue-500", children: roomServices.map((service, index) => /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "ml-8",
            children: service.icon
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-500", children: service.name })
      ] }, index)) })
    ] })
  ] });
}
const __vite_glob_0_55 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServicesPage
}, Symbol.toStringTag, { value: "Module" }));
function Show$2({ event }) {
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] left-[calc(30%-28.5rem)] top-[0] translate-x-[-10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[20rem] bottom-[5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx(PageHeading, { title: event.event_name, className: "my-10 relative" }),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg my-4 relative", children: /* @__PURE__ */ jsxs(Carousel, { children: [
      /* @__PURE__ */ jsx(CarouselContent, { children: event.assets.map((asset) => /* @__PURE__ */ jsx(
        CarouselItem,
        {
          className: "md:basis-1/2 lg:basis-1/3",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: asset.url,
              alt: asset.name,
              className: "rounded-md aspect-video object-cover w-full transition-transform duration-300 hover:scale-95"
            }
          )
        },
        asset.id
      )) }),
      /* @__PURE__ */ jsx(CarouselPrevious, {}),
      /* @__PURE__ */ jsx(CarouselNext, {})
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg my-4 relative bg-card ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between itmes-center font-bold", children: [
        event.event_start_date == event.event_end_date ? /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          useTrans("Le"),
          " :",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: event.event_start_date })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 justify-around mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            useTrans("De"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: event.event_start_date })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            useTrans("Jusqu'a"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: event.event_end_date })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
          event.event_price,
          " DA"
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        RichEditor,
        {
          className: "bg-transparent border-none",
          autofocus: false,
          editable: false,
          content: event.event_descreption
        }
      )
    ] })
  ] });
}
const __vite_glob_0_56 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$2
}, Symbol.toStringTag, { value: "Module" }));
function Promotion({ promotion }) {
  return /* @__PURE__ */ jsxs(Card, { className: "relative my-6 p-4 md:flex md:flex-row flex-col bg-transparent border-none shadow-none ", children: [
    /* @__PURE__ */ jsx("div", { className: "md:w-1/2 w-full  ", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: promotion.assets[0].url,
        className: "object-cover w-full rounded-xl relative z-10 aspect-video hover:corsur-pointer shadow-xl transition-transform duration-300 hover:scale-105 "
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between md:w-1/2 w-full ", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "text-lg font-bold text-xl flex flex-row items-center justify-end", children: /* @__PURE__ */ jsxs("div", { className: "text-primary text-2xl ", children: [
        useTrans("Réduction de"),
        " ",
        promotion.promo_value,
        " ",
        useTrans("DA"),
        " "
      ] }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "text-muted-foreground", children: [
        promotion.promo_start_date == promotion.promo_end_date ? /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          useTrans("Le"),
          " :",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: promotion.promo_start_date })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2 justify-around mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            useTrans("De"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: promotion.promo_start_date })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            useTrans("Jusqu'a"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: promotion.promo_end_date })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          RichEditor,
          {
            className: "bg-transparent border-none ",
            autofocus: false,
            editable: false,
            content: promotion.promo_descreption,
            length: 200
          }
        )
      ] }),
      /* @__PURE__ */ jsx(CardFooter, { className: "justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "sm",
          onClick: () => router.get(
            route(
              "client.promotion.show",
              promotion.promotion_id
            )
          ),
          children: useTrans("Voir Plus")
        }
      ) })
    ] })
  ] });
}
function Events({ event }) {
  return /* @__PURE__ */ jsxs(Card, { className: "relative my-6 p-4 sm:flex sm:flex-row-reverse flex-col-reverse bg-transparent border-none shadow-none ", children: [
    /* @__PURE__ */ jsx("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: event.assets[0].url,
        alt: `Selected ${event.assets[0].id}`,
        className: "object-cover w-full rounded-xl relative z-10 aspect-video hover:corsur-pointer shadow-xl transition-transform duration-300 hover:scale-105 "
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between sm:w-1/2 w-full", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "text-lg font-bold text-xl flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { children: event.event_name }),
        /* @__PURE__ */ jsxs("div", { className: "text-primary text-2xl font-bold", children: [
          event.event_price,
          " ",
          useTrans("DA"),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "text-muted-foreground flex-grow", children: [
        event.event_start_date == event.event_end_date ? /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          useTrans("Le"),
          " :",
          " ",
          /* @__PURE__ */ jsx("span", { className: " text-lg", children: event.event_start_date })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2 justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            useTrans("De"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: event.event_start_date })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            useTrans("Jusqu'a"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: event.event_end_date })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          RichEditor,
          {
            className: "bg-transparent border-none ",
            autofocus: false,
            editable: false,
            content: event.event_descreption,
            length: 200
          }
        )
      ] }),
      /* @__PURE__ */ jsx(CardFooter, { className: "justify-start z-[1]", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "sm",
          onClick: () => router.get(
            route("client.event.show", event.event_id)
          ),
          children: useTrans("Voir Plus")
        }
      ) })
    ] })
  ] });
}
function RoomCard({ room }) {
  var _a, _b;
  return /* @__PURE__ */ jsxs(Card, { className: "relative my-6 p-4 w-full sm:flex sm:flex-row flex-col bg-transparent border-none shadow-none", children: [
    /* @__PURE__ */ jsx("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: (_a = room.assets[0]) == null ? void 0 : _a.url,
        alt: `Selected ${(_b = room.assets[0]) == null ? void 0 : _b.name}`,
        className: "object-cover w-full rounded-xl relative z-10 aspect-video hover:corsur-pointer shadow-xl transition-transform duration-300 hover:scale-105 "
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between sm:w-1/2 w-full", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold text-xl uppercase", children: room.type_designation }),
        /* @__PURE__ */ jsxs("div", { className: "text-primary text-3xl font-bold ", children: [
          room.room_price,
          " ",
          useTrans("DA"),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
          useTrans("Caractéristique de la chambre"),
          " :"
        ] }),
        /* @__PURE__ */ jsx(CardDescription, { className: "flex gap-2 flex-wrap", children: room.features.map((feature) => /* @__PURE__ */ jsxs(
          Badge,
          {
            className: "m-0 w-autot",
            children: [
              feature.features_name,
              feature.need_value == true && ": " + feature.pivot.valeur
            ]
          },
          feature.feature_id
        )) })
      ] }),
      /* @__PURE__ */ jsx(CardFooter, { className: "justify-end", children: /* @__PURE__ */ jsx("a", { href: "#booking-form", children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", children: [
        useTrans("Réserver maintenant"),
        " "
      ] }) }) })
    ] })
  ] });
}
function Rooms({ rooms }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative flex flex-col justify-center items-center min-h-screen max-h-sceen",
      id: "rooms-section",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] right-[0] bottom-[10%] lg:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.4)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
        /* @__PURE__ */ jsx("div", { className: "font-bold border-b mb-4 w-3/5 mx-auto p-4 text-4xl flex justify-center ", children: useTrans("Nos Chambres") }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground p-6 sm:w-2/3  text-center", children: useTrans(
          "Découvrez nos chambres spacieuses et décorées avec, offrant tout le confort moderne pour un séjour des plus agréables. Que vous voyagiez seul, en couple ou en famille, nous avons la chambre parfaite pour vous."
        ) }) }),
        /* @__PURE__ */ jsxs(
          Tabs,
          {
            defaultValue: rooms[0].room_number,
            className: "w-full flex flex-col",
            children: [
              /* @__PURE__ */ jsxs(ScrollArea, { className: "w-full ", children: [
                /* @__PURE__ */ jsx(TabsList, { className: "flex justify-center bg-transparent h-fit", children: rooms.map((room) => /* @__PURE__ */ jsxs(
                  TabsTrigger,
                  {
                    value: room.room_number,
                    className: "flex-col w-fit text-foreground items-start border border-input bg-background px-6 mx-4 rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-muted data-[state=active]:text-primary data-[state=active]:border-primary",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "font-bold uppercase ", children: room.type_designation }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
                        room.rooms_count,
                        " Chambre"
                      ] })
                    ]
                  },
                  room.room_number
                )) }),
                /* @__PURE__ */ jsx(ScrollBar, { orientation: "horizontal" })
              ] }),
              rooms.map((room) => /* @__PURE__ */ jsxs(
                TabsContent,
                {
                  value: room.room_number,
                  children: [
                    /* @__PURE__ */ jsx(RoomCard, { room }),
                    " "
                  ]
                },
                room.room_number
              ))
            ]
          }
        )
      ]
    }
  );
}
function ServiceCard({ service }) {
  var _a, _b;
  return /* @__PURE__ */ jsxs(Card, { className: "relative my-6 p-4 sm:flex sm:flex-row-reverse flex-col-reverse bg-transparent border-none shadow-none", children: [
    /* @__PURE__ */ jsx("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: (_a = service.assets[0]) == null ? void 0 : _a.url,
        alt: `${(_b = service.assets[0]) == null ? void 0 : _b.name}`,
        className: "object-cover w-full min-h-fit rounded-xl relative z-10 aspect-video hover:corsur-pointer shadow-xl transition-transform duration-300 hover:scale-105 "
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between sm:w-1/2 w-full", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "flex-row items-center justify-start", children: /* @__PURE__ */ jsx("div", { className: "font-bold text-xl uppercase", children: service.service_name }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "flex gap-2 flex-wrap", children: /* @__PURE__ */ jsx(
        RichEditor,
        {
          className: "bg-transparent border-none",
          classNames: {
            content: "text-ellipsis overflow-hidden ... "
          },
          autofocus: false,
          editable: false,
          content: service.service_descreption,
          length: 200
        }
      ) }) }),
      /* @__PURE__ */ jsx(CardFooter, { className: "justify-start", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "sm",
          onClick: () => router.get(
            route("client.service.show", service.service_id)
          ),
          children: useTrans("Voir Plus")
        }
      ) })
    ] })
  ] });
}
function Services({ services }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative flex flex-col justify-center items-center min-h-screen max-h-sceen",
      id: "services-section",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] left-[calc(50%-28.5rem)] bottom-[-10%] translate-x-[-10%] translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.4)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
        /* @__PURE__ */ jsx("div", { className: "font-bold border-b mb-4 w-3/5 mx-auto p-4 text-4xl flex justify-center ", children: useTrans("Services") }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground p-6 sm:w-2/3  text-center", children: useTrans(
          "Nous offrons une gamme de services conçus pour rendre votre séjour aussi agréable que possible. Que vous souhaitiez vous détendre, savourer de délicieux repas, ou profiter de commodités supplémentaires, nous sommes là pour répondre à tous vos besoins."
        ) }) }),
        /* @__PURE__ */ jsxs(
          Tabs,
          {
            defaultValue: services[0].service_id,
            className: "w-full flex flex-col",
            children: [
              /* @__PURE__ */ jsxs(ScrollArea, { className: "w-full ", children: [
                /* @__PURE__ */ jsx(TabsList, { className: "flex justify-center bg-transparent h-fit", children: services.map((service) => /* @__PURE__ */ jsx(
                  TabsTrigger,
                  {
                    value: service.service_id,
                    className: "flex-col uppercase font-bold w-fit text-foreground items-start border border-input bg-background px-6 mx-4 rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-muted data-[state=active]:text-primary data-[state=active]:border-primary",
                    children: service.service_name
                  },
                  service.service_id
                )) }),
                /* @__PURE__ */ jsx(ScrollBar, { orientation: "horizontal" })
              ] }),
              services.map((service) => /* @__PURE__ */ jsx(
                TabsContent,
                {
                  value: service.service_id,
                  children: /* @__PURE__ */ jsx(ServiceCard, { service })
                },
                service.service_id
              ))
            ]
          }
        )
      ]
    }
  );
}
function BookingForm({ id }) {
  const { data, setData: setData2, get, processing } = useForm({
    check_in: "",
    check_out: "",
    guest_number: 0,
    kids_number: 0
  });
  const [dateRange, setDateRange] = useState({
    from: "",
    to: ""
  });
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const handleDateChange = (range) => {
    if (range == null ? void 0 : range.from) {
      const formattedDate = formatDate(range.from);
      setData2("check_in", formattedDate);
    }
    if (range == null ? void 0 : range.to) {
      const formattedDate = formatDate(range.to);
      setData2("check_out", formattedDate);
    }
    setDateRange(range);
  };
  const incriment = (value) => {
    if (value == "guest_number") {
      setData2("guest_number", data.guest_number + 1);
    } else {
      setData2("kids_number", data.kids_number + 1);
    }
  };
  const dicriment = (value) => {
    if (value == "guest_number") {
      if (data.guest_number > 0) {
        setData2("guest_number", data.guest_number - 1);
      }
    } else {
      if (data.kids_number > 0) {
        setData2("kids_number", data.kids_number - 1);
      }
    }
  };
  const submit = (e) => {
    e.preventDefault();
    get(route("client.booking.search"));
  };
  return /* @__PURE__ */ jsx("div", { className: "relative z-[10] md:px-4 pb-6", children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: submit,
      className: "flex items-center md:items-end justify-between gap-2 flex-col md:flex-row",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "w-2/3 md:w-1/4", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              value: useTrans("dates"),
              htmlFor: "dates",
              className: "mb-3"
            }
          ),
          /* @__PURE__ */ jsx(
            DatePickerWithRange,
            {
              date: dateRange,
              onDateChange: handleDateChange,
              min: 2
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-2/3 md:w-1/4", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "guest_number",
              value: useTrans("Nombre des personne"),
              className: "mb-3"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border rounded-md p-1 bg-muted", children: [
            /* @__PURE__ */ jsx(
              CircleMinus,
              {
                onClick: () => dicriment("guest_number"),
                className: "cursor-pointer hover:text-secondary"
              }
            ),
            /* @__PURE__ */ jsxs("span", { children: [
              data.guest_number,
              " "
            ] }),
            /* @__PURE__ */ jsx(
              CirclePlus,
              {
                onClick: () => incriment("guest_number"),
                className: "cursor-pointer hover:text-secondary"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-2/3 md:w-1/4", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "kids_number",
              value: useTrans("nombre des bébé"),
              className: "mb-3"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border rounded-md p-1 bg-muted", children: [
            /* @__PURE__ */ jsx(
              CircleMinus,
              {
                onClick: () => dicriment("kids_number"),
                className: "cursor-pointer hover:text-secondary"
              }
            ),
            /* @__PURE__ */ jsxs("span", { children: [
              data.kids_number,
              " "
            ] }),
            /* @__PURE__ */ jsx(
              CirclePlus,
              {
                onClick: () => incriment("kids_number"),
                className: "cursor-pointer hover:text-secondary"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            size: "sm",
            className: "md:w-1/12 sm:w-1/6 w-1/4",
            children: processing ? /* @__PURE__ */ jsx(LoaderCircle, { className: "animate-spin" }) : useTrans("Rechercher")
          }
        )
      ]
    }
  ) });
}
function HomeHeading({ id }) {
  const { width } = useWindowDimensions();
  return /* @__PURE__ */ jsxs("div", { id, children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-full z-10 p-4 flex md:flex-row flex-col justify-around", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center md:w-1/2 w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-1.5 p-6", children: /* @__PURE__ */ jsx("div", { className: "font-bold text-5xl py-4", children: useTrans("Sidi El Noui") }) }),
        /* @__PURE__ */ jsx("div", { className: "text-muted-foreground p-6 pt-0", children: /* @__PURE__ */ jsx("div", { children: useTrans(
          "Bienvenue à SIDI EL NOUI - Votre refuge luxueux au cœur de Chéraga Découvrez un confort inégalé et une élégance raffinée en plein centre d'Alger. Notre hôtel offre des vues à couper le souffle, des équipements haut de gamme, et un service exceptionnel pour rendre votre séjour inoubliable."
        ) }) })
      ] }),
      width <= 767 && /* @__PURE__ */ jsx(BookingForm, {}),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center  ", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "http://localhost:8000/storage/sidi-el-noui-logo-removebg.png",
          className: "object-content w-1/3 md:w-2/3 rounded-xl relative z-10  hover:corsur-pointer  transition-transform duration-300 hover:scale-105 "
        }
      ) })
    ] }),
    width > 767 && /* @__PURE__ */ jsx(BookingForm, {})
  ] });
}
function Contact() {
  const user = usePage().props.auth.user;
  const { data, setData: setData2, errors, post, reset, processing, clearErrors } = useForm({
    client_email: user ? user.email : "",
    subject: "",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("client.contact.store"), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        reset("client_email", "message", "subject");
      }
    });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative flex flex-col justify-center items-center min-h-screen max-h-sceen",
      id: "contact-section",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] right-[0] bottom-[10%] lg:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.4)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
        /* @__PURE__ */ jsx("div", { className: "font-bold border-b mb-4 w-3/5 mx-auto p-4 text-4xl flex justify-center ", children: useTrans("contactez-nous") }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "relative w-full px-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 flex-col-reverse sm:flex-row", children: [
            /* @__PURE__ */ jsxs("div", { className: "sm:w-1/3 w-2/3", children: [
              /* @__PURE__ */ jsxs("div", { className: "my-4 flex flex-col gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    value: useTrans("Email"),
                    htmlFor: "client_email"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "email",
                    id: "client_email",
                    name: "client_email",
                    placeholder: useTrans("Email"),
                    value: data.client_email,
                    disabled: user,
                    onChange: (e) => {
                      setData2("client_email", e.target.value);
                      clearErrors("client_email");
                    },
                    className: "bg-card "
                  }
                ),
                /* @__PURE__ */ jsx(InputError, { message: errors.client_email })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "my-4 flex flex-col gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    value: useTrans("Sujet"),
                    htmlFor: "subject"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    id: "subject",
                    name: "subject",
                    placeholder: useTrans("Sujet"),
                    value: data.subject,
                    onChange: (e) => {
                      setData2("subject", e.target.value);
                      clearErrors("subject");
                    },
                    className: "bg-card "
                  }
                ),
                /* @__PURE__ */ jsx(InputError, { message: errors.subject })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "sm:w-2/3 my-8 text-muted-foreground ", children: useTrans(
              "Vous pouvez nous envoyer un message via ce formulaire de contact. Nous ferons de notre mieux pour répondre à toutes vos questions dans les plus brefs délais."
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "my-4 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx(InputLabel, { value: useTrans("Message"), htmlFor: "message" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "message",
                name: "message",
                placeholder: useTrans("Message"),
                value: data.message,
                onChange: (e) => {
                  setData2("message", e.target.value);
                  clearErrors("message");
                },
                className: "bg-card h-40"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.message })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", className: "w-1/6", children: processing ? /* @__PURE__ */ jsx(LoaderCircle, { className: "animate-spin" }) : useTrans("Envoyé") }) })
        ] })
      ]
    }
  );
}
function Home({ events, promotions, rooms, services }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative md:h-[600px] h-dvh flex items-center justify-center ",
        id: "home-section",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] right-[0] bottom-[10%] lg:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.6)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
          /* @__PURE__ */ jsx(HomeHeading, { id: "booking-form" })
        ]
      }
    ),
    promotions && /* @__PURE__ */ jsxs("div", { className: "my-6 relative min-h-screen max-h-sceen", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] left-[calc(50%-28.5rem)] bottom-[0] translate-x-[-10%] translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.2)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
      /* @__PURE__ */ jsx("div", { className: "font-bold border-b w-3/5 mx-auto p-4 text-4xl flex justify-center ", children: useTrans("Promotions") }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground p-6 sm:w-2/3  text-center", children: useTrans(
        "Offres Exclusives pour un Séjour Inoubliable Profitez de nos promotions exceptionnelles et réservez votre séjour à un prix avantageux. Découvrez nos offres spéciales et bénéficiez de réductions sur les chambres, les forfaits bien-être, et bien plus encore."
      ) }) }),
      /* @__PURE__ */ jsx(Promotion, { promotion: promotions })
    ] }),
    events && /* @__PURE__ */ jsxs("div", { className: "my-6 relative min-h-screen max-h-sceen", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] left-[calc(50%-28.5rem)] bottom-[0] translate-x-[-10%] translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.5)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
      /* @__PURE__ */ jsx("div", { className: "font-bold border-b w-3/5 mx-auto p-4 text-4xl flex justify-center ", children: useTrans("Evènements") }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground p-6 sm:w-2/3  text-center", children: useTrans(
        "Des Événements Inoubliables au Cœur d'Alger, Vivez des moments uniques en participant à nos événements exclusifs. Que ce soit pour des soirées thématiques, des concerts, ou des festivals locaux, notre hôtel est le point de départ idéal pour toutes vosaventures."
      ) }) }),
      /* @__PURE__ */ jsx(Events, { event: events })
    ] }),
    rooms.length > 0 && /* @__PURE__ */ jsx(Rooms, { rooms }),
    services.length > 0 && /* @__PURE__ */ jsx(Services, { services }),
    /* @__PURE__ */ jsx(Contact, { rooms })
  ] });
}
const __vite_glob_0_57 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
function DeleteUserForm$1({ className = "" }) {
  const [open, setOpen] = useState(false);
  const passwordInput = useRef();
  const { width } = useWindowDimensions();
  const {
    data,
    setData: setData2,
    delete: destroy,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("client.profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => {
        setOpen(false);
        reset();
      },
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: useTrans("Supprimer le compte") }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: useTrans(
        "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Avant de supprimer votre compte, veuillez télécharger toutes les données ou informations que vous souhaitez conserver."
      ) })
    ] }),
    width >= 767 ? /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxs(
        DialogTrigger,
        {
          className: buttonVariants({ variant: "destructive" }),
          children: [
            /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
            useTrans("Supprimer le compte")
          ]
        }
      ),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsxs(DialogTitle, { children: [
            useTrans(
              "Etes-vous sûr de vouloir supprimer votre compte ?"
            ),
            " "
          ] }),
          /* @__PURE__ */ jsxs(DialogDescription, { children: [
            useTrans(
              "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte."
            ),
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "password",
                value: "Password",
                className: "sr-only"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                ref: passwordInput,
                value: data.password,
                onChange: (e) => setData2("password", e.target.value),
                className: "mt-1 ",
                isFocused: true,
                placeholder: useTrans("Mot de passe")
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.password,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setOpen(false),
                children: useTrans("Annuler")
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "destructive",
                onClick: () => {
                  deleteUser();
                },
                className: "flex justify-center",
                children: [
                  /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                  useTrans("Supprimer")
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxs(
        DrawerTrigger,
        {
          className: buttonVariants({ variant: "destructive" }),
          children: [
            /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
            useTrans("Supprimer le compte")
          ]
        }
      ),
      /* @__PURE__ */ jsxs(DrawerContent, { children: [
        /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
          /* @__PURE__ */ jsxs(DrawerTitle, { children: [
            useTrans(
              "Etes-vous sûr de vouloir supprimer votre compte ?"
            ),
            " "
          ] }),
          /* @__PURE__ */ jsxs(DrawerDescription, { children: [
            useTrans(
              "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte."
            ),
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6 px-4", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "password",
                value: "Password",
                className: "sr-only"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                ref: passwordInput,
                value: data.password,
                onChange: (e) => setData2("password", e.target.value),
                className: "mt-1",
                isFocused: true,
                placeholder: useTrans("Mot de passe")
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.password,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "destructive",
                onClick: () => {
                  deleteUser();
                },
                className: "flex justify-center",
                children: [
                  /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                  useTrans("Supprimer")
                ]
              }
            ),
            /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: useTrans("Annuler") }) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const __vite_glob_0_59 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm$1
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm$1({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const {
    data,
    setData: setData2,
    errors,
    put,
    reset,
    processing,
    recentlySuccessful,
    clearErrors
  } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: useTrans("Mettre à jour le mot de passe") }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: useTrans(
        "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester en sécurité"
      ) })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, children: [
      /* @__PURE__ */ jsx("div", { className: "md:flex my-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full  bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "current_password",
            value: useTrans("Mot de passe actuel")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => {
              setData2("current_password", e.target.value);
              clearErrors("current_password");
            },
            type: "password",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.current_password,
            className: "mt-2"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "password",
              value: useTrans("nouveau mot de passe")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "password",
              ref: passwordInput,
              value: data.password,
              onChange: (e) => {
                setData2("password", e.target.value);
                clearErrors("password");
              },
              type: "password",
              autoComplete: "new-password"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.password,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "md:hidden my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "password_confirmation",
              value: useTrans("Confirmez le mot de passe")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "password_confirmation",
              value: data.password_confirmation,
              onChange: (e) => {
                setData2(
                  "password_confirmation",
                  e.target.value
                );
                clearErrors("password_confirmation");
              },
              type: "password",
              autoComplete: "new-password"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.password_confirmation,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
          Button,
          {
            disabled: processing,
            type: "submit",
            className: "mt-2 w-1/4",
            variant: "secondary",
            children: useTrans("Enregistrer")
          }
        ) }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: useTrans("Enregistrer") })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_60 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm$1
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation$1({
  mustVerifyEmail,
  status,
  className = ""
}) {
  const user = usePage().props.auth.user;
  const { data, setData: setData2, patch, errors, processing, clearErrors } = useForm({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("client.profile.update"));
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium", children: useTrans("Les informations personnelles") }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "first_name",
              value: useTrans("Prénom")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "first_name",
              value: data.first_name,
              onChange: (e) => {
                setData2("first_name", e.target.value);
                clearErrors("first_name");
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.first_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "md:hidden my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "last_name",
              value: useTrans("Nom")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "last_name",
              value: data.last_name,
              onChange: (e) => {
                setData2("last_name", e.target.value);
                clearErrors("last_name");
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.last_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: useTrans("Email") }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "L'email doit être unique pour chaque utilisateur"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: useTrans("Email") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "email",
              value: data.email,
              onChange: (e) => {
                setData2("email", e.target.value);
                clearErrors("email");
              }
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "phone",
              value: useTrans("N° téléphone")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: useTrans(
            "Le N° téléphone doit être unique pour chaque utilisateur"
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "phone",
              value: useTrans("N° téléphone")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "phone",
              value: data.phone,
              onChange: (e) => {
                setData2("phone", e.target.value);
                clearErrors("phone");
              }
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.phone, className: "mt-2" })
        ] })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800 dark:text-gray-200", children: [
          useTrans(
            "Votre adresse email n'est pas vérifiée."
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
              children: [
                useTrans(
                  "Cliquez ici pour renvoyer l'e-mail de vérification."
                ),
                " "
              ]
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600 dark:text-green-400", children: useTrans(
          "Un nouveau lien de vérification a été envoyé à votre adresse e-mail."
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          disabled: processing,
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: useTrans("Enregistrer")
        }
      ) })
    ] })
  ] });
}
const __vite_glob_0_61 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation$1
}, Symbol.toStringTag, { value: "Module" }));
function Edit$1({ mustVerifyEmail, status }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
        UpdateProfileInformation$1,
        {
          mustVerifyEmail,
          status
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm$1, {}) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm$1, { className: "max-w-xl" }) })
    ] }) })
  ] });
}
const __vite_glob_0_58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
function Show$1({ promotion }) {
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] left-[calc(30%-28.5rem)] top-[0] translate-x-[-10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[20rem] bottom-[5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx(PageHeading, { title: "Promotion", className: "my-10 relative" }),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg my-4 relative", children: /* @__PURE__ */ jsxs(Carousel, { children: [
      /* @__PURE__ */ jsx(CarouselContent, { children: promotion.assets.map((asset) => /* @__PURE__ */ jsx(
        CarouselItem,
        {
          className: "md:basis-1/2 lg:basis-1/3",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: asset.url,
              alt: asset.name,
              className: "rounded-md aspect-video object-cover w-full transition-transform duration-300 hover:scale-95"
            }
          )
        },
        asset.id
      )) }),
      /* @__PURE__ */ jsx(CarouselPrevious, {}),
      /* @__PURE__ */ jsx(CarouselNext, {})
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg my-4 relative bg-card ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between itmes-center font-bold", children: [
        promotion.promo_start_date == promotion.promo_end_date ? /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          useTrans("Le"),
          " :",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: promotion.promo_start_date })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 justify-around mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            useTrans("De"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: promotion.promo_start_date })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            useTrans("Jusqu'a"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: promotion.promo_end_date })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
          "- ",
          promotion.promo_value,
          " DA"
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        RichEditor,
        {
          className: "bg-transparent border-none",
          autofocus: false,
          editable: false,
          content: promotion.promo_descreption
        }
      )
    ] })
  ] });
}
const __vite_glob_0_62 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$1
}, Symbol.toStringTag, { value: "Module" }));
function Show({ service }) {
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] left-[calc(30%-28.5rem)] top-[0] translate-x-[-10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[20rem] bottom-[5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx(
      PageHeading,
      {
        title: service.service_name,
        className: "my-10 relative"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg my-4 relative", children: /* @__PURE__ */ jsxs(Carousel, { children: [
      /* @__PURE__ */ jsx(CarouselContent, { children: service.assets.map((asset) => /* @__PURE__ */ jsx(CarouselItem, { className: "md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: asset.url,
          alt: asset.name,
          className: "rounded-md aspect-video object-cover w-full transition-transform duration-300 hover:scale-95"
        }
      ) }, asset.id)) }),
      /* @__PURE__ */ jsx(CarouselPrevious, {}),
      /* @__PURE__ */ jsx(CarouselNext, {})
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg my-4 relative bg-card", children: [
      /* @__PURE__ */ jsx(
        RichEditor,
        {
          className: "bg-transparent border-none",
          autofocus: false,
          editable: false,
          content: service.service_descreption
        }
      ),
      service.consomation.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold", children: "Consommation disponible dans ce service :" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 my-2", children: service.consomation.map((consomation) => /* @__PURE__ */ jsx(
          Badge,
          {
            className: "m-0 w-autot",
            children: consomation.consumption_name
          },
          consomation.consumption_id
        )) })
      ] })
    ] })
  ] });
}
const __vite_glob_0_63 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsx("svg", { ...props, viewBox: "0 0 316 316", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z" }) });
}
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white dark:bg-gray-700", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
  } else if (align === "right") {
    alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function NavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 " : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ") + className,
      children
    }
  );
}
function ResponsiveNavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${active ? "border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300" : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`,
      children
    }
  );
}
function AuthenticatedLayout({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsxs("nav", { className: "bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: /* @__PURE__ */ jsx(
            NavLink,
            {
              href: route("dashboard"),
              active: route().current("dashboard"),
              children: "Dashboard"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ms-6", children: /* @__PURE__ */ jsx("div", { className: "ms-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
          /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",
              children: [
                user.name,
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "ms-2 -me-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
            /* @__PURE__ */ jsx(
              Dropdown.Link,
              {
                href: route("profile.edit"),
                children: "Profile"
              }
            ),
            /* @__PURE__ */ jsx(
              Dropdown.Link,
              {
                href: route("logout"),
                method: "post",
                as: "button",
                children: "Log Out"
              }
            )
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "-me-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowingNavigationDropdown(
              (previousState) => !previousState
            ),
            className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",
            children: /* @__PURE__ */ jsxs(
              "svg",
              {
                className: "h-6 w-6",
                stroke: "currentColor",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 6h16M4 12h16M4 18h16"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      className: showingNavigationDropdown ? "inline-flex" : "hidden",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M6 18L18 6M6 6l12 12"
                    }
                  )
                ]
              }
            )
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: "pt-2 pb-3 space-y-1", children: /* @__PURE__ */ jsx(
              ResponsiveNavLink,
              {
                href: route("dashboard"),
                active: route().current("dashboard"),
                children: "Dashboard"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-1 border-t border-gray-200 dark:border-gray-600", children: [
              /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800 dark:text-gray-200", children: user.name }),
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: user.email })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
                /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
                /* @__PURE__ */ jsx(
                  ResponsiveNavLink,
                  {
                    method: "post",
                    href: route("logout"),
                    as: "button",
                    children: "Log Out"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    ] }),
    header && /* @__PURE__ */ jsx("header", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }) }),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
function Dashboard({ auth }) {
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900 dark:text-gray-100", children: "You're logged in!" }) }) }) })
      ]
    }
  );
}
const __vite_glob_0_64 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
function Error$1({ status }) {
  const title = {
    503: "503: Service Unavailable",
    500: "500: Server Error",
    404: "404: Page Not Found",
    403: "403: Forbidden"
  }[status];
  const description = {
    503: "Sorry, we are doing some maintenance. Please check back soon.",
    500: "Whoops, something went wrong on our servers.",
    404: "Sorry, the page you are looking for could not be found.",
    403: "Sorry, you are forbidden from accessing this page."
  }[status];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: title }),
    /* @__PURE__ */ jsx("div", { children: description })
  ] });
}
const __vite_glob_0_65 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Error$1
}, Symbol.toStringTag, { value: "Module" }));
function DeleteUserForm({ className = "" }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData: setData2,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Delete Account" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." })
    ] }),
    /* @__PURE__ */ jsx(DangerButton, { onClick: confirmUserDeletion, children: "Delete Account" }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingUserDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Are you sure you want to delete your account?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password", className: "sr-only" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData2("password", e.target.value),
            className: "mt-1 block w-3/4",
            isFocused: true,
            placeholder: "Password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx(DangerButton, { className: "ms-3", disabled: processing, children: "Delete Account" })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_67 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const { data, setData: setData2, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Update Password" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Ensure your account is using a long, random password to stay secure." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "current_password", value: "Current Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => setData2("current_password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.current_password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "New Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData2("password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            value: data.password_confirmation,
            onChange: (e) => setData2("password_confirmation", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_68 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation({ mustVerifyEmail, status, className = "" }) {
  const user = usePage().props.auth.user;
  const { data, setData: setData2, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Profile Information" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Update your account's profile information and email address." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            className: "mt-1 block w-full",
            value: data.name,
            onChange: (e) => setData2("name", e.target.value),
            required: true,
            isFocused: true,
            autoComplete: "name"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            className: "mt-1 block w-full",
            value: data.email,
            onChange: (e) => setData2("email", e.target.value),
            required: true,
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800 dark:text-gray-200", children: [
          "Your email address is unverified.",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
              children: "Click here to re-send the verification email."
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600 dark:text-green-400", children: "A new verification link has been sent to your email address." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_69 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation
}, Symbol.toStringTag, { value: "Module" }));
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
const __vite_glob_0_66 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
function Welcome({ auth, laravelVersion, phpVersion }) {
  const handleImageError = () => {
    var _a, _b, _c, _d;
    (_a = document.getElementById("screenshot-container")) == null ? void 0 : _a.classList.add("!hidden");
    (_b = document.getElementById("docs-card")) == null ? void 0 : _b.classList.add("!row-span-1");
    (_c = document.getElementById("docs-card-content")) == null ? void 0 : _c.classList.add("!flex-row");
    (_d = document.getElementById("background")) == null ? void 0 : _d.classList.add("!hidden");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 text-black/50 dark:bg-black dark:text-white/50", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          id: "background",
          className: "absolute -left-20 top-0 max-w-[877px]",
          src: "https://laravel.com/assets/img/welcome/background.svg"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-2xl px-6 lg:max-w-7xl", children: [
        /* @__PURE__ */ jsxs("header", { className: "grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex lg:justify-center lg:col-start-2", children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]",
              viewBox: "0 0 62 65",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z",
                  fill: "currentColor"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx("nav", { className: "-mx-3 flex flex-1 justify-end", children: auth.user ? /* @__PURE__ */ jsx(
            Link,
            {
              href: route("dashboard"),
              className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white",
              children: "Dashboard"
            }
          ) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("login"),
                className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white",
                children: "Log in"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("register"),
                className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white",
                children: "Register"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("main", { className: "mt-6", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-2 lg:gap-8", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://laravel.com/docs",
              id: "docs-card",
              className: "flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]",
              children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    id: "screenshot-container",
                    className: "relative flex w-full flex-1 items-stretch",
                    children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: "https://laravel.com/assets/img/welcome/docs-light.svg",
                          alt: "Laravel documentation screenshot",
                          className: "aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden",
                          onError: handleImageError
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: "https://laravel.com/assets/img/welcome/docs-dark.svg",
                          alt: "Laravel documentation screenshot",
                          className: "hidden aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-6 lg:items-end", children: [
                  /* @__PURE__ */ jsxs("div", { id: "docs-card-content", className: "flex items-start gap-6 lg:flex-col", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16", children: /* @__PURE__ */ jsxs(
                      "svg",
                      {
                        className: "size-5 sm:size-6",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [
                          /* @__PURE__ */ jsx(
                            "path",
                            {
                              fill: "#FF2D20",
                              d: "M23 4a1 1 0 0 0-1.447-.894L12.224 7.77a.5.5 0 0 1-.448 0L2.447 3.106A1 1 0 0 0 1 4v13.382a1.99 1.99 0 0 0 1.105 1.79l9.448 4.728c.14.065.293.1.447.1.154-.005.306-.04.447-.105l9.453-4.724a1.99 1.99 0 0 0 1.1-1.789V4ZM3 6.023a.25.25 0 0 1 .362-.223l7.5 3.75a.251.251 0 0 1 .138.223v11.2a.25.25 0 0 1-.362.224l-7.5-3.75a.25.25 0 0 1-.138-.22V6.023Zm18 11.2a.25.25 0 0 1-.138.224l-7.5 3.75a.249.249 0 0 1-.329-.099.249.249 0 0 1-.033-.12V9.772a.251.251 0 0 1 .138-.224l7.5-3.75a.25.25 0 0 1 .362.224v11.2Z"
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "path",
                            {
                              fill: "#FF2D20",
                              d: "m3.55 1.893 8 4.048a1.008 1.008 0 0 0 .9 0l8-4.048a1 1 0 0 0-.9-1.785l-7.322 3.706a.506.506 0 0 1-.452 0L4.454.108a1 1 0 0 0-.9 1.785H3.55Z"
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "pt-3 sm:pt-5 lg:pt-0", children: [
                      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-black dark:text-white", children: "Documentation" }),
                      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm/relaxed", children: "Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end." })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "size-6 shrink-0 stroke-[#FF2D20]",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        }
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://laracasts.com",
              className: "flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16", children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "size-5 sm:size-6",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx("g", { fill: "#FF2D20", children: /* @__PURE__ */ jsx("path", { d: "M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-12Zm-7.765 5.868a1.221 1.221 0 0 1 0 2.264l-6.626 2.776A1.153 1.153 0 0 1 8 18.123v-5.746a1.151 1.151 0 0 1 1.609-1.035l6.626 2.776ZM19.564 1.677a.25.25 0 0 0-.177-.427H15.6a.106.106 0 0 0-.072.03l-4.54 4.543a.25.25 0 0 0 .177.427h3.783c.027 0 .054-.01.073-.03l4.543-4.543ZM22.071 1.318a.047.047 0 0 0-.045.013l-4.492 4.492a.249.249 0 0 0 .038.385.25.25 0 0 0 .14.042h5.784a.5.5 0 0 0 .5-.5v-2a2.5 2.5 0 0 0-1.925-2.432ZM13.014 1.677a.25.25 0 0 0-.178-.427H9.101a.106.106 0 0 0-.073.03l-4.54 4.543a.25.25 0 0 0 .177.427H8.4a.106.106 0 0 0 .073-.03l4.54-4.543ZM6.513 1.677a.25.25 0 0 0-.177-.427H2.5A2.5 2.5 0 0 0 0 3.75v2a.5.5 0 0 0 .5.5h1.4a.106.106 0 0 0 .073-.03l4.54-4.543Z" }) })
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "pt-3 sm:pt-5", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-black dark:text-white", children: "Laracasts" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm/relaxed", children: "Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process." })
                ] }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "size-6 shrink-0 self-center stroke-[#FF2D20]",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://laravel-news.com",
              className: "flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16", children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "size-5 sm:size-6",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsxs("g", { fill: "#FF2D20", children: [
                      /* @__PURE__ */ jsx("path", { d: "M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" }),
                      /* @__PURE__ */ jsx("path", { d: "M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" }),
                      /* @__PURE__ */ jsx("path", { d: "M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" })
                    ] })
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "pt-3 sm:pt-5", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-black dark:text-white", children: "Laravel News" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm/relaxed", children: "Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials." })
                ] }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "size-6 shrink-0 self-center stroke-[#FF2D20]",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800", children: [
            /* @__PURE__ */ jsx("div", { className: "flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16", children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "size-5 sm:size-6",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsx("g", { fill: "#FF2D20", children: /* @__PURE__ */ jsx("path", { d: "M16.597 12.635a.247.247 0 0 0-.08-.237 2.234 2.234 0 0 1-.769-1.68c.001-.195.03-.39.084-.578a.25.25 0 0 0-.09-.267 8.8 8.8 0 0 0-4.826-1.66.25.25 0 0 0-.268.181 2.5 2.5 0 0 1-2.4 1.824.045.045 0 0 0-.045.037 12.255 12.255 0 0 0-.093 3.86.251.251 0 0 0 .208.214c2.22.366 4.367 1.08 6.362 2.118a.252.252 0 0 0 .32-.079 10.09 10.09 0 0 0 1.597-3.733ZM13.616 17.968a.25.25 0 0 0-.063-.407A19.697 19.697 0 0 0 8.91 15.98a.25.25 0 0 0-.287.325c.151.455.334.898.548 1.328.437.827.981 1.594 1.619 2.28a.249.249 0 0 0 .32.044 29.13 29.13 0 0 0 2.506-1.99ZM6.303 14.105a.25.25 0 0 0 .265-.274 13.048 13.048 0 0 1 .205-4.045.062.062 0 0 0-.022-.07 2.5 2.5 0 0 1-.777-.982.25.25 0 0 0-.271-.149 11 11 0 0 0-5.6 2.815.255.255 0 0 0-.075.163c-.008.135-.02.27-.02.406.002.8.084 1.598.246 2.381a.25.25 0 0 0 .303.193 19.924 19.924 0 0 1 5.746-.438ZM9.228 20.914a.25.25 0 0 0 .1-.393 11.53 11.53 0 0 1-1.5-2.22 12.238 12.238 0 0 1-.91-2.465.248.248 0 0 0-.22-.187 18.876 18.876 0 0 0-5.69.33.249.249 0 0 0-.179.336c.838 2.142 2.272 4 4.132 5.353a.254.254 0 0 0 .15.048c1.41-.01 2.807-.282 4.117-.802ZM18.93 12.957l-.005-.008a.25.25 0 0 0-.268-.082 2.21 2.21 0 0 1-.41.081.25.25 0 0 0-.217.2c-.582 2.66-2.127 5.35-5.75 7.843a.248.248 0 0 0-.09.299.25.25 0 0 0 .065.091 28.703 28.703 0 0 0 2.662 2.12.246.246 0 0 0 .209.037c2.579-.701 4.85-2.242 6.456-4.378a.25.25 0 0 0 .048-.189 13.51 13.51 0 0 0-2.7-6.014ZM5.702 7.058a.254.254 0 0 0 .2-.165A2.488 2.488 0 0 1 7.98 5.245a.093.093 0 0 0 .078-.062 19.734 19.734 0 0 1 3.055-4.74.25.25 0 0 0-.21-.41 12.009 12.009 0 0 0-10.4 8.558.25.25 0 0 0 .373.281 12.912 12.912 0 0 1 4.826-1.814ZM10.773 22.052a.25.25 0 0 0-.28-.046c-.758.356-1.55.635-2.365.833a.25.25 0 0 0-.022.48c1.252.43 2.568.65 3.893.65.1 0 .2 0 .3-.008a.25.25 0 0 0 .147-.444c-.526-.424-1.1-.917-1.673-1.465ZM18.744 8.436a.249.249 0 0 0 .15.228 2.246 2.246 0 0 1 1.352 2.054c0 .337-.08.67-.23.972a.25.25 0 0 0 .042.28l.007.009a15.016 15.016 0 0 1 2.52 4.6.25.25 0 0 0 .37.132.25.25 0 0 0 .096-.114c.623-1.464.944-3.039.945-4.63a12.005 12.005 0 0 0-5.78-10.258.25.25 0 0 0-.373.274c.547 2.109.85 4.274.901 6.453ZM9.61 5.38a.25.25 0 0 0 .08.31c.34.24.616.561.8.935a.25.25 0 0 0 .3.127.631.631 0 0 1 .206-.034c2.054.078 4.036.772 5.69 1.991a.251.251 0 0 0 .267.024c.046-.024.093-.047.141-.067a.25.25 0 0 0 .151-.23A29.98 29.98 0 0 0 15.957.764a.25.25 0 0 0-.16-.164 11.924 11.924 0 0 0-2.21-.518.252.252 0 0 0-.215.076A22.456 22.456 0 0 0 9.61 5.38Z" }) })
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "pt-3 sm:pt-5", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-black dark:text-white", children: "Vibrant Ecosystem" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm/relaxed", children: [
                "Laravel's robust library of first-party tools and libraries, such as",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://forge.laravel.com",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white dark:focus-visible:ring-[#FF2D20]",
                    children: "Forge"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://vapor.laravel.com",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Vapor"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://nova.laravel.com",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Nova"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://envoyer.io",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Envoyer"
                  }
                ),
                ", and",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://herd.laravel.com",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Herd"
                  }
                ),
                " ",
                "help you take your projects to the next level. Pair them with powerful open source libraries like",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://laravel.com/docs/billing",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Cashier"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://laravel.com/docs/dusk",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Dusk"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://laravel.com/docs/broadcasting",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Echo"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://laravel.com/docs/horizon",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Horizon"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://laravel.com/docs/sanctum",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Sanctum"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://laravel.com/docs/telescope",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Telescope"
                  }
                ),
                ", and more."
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("footer", { className: "py-16 text-center text-sm text-black dark:text-white/70", children: [
          "Laravel v",
          laravelVersion,
          " (PHP v",
          phpVersion,
          ")"
        ] })
      ] }) })
    ] })
  ] });
}
const __vite_glob_0_70 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Welcome
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Admin/Bookings/AviableRooms.jsx": __vite_glob_0_0, "./Pages/Admin/Bookings/Booking.jsx": __vite_glob_0_1, "./Pages/Admin/Bookings/Bookings.jsx": __vite_glob_0_2, "./Pages/Admin/Bookings/Calendar.jsx": __vite_glob_0_3, "./Pages/Admin/Bookings/Historique.jsx": __vite_glob_0_4, "./Pages/Admin/Dashboard.jsx": __vite_glob_0_5, "./Pages/Admin/Employes/CreateEmployes.jsx": __vite_glob_0_6, "./Pages/Admin/Employes/EditEmployes.jsx": __vite_glob_0_7, "./Pages/Admin/Employes/Employees.jsx": __vite_glob_0_8, "./Pages/Admin/Events/CreateEvent.jsx": __vite_glob_0_9, "./Pages/Admin/Events/EditEvent.jsx": __vite_glob_0_10, "./Pages/Admin/Events/Events.jsx": __vite_glob_0_11, "./Pages/Admin/Factures/CreateFacture.jsx": __vite_glob_0_12, "./Pages/Admin/Factures/CreateGuests.jsx": __vite_glob_0_13, "./Pages/Admin/Factures/Facture.jsx": __vite_glob_0_14, "./Pages/Admin/Factures/Factures.jsx": __vite_glob_0_15, "./Pages/Admin/Factures/GuestList.jsx": __vite_glob_0_16, "./Pages/Admin/Messages/Messages.jsx": __vite_glob_0_17, "./Pages/Admin/Notifications/Notifications.jsx": __vite_glob_0_18, "./Pages/Admin/Profile/Edit.jsx": __vite_glob_0_19, "./Pages/Admin/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_20, "./Pages/Admin/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_21, "./Pages/Admin/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_22, "./Pages/Admin/Promotions/CreatePromotion.jsx": __vite_glob_0_23, "./Pages/Admin/Promotions/EditPromotion.jsx": __vite_glob_0_24, "./Pages/Admin/Promotions/Promotions.jsx": __vite_glob_0_25, "./Pages/Admin/Roles/CreateRole.jsx": __vite_glob_0_26, "./Pages/Admin/Roles/EditRole.jsx": __vite_glob_0_27, "./Pages/Admin/Roles/Roles.jsx": __vite_glob_0_28, "./Pages/Admin/Rooms/Features.jsx": __vite_glob_0_29, "./Pages/Admin/Rooms/Room.jsx": __vite_glob_0_30, "./Pages/Admin/Rooms/RoomCreate.jsx": __vite_glob_0_31, "./Pages/Admin/Rooms/RoomEdit.jsx": __vite_glob_0_32, "./Pages/Admin/Rooms/Rooms.jsx": __vite_glob_0_33, "./Pages/Admin/Services/Consumptions.jsx": __vite_glob_0_34, "./Pages/Admin/Services/CreateService.jsx": __vite_glob_0_35, "./Pages/Admin/Services/EditService.jsx": __vite_glob_0_36, "./Pages/Admin/Services/Services.jsx": __vite_glob_0_37, "./Pages/Auth/AdminLogin.jsx": __vite_glob_0_38, "./Pages/Auth/ConfirmPassword.jsx": __vite_glob_0_39, "./Pages/Auth/ForgotPassword.jsx": __vite_glob_0_40, "./Pages/Auth/Login.jsx": __vite_glob_0_41, "./Pages/Auth/Register.jsx": __vite_glob_0_42, "./Pages/Auth/ResetPassword.jsx": __vite_glob_0_43, "./Pages/Auth/VerifyEmail.jsx": __vite_glob_0_44, "./Pages/Client/AviableRooms.jsx": __vite_glob_0_45, "./Pages/Client/Bookings/Booking.jsx": __vite_glob_0_46, "./Pages/Client/Bookings/MyBookings.jsx": __vite_glob_0_47, "./Pages/Client/Component/Caro.jsx": __vite_glob_0_48, "./Pages/Client/Component/ContactSection.jsx": __vite_glob_0_49, "./Pages/Client/Component/Event.jsx": __vite_glob_0_50, "./Pages/Client/Component/FormBook.jsx": __vite_glob_0_51, "./Pages/Client/Component/ReservationForm.jsx": __vite_glob_0_52, "./Pages/Client/Component/RoomCard.jsx": __vite_glob_0_53, "./Pages/Client/Component/RoomDetail.jsx": __vite_glob_0_54, "./Pages/Client/Component/Service.jsx": __vite_glob_0_55, "./Pages/Client/Events/Show.jsx": __vite_glob_0_56, "./Pages/Client/Home.jsx": __vite_glob_0_57, "./Pages/Client/Profile/Edit.jsx": __vite_glob_0_58, "./Pages/Client/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_59, "./Pages/Client/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_60, "./Pages/Client/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_61, "./Pages/Client/Promotions/Show.jsx": __vite_glob_0_62, "./Pages/Client/Services/Show.jsx": __vite_glob_0_63, "./Pages/Dashboard.jsx": __vite_glob_0_64, "./Pages/Error.jsx": __vite_glob_0_65, "./Pages/Profile/Edit.jsx": __vite_glob_0_66, "./Pages/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_67, "./Pages/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_68, "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_69, "./Pages/Welcome.jsx": __vite_glob_0_70 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => React__default.createElement(App, props)
  })
);
export {
  Card as C,
  CardContent as a,
  CardFooter as b,
  cn as c,
  useTrans as u
};
