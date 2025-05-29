import { AlertCircle } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


function NotSignedInAlert() {
    return (
        <Alert variant="destructive" className="my-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Upozornění</AlertTitle>
            <AlertDescription>
                Pro personalizovaný obsah se musíš přihlásit
            </AlertDescription>
        </Alert>
    );
}

export default NotSignedInAlert;