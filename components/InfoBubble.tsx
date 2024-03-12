export default function InfoBubble({ info }: {info: string}) {

  return (
    <div className="border border-black rounded-full px-3 py-0.5 text-xs font-medium">
      <span>{info}</span>
    </div>
  )
}