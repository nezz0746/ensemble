const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex flex-row justify-center items-center gap-4">
    <div className="flex-grow border-b" />
    <p className="">{title}</p>
    <div className="flex-grow border-b" />
  </div>
)

export default SectionTitle
