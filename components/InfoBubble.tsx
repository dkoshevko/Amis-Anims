export default function InfoBubble({ info }: {info: string}) {

  return (
    <div className="border border-black rounded-full px-3 py-0.5 text-xs font-medium xl:px-4 xl:py-1 xl:text-sm">
      <span>{info}</span>
    </div>
  )
}