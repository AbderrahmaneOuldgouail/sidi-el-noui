import { useTrans } from "@/Hooks/useTrans";

export default function EmptyPage({ text, icon: Icon }) {
    return (
        <div className="flex flex-col justify-center gap-6 items-center py-36">
            <div className="font-bold text-xl">{useTrans(text)}</div>
            <Icon size={100} className="text-primary" />
        </div>
    );
}
