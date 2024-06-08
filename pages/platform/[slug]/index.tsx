import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { fetchEOLk8s } from '@/services/geteol'
import { K8SEOL } from '@/types/k8s_eol'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const  Page = ({}) => {
  const router = useRouter()
  const info = useQuery({ queryKey: ['k8s'], queryFn: fetchEOLk8s })
  const resJSON = info.data


  return ( 
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
<div className='w-[1200px] h-[500px]'>
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Cycle</TableHead>
          <TableHead>ReleaseDate</TableHead>
          <TableHead>EOL</TableHead>
          <TableHead >latest</TableHead>
          <TableHead >latestReleaseDate</TableHead>
          <TableHead >lts</TableHead>
          <TableHead >support</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resJSON && resJSON.map((item:K8SEOL, idx: number) => (
          <TableRow key={item.cycle}>
            <TableCell className="font-medium">{item.cycle}</TableCell>
            <TableCell>{item.releaseDate}</TableCell>
            <TableCell>{item.eol}</TableCell>
            <TableCell>{item.latest}</TableCell>
            <TableCell>{item.latestReleaseDate}</TableCell>
            <TableCell>{item.lts ? "/": "X"}</TableCell>
            <TableCell>{item.support}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>


    </main>
    
  )
}

export default Page