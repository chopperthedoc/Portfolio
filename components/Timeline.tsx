import Card from "./Card";
import CardContent from "./CardContent";

export default function Component() {
  return (
    <div className="px-4 py-6 md:px-10 md:py-12 ">
      <div className="mx-auto grid max-w-3xl gap-6 lg:gap-8">
        <div className="flex items-center space-x-4">
          <GraduationCapIcon className="h-6 w-6" />
          <div className="text-2xl md:text-3xl font-mono Menlo">Timeline</div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-0.5 bg-gradient-to-r from-gray-200 via-white to-gray-200 grid h-[100px] rounded-lg" />
            <div className="grid gap-2">
              <div className="dark:gray-400 font-mono Menlo">2015</div>
              <Card>
                <CardContent className="space-y-2">
                  <div className="text-sm font-semibold font-mono Menlo">
                    Abitur
                  </div>
                  <div className="text-sm font-mono Menlo">
                    Abschluss am Niels-Stensen-Gymnasium
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-0.5 bg-gradient-to-r from-gray-200 via-white to-gray-200 grid h-[100px] rounded-lg" />
            <div className="grid gap-2">
              <div className="dark:gray-400 font-mono Menlo">2016-2020</div>
              <Card>
                <CardContent className="space-y-2">
                  <div className="text-sm font-semibold font-mono Menlo">
                    Bachelor of Arts in Soziologie
                  </div>
                  <div className="text-sm font-mono Menlo">
                    Bachelorabschluss an der Georg-August-Universität Göttingen
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-0.5 bg-gradient-to-r from-gray-200 via-white to-gray-200 grid h-[100px] rounded-lg" />
            <div className="grid gap-2">
              <div className="dark:gray-400 font-mono Menlo">2020-2022</div>
              <Card>
                <CardContent className="space-y-2">
                  <div className="text-sm font-semibold font-mono Menlo">
                    Bachelor of Science in Statistik
                  </div>
                  <div className="text-sm font-mono Menlo">
                    Vertiefungen zu Datenanalyse, Wahrscheinlichkeitsrechnung
                    und statistischer Modelierung an der Technischen Universität
                    Dortmund
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-0.5 bg-gradient-to-r from-gray-200 via-white to-gray-200 grid h-[100px] rounded-lg" />
            <div className="grid gap-2">
              <div className="dark:gray-400 font-mono Menlo">2022-2024</div>
              <Card>
                <CardContent className="space-y-2">
                  <div className="text-sm font-semibold font-mono Menlo">
                    Entwicklung von Paranote & Easy-Pdf
                  </div>
                  <div className="text-sm font-mono Menlo">
                    Zwei Produktivitätsapps für Juristen und ältere Personen
                    entwickelt
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GraduationCapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
