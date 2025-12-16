import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [, setShowForm] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-['Open_Sans']" style={{ backgroundColor: '#c7c6c6' }}>
      <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: '#2a5468', borderColor: '#2a5468' }}>
        <div className="container mx-auto px-4 py-5">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/20251216_221940_0000.png" 
                alt="МЕД-ОБРАЗ" 
                className="h-16"
              />
            </div>
            <div className="hidden md:flex gap-8 text-base">
              {['О курсе', 'Для кого', 'Программа', 'Преподаватель', 'Цена'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-white hover:text-gray-200 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button 
              style={{ backgroundColor: '#d3544f' }}
              className="text-white hover:opacity-90"
              onClick={() => setShowForm(true)}
            >
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="font-['Montserrat'] font-bold text-3xl md:text-5xl mb-6" style={{ color: '#1d4356' }}>
                Уровни психической организации личности в концепции психоаналитической диагностики
              </h1>
              <p className="text-lg mb-8 text-gray-700 max-w-3xl mx-auto">
                Авторский курс для психологов-консультантов и психотерапевтов, начинающих практику в психоаналитическом подходе
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  style={{ backgroundColor: '#1d4356' }}
                  className="text-white hover:opacity-90 font-semibold"
                  onClick={() => scrollToSection('цена')}
                >
                  Записаться на курс
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  style={{ borderColor: '#1d4356', color: '#1d4356' }}
                  className="hover:bg-gray-100 font-semibold"
                  onClick={() => scrollToSection('программа')}
                >
                  Программа курса
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-3xl">
                <div className="absolute -inset-4 rounded-lg opacity-20" style={{ backgroundColor: '#1d4356' }}></div>
                <div className="relative rounded-lg shadow-2xl overflow-hidden bg-white">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Видео о курсе"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="о-курсе" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center" style={{ color: '#1d4356' }}>
            О курсе
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#1d4356' }}>
                <CardContent className="p-6">
                  <Icon name="Calendar" size={32} style={{ color: '#d3544f' }} className="mb-4" />
                  <h3 className="font-['Montserrat'] font-semibold text-lg mb-2" style={{ color: '#1d4356' }}>
                    Формат
                  </h3>
                  <p className="text-gray-700 text-sm">7 вебинаров в прямом эфире + 2 практических занятия с супервизией</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#1d4356' }}>
                <CardContent className="p-6">
                  <Icon name="Video" size={32} style={{ color: '#d3544f' }} className="mb-4" />
                  <h3 className="font-['Montserrat'] font-semibold text-lg mb-2" style={{ color: '#1d4356' }}>
                    Записи
                  </h3>
                  <p className="text-gray-700 text-sm">Все вебинары доступны в записи в течение 6 месяцев</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#1d4356' }}>
                <CardContent className="p-6">
                  <Icon name="FileText" size={32} style={{ color: '#d3544f' }} className="mb-4" />
                  <h3 className="font-['Montserrat'] font-semibold text-lg mb-2" style={{ color: '#1d4356' }}>
                    Документ
                  </h3>
                  <p className="text-gray-700 text-sm">Удостоверение о повышении квалифиации по итогам обучения</p>
                </CardContent>
              </Card>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Данный курс включает 7 вебинаров в прямом эфире с лекционным материалом и возможностью задать вопросы преподавателю, а также 2 практических-супервизионных занятия с разбором представляемых обучающимися случаев.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                В процессе обучения вы получите два промежуточных домашних задания на отработку практических навыков психоаналитической диагностики с обратной связью от преподавателя.
              </p>
              <p className="text-gray-700 leading-relaxed">
                После каждого вебинара предоставляются презентации и конспекты. Общий чат для обсуждения текущих вопросов между собой и с преподавателем.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="для-кого" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center" style={{ color: '#1d4356' }}>
            Для кого этот курс
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Icon name="Users" size={40} style={{ color: '#d3544f' }} className="mb-4" />
                  <h3 className="font-['Montserrat'] font-semibold text-xl mb-4" style={{ color: '#1d4356' }}>
                    Для практикующих специалистов
                  </h3>
                  <p className="text-gray-700">
                    Психологи-консультанты и психотерапевты, имеющие высшее образование в области психологии или ДПО по специальности, и начинающих практику в психоаналитическом подходе
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Icon name="GraduationCap" size={40} style={{ color: '#d3544f' }} className="mb-4" />
                  <h3 className="font-['Montserrat'] font-semibold text-xl mb-4" style={{ color: '#1d4356' }}>
                    Для студентов
                  </h3>
                  <p className="text-gray-700">
                    Обучающиеся психологии, желающие разобраться в психоаналитической диагностике для дальнейшего применения знаний на практике
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-8 bg-white">
              <CardContent className="p-8">
                <h3 className="font-['Montserrat'] font-semibold text-xl mb-6" style={{ color: '#1d4356' }}>
                  Данный курс подойдёт для тех, кто желает:
                </h3>
                <ul className="space-y-4">
                  {[
                    'Структурировать имеющиеся и получить новые знания об уровнях развития личностной организации',
                    'Разобраться в диагностических критериях психоаналитического подхода',
                    'Уметь определять уровень психического функционирования клиента (невротический, пограничный, психотический, нарциссический) и в соответствии с этим понимать дальнейшую стратегию работы уже на первых сессиях',
                    'Укрепить навыки психоаналитической диагностики на практических примерах и супервизиях в ходе обучения'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={24} style={{ color: '#d3544f' }} className="flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="программа" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center" style={{ color: '#1d4356' }}>
            Программа курса
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  title: 'Невротические, пограничные, психотические и нарциссический личности',
                  content: 'От теории Фрейда к координатам Ненси Мак-Вильямс. Основные концепции и исторический контекст психоаналитической диагностики.'
                },
                {
                  title: 'Основные характеристики уровней организации',
                  content: 'Особенности психики и проявления в поле рабочего альянса с психологом личностей с данными уровнями организации. Практические критерии диагностики.'
                },
                {
                  title: 'Контр-перенос психолога',
                  content: 'Работа с контр-переносом в терапии с клиентами разных уровней организации. Понимание собственных реакций и их использование в диагностике.'
                },
                {
                  title: 'Представители типологии в культуре',
                  content: 'Анализ героев художественной литературы и кинематографа как представителей данной типологии для углубления понимания.'
                },
                {
                  title: 'Клиентские случаи от преподавателя',
                  content: 'Разбор реальных терапевтических ситуаций с демонстрацией применения диагностических принципов на практике.'
                },
                {
                  title: 'Практические занятия с супервизией',
                  content: 'Разборы кейсов студентов под руководством преподавателя. Отработка навыков диагностики на конкретных примерах из практики участников.'
                }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#1d4356' }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div 
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-['Montserrat'] font-bold text-white"
                        style={{ backgroundColor: '#d3544f' }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-['Montserrat'] font-semibold text-lg mb-2" style={{ color: '#1d4356' }}>
                          {item.title}
                        </h3>
                        <p className="text-gray-700 text-sm">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="чему-научишься" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center" style={{ color: '#1d4356' }}>
            Чему вы научитесь
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: 'Target',
                  title: 'Применять психоаналитическую диагностику',
                  description: 'Понимать и использовать в работе принципы и методы психоаналитической диагностики в области определения уровня личностной организации клиента'
                },
                {
                  icon: 'Map',
                  title: 'Планировать стратегию работы',
                  description: 'Эффективно выстраивать терапевтический процесс с клиентами в зависимости от уровня их личностной организации'
                },
                {
                  icon: 'AlertTriangle',
                  title: 'Избегать ошибок терапевта',
                  description: 'Понимать возможные ошибки в следствии неверного определения уровня психической организации личности, таких как ретравматизация, обрыв терапии'
                },
                {
                  icon: 'Heart',
                  title: 'Экологично выстраивать процесс',
                  description: 'Бережно относиться к себе и понимать свои ресурсные возможности в зависимости от работы с теми или иными клиентами'
                }
              ].map((item, index) => (
                <Card key={index} className="bg-white hover:shadow-xl transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <Icon name={item.icon as any} size={40} style={{ color: '#d3544f' }} className="mb-4" />
                    <h3 className="font-['Montserrat'] font-semibold text-lg mb-3" style={{ color: '#1d4356' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="преподаватель" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center" style={{ color: '#1d4356' }}>
            Преподаватель
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2" style={{ borderColor: '#1d4356' }}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4" style={{ borderColor: '#d3544f' }}>
                      <img 
                        src="https://cdn.poehali.dev/files/photo_5377459643875461653_y.jpg"
                        alt="Екатерина Степанова"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Montserrat'] font-bold text-2xl mb-2" style={{ color: '#d3544f' }}>
                      Екатерина Степанова
                    </h3>
                    <p className="text-gray-700 mb-6 text-lg">
                      Практикующий психолог с более чем 8-летним опытом
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Супервизор Российской Психотерапевтической Ассоциации (РПА)',
                        'Преподаватель Научно-Образовательного Центра Современных Медицинских Технологий',
                        'Специализация: индивидуальное и семейное консультирование и терапия взрослых и подростков',
                        'Интегративный подход с опорой на психоаналитический'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Icon name="Award" size={20} style={{ color: '#d3544f' }} className="flex-shrink-0 mt-1" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="цена" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center" style={{ color: '#1d4356' }}>
            Стоимость и запись
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:shadow-2xl transition-all hover:scale-105" style={{ borderColor: '#d3544f' }}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#d3544f', color: 'white' }}>
                      Ранняя запись
                    </div>
                    <div className="font-['Montserrat'] font-bold text-4xl mb-2" style={{ color: '#1d4356' }}>
                      15 000 ₽
                    </div>
                    <p className="text-gray-600">при оплате 100% до 25.01</p>
                  </div>
                  <Button 
                    className="w-full text-white font-semibold"
                    size="lg"
                    style={{ backgroundColor: '#d3544f' }}
                    onClick={() => window.open('https://rosmededucation.ru/', '_blank')}
                  >
                    Записаться со скидкой
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-xl transition-shadow" style={{ borderColor: '#1d4356' }}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#1d4356', color: 'white' }}>
                      Стандартная цена
                    </div>
                    <div className="font-['Montserrat'] font-bold text-4xl mb-2" style={{ color: '#1d4356' }}>
                      20 000 ₽
                    </div>
                    <p className="text-gray-600">при оплате 100% до 01.02</p>
                  </div>
                  <Button 
                    className="w-full font-semibold"
                    size="lg"
                    variant="outline"
                    style={{ borderColor: '#1d4356', color: '#1d4356' }}
                    onClick={() => window.open('https://rosmededucation.ru/', '_blank')}
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center" style={{ color: '#1d4356' }}>
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'Нужно ли базовое образование психолога?',
                  answer: 'Да, курс предназначен для психологов-консультантов и психотерапевтов с высшим образованием в области психологии или ДПО по специальности. Также подходит для студентов, обучающихся психологии.'
                },
                {
                  question: 'Будут ли доступны записи занятий?',
                  answer: 'Все вебинары (кроме практических занятий) выкладываются в записи в течении двух дней и сохраняются в течении 6 месяцев.'
                },
                {
                  question: 'Какой документ я получу после обучения?',
                  answer: 'По итогам курса вы получите удостоверение о повышении квалификации. Для этого необходимо пройти итоговое тестирование до 15 апреля.'
                },
                {
                  question: 'Есть ли практические занятия?',
                  answer: 'Да, в курс входят 2 практических-супервизионных занятия с разбором представляемых обучающимися случаев, а также два промежуточных домашних задания с обратной связью от преподавателя.'
                },
                {
                  question: 'Можно ли задавать вопросы преподавателю?',
                  answer: 'Да, на всех вебинарах есть возможность задавать вопросы в прямом эфире. Также доступен общий чат для обсуждения текущих вопросов между собой и с преподавателем.'
                },
                {
                  question: 'Какие материалы предоставляются?',
                  answer: 'После каждого вебинара предоставляются презентации и/или конспекты лекционной части. Также вы получите список актуальной рекомендованной литературы.'
                }
              ].map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 rounded-lg px-6"
                  style={{ borderColor: '#1d4356' }}
                >
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-['Montserrat'] font-semibold text-left" style={{ color: '#1d4356' }}>
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#1d4356' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6 text-white">
            Готовы начать обучение?
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к курсу и получите глубокие знания в области психоаналитической диагностики
          </p>
          <Button 
            size="lg"
            style={{ backgroundColor: '#d3544f' }}
            className="text-white hover:opacity-90 font-semibold text-lg px-8"
            onClick={() => window.open('https://rosmededucation.ru/', '_blank')}
          >
            Записаться на курс
          </Button>
        </div>
      </section>

      <footer className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <img 
              src="https://cdn.poehali.dev/files/photo_5337165063867009901_y.jpg" 
              alt="МЕД-ОБРАЗ" 
              className="h-16 mb-4"
            />
            <p className="text-center text-gray-600 text-xs max-w-md leading-relaxed">
              Научно-образовательный центр Современных Медицинских Технологий<br/>
              проект Союза охраны психического здоровья
            </p>
            <p className="mt-4">
              <a 
                href="https://rosmededucation.ru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline text-sm"
                style={{ color: '#1d4356' }}
              >
                rosmededucation.ru
              </a>
            </p>
            <p className="text-gray-500 text-xs mt-2">© 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;