import Link from "next/link"
import Image from 'next/image'

export default function TermsOfPrivacy() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="w-full px-4 lg:px-6 h-28 flex items-center justify-center bg-white shadow-md">
        <div className="container flex justify-between items-center">
          <Link className="flex items-center justify-center" href="/">
            <Image 
              src="/images/wiswirgroup_logo.png" 
              alt="WISWIR GROUP Logo" 
              width={800} 
              height={400} 
              className="h-16 w-auto object-contain"
            />
          </Link>
          <nav className="flex items-center gap-8">
            <Link className="nav-text text-xl font-bold hover:text-purple-600 transition-colors" href="/">Home</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full flex flex-col items-center bg-gray-50">
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-purple-600">
              Политика конфиденциальности WISWIR GROUP
            </h1>
            <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">Дата вступления в силу: [Укажите дату]</p>
              
              <p className="mb-6">В WISWIR GROUP (далее - «Компания», «мы», «нас» или «наш») мы серьезно относимся к вашей конфиденциальности и защиты ваших личных данных. Настоящая Политика конфиденциальности описывает, как мы собираем, используем, раскрываем и защищаем информацию, которую вы предоставляете нам при использовании наших сервисов, включая, но не ограничиваясь, WISWIR BSC, WISDEX и WISWIR Events.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-600">1. Собираемая информация</h2>
              <p>Мы можем собирать различную информацию от вас, включая, но не ограничиваясь:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Личными данными, такими как ваше имя, адрес электронной почты, номер телефона, дата рождения и другая идентифицирующая информация.</li>
                <li>Данные о вашем использовании наших услуг, включая IP-адрес, тип устройства, браузер, время доступа и страницы, которые вы посещаете на нашем сайте.</li>
                <li>Финансовую информацию, необходимую для обработки транзакций, такую как данные о банковских счетах и кредитных картах.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-600">2. Использование информации</h2>
              <p>Мы можем использовать вашу информацию для следующих целей:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Предоставление и поддержание нашим сервисам, включая обработку ваших запросов и транзакций.</li>
                <li>Уведомление вас и ваших коллег о новых продуктах, услугах или мероприятиях, связанных с нашей компанией.</li>
                <li>Анализ и улучшение наших услуг, включая развитие новых функций.</li>
                <li>Соблюдение юридических обязательств и разрешение споров.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-600">3. Раскрытие информации</h2>
              <p>Мы не будем раскрывать вашу личную информацию третьим лицам, за исключением следующих случаев:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Если это необходимо для осуществления услуг, которые вы запрашиваете (например, передача вашей информации партнерам, оказывающим услуги).</li>
                <li>Если мы обязаны сделать это по закону или в ответ на законные запросы властей.</li>
                <li>Если это необходимо для защиты прав, собственности или безопасности нашей компании, наших клиентов или других лиц.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-600">4. Защита информации</h2>
              <p className="mb-6">Мы принимаем разумные меры для защиты вашей информации от несанкционированного доступа, использования или раскрытия. Однако, несмотря на наши усилия, ни один метод передачи данных через Интернет или способ электронного хранения не является на 100% безопасным. Таким образом, мы не можем гарантировать абсолютную безопасность вашей информации.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-600">5. Ваши права</h2>
              <p>Вы имеете право:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Запрашивать доступ к вашей личной информации и исправлять ее.</li>
                <li>Запрашивать удаление вашей личной информации, если это не противоречит нашим обязательствам по хранению данных.</li>
                <li>Отказаться от получения маркетинговых сообщений в любое время.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-600">6. Изменения в Политике конфиденциальности</h2>
              <p className="mb-6">Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы уведомим вас о любых изменениях, разместив новую Политику конфиденциальности на нашем сайте. Рекомендуем вам периодически просматривать эту страницу для получения информации о том, как мы защищаем вашу информацию.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-600">7. Контакты</h2>
              <p>Если у вас есть вопросы о нашей Политике конфиденциальности или вы хотите реализовать свои права, пожалуйста, свяжитесь с нами по следующему адресу:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Электронная почта: [ваш адрес электронной почты]</li>
                <li>Телефон: [ваш номер телефона]</li>
              </ul>

              <p className="mt-8 font-semibold">Спасибо за то, что вы выбрали WISWIR GROUP!</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center justify-center px-4 md:px-6 border-t text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 WISWIR GROUP. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 justify-center">
          <Link className="text-xs hover:underline underline-offset-4" href="#">Terms of Service</Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">Privacy</Link>
        </nav>
      </footer>
    </div>
  )
}
