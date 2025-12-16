import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [, setShowForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-['Open_Sans'] bg-background">
      {/* Backdrop blur overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/20251216_221940_0000.png" 
                alt="МЕД-ОБРАЗ" 
                className="h-24 md:h-32"
              />
            </div>
            <div className="hidden md:flex gap-8 text-2xl">
              {['О курсе', 'Для кого', 'Программа', 'Преподаватель', 'Цена'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Button 
                size="lg"
                className="hidden md:flex bg-accent text-white hover:bg-accent/90 text-xl px-8 py-6"
                onClick={() => setShowForm(true)}
              >
                Записаться
              </Button>
              <button
                className="md:hidden p-2 text-gray-700 hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Меню"
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={32} />
              </button>
            </div>
          </nav>
          
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                {['О курсе', 'Для кого', 'Программа', 'Преподаватель', 'Цена'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-left text-gray-700 hover:text-primary transition-colors font-medium text-xl py-2"
                  >
                    {item}
                  </button>
                ))}
                <Button 
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 text-xl w-full"
                  onClick={() => {
                    setShowForm(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Записаться
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6 text-foreground">
                Уровни психической организации личности в концепции психоаналитической диагностики
              </h1>
              <p className="text-3xl mb-4 text-gray-700 max-w-3xl mx-auto">
                Авторский курс для психологов-консультантов и психотерапевтов, начинающих практику в психоаналитическом подходе
              </p>
              <p className="text-2xl mb-8 text-accent font-semibold">
                📅 Старт курса: 3 февраля 2026 г.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 font-semibold text-2xl px-10 py-7"
                  onClick={() => scrollToSection('цена')}
                >
                  Записаться на курс
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 font-semibold text-2xl px-10 py-7"
                  onClick={() => scrollToSection('программа')}
                >
                  Программа курса
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-3xl">
                <div className="absolute -inset-4 rounded-lg opacity-10 bg-primary"></div>
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

      <section id="о-курсе" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-5xl md:text-6xl mb-12 text-center text-foreground">
            О курсе
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6 mb-16">
              <Card className="border-2 border-primary/30 hover:shadow-lg hover:border-primary/50 transition-all">
                <CardContent className="p-6 flex items-center gap-6">
                  <Icon name="Calendar" size={56} className="flex-shrink-0 text-accent" />
                  <div>
                    <h3 className="font-['Montserrat'] font-semibold text-2xl mb-2 text-foreground">
                      Формат
                    </h3>
                    <p className="text-gray-700 text-xl leading-relaxed">
                      7 вебинаров в прямом эфире с лекционным материалом и возможностью задать вопросы + 2 практических-супервизионных занятия с разбором случаев
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/30 hover:shadow-lg hover:border-primary/50 transition-all">
                <CardContent className="p-6 flex items-center gap-6">
                  <Icon name="Video" size={56} className="flex-shrink-0 text-accent" />
                  <div>
                    <h3 className="font-['Montserrat'] font-semibold text-2xl mb-2 text-foreground">
                      Записи
                    </h3>
                    <p className="text-gray-700 text-xl leading-relaxed">
                      Все материалы остаются в записи и доступны в течение 6 месяцев после окончания курса
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/30 hover:shadow-lg hover:border-primary/50 transition-all">
                <CardContent className="p-6 flex items-center gap-6">
                  <Icon name="Award" size={56} className="flex-shrink-0 text-accent" />
                  <div>
                    <h3 className="font-['Montserrat'] font-semibold text-2xl mb-2 text-foreground">
                      Документ
                    </h3>
                    <p className="text-gray-700 text-xl leading-relaxed">
                      Удостоверение о повышении квалификации установленного образца с занесением в ФРДО
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/30 hover:shadow-lg hover:border-primary/50 transition-all">
                <CardContent className="p-6 flex items-center gap-6">
                  <Icon name="BookOpen" size={56} className="flex-shrink-0 text-accent" />
                  <div>
                    <h3 className="font-['Montserrat'] font-semibold text-2xl mb-2 text-foreground">
                      Материалы
                    </h3>
                    <p className="text-gray-700 text-xl leading-relaxed">
                      После каждого вебинара: презентации и конспекты. Общий чат для обсуждения с преподавателем
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-blue-50 border-2 border-primary/30">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="PenTool" size={28} className="flex-shrink-0 mt-1 text-primary" />
                    <p className="text-gray-700 text-xl leading-relaxed">
                      <strong>В процессе обучения</strong> вы получите два промежуточных домашних задания на отработку практических навыков психоаналитической диагностики с обратной связью от преподавателя.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ClipboardCheck" size={28} className="flex-shrink-0 mt-1 text-primary" />
                    <p className="text-gray-700 text-xl leading-relaxed">
                      <strong>По итогам курса</strong> обучающиеся проходят тестирование.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="для-кого" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-5xl md:text-6xl mb-12 text-center text-foreground">
            Для кого этот курс
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Icon name="Users" size={40} className="mb-4 text-accent" />
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
                  <Icon name="GraduationCap" size={40} className="mb-4 text-accent" />
                  <h3 className="font-['Montserrat'] font-semibold text-xl mb-4" style={{ color: '#1d4356' }}>
                    Для студентов
                  </h3>
                  <p className="text-gray-700">
                    Обучающиеся психологии, желающие разобраться в психоаналитической диагностике для дальнейшего применения знаний на практике
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12">
              <h3 className="font-['Montserrat'] font-semibold text-4xl mb-8 text-center text-foreground">
                Курс для тех, кто хочет:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Структурировать имеющиеся и получить новые знания об уровнях развития личностной организации',
                  'Разобраться в диагностических критериях психоаналитического подхода',
                  'Уметь определять уровень психического функционирования клиента (невротический, пограничный, психотический, нарциссический) и в соответствии с этим понимать дальнейшую стратегию работы уже на первых сессиях',
                  'Укрепить навыки психоаналитической диагностики на практических примерах и супервизиях в ходе обучения'
                ].map((item, index) => (
                  <Card key={index} className="border-2 border-accent/30 hover:shadow-lg hover:border-accent/50 transition-all">
                    <CardContent className="p-6 flex items-start gap-4">
                      <Icon name="CheckCircle2" size={32} className="flex-shrink-0 mt-1 text-accent" />
                      <p className="text-gray-700 text-xl leading-relaxed">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="программа" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-5xl md:text-6xl mb-12 text-center text-foreground">
            Программа курса
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
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
                <Card key={index} className="border-2 border-primary/20 hover:shadow-lg hover:border-primary/40 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-['Montserrat'] font-bold border-2 border-accent text-accent text-xl"
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-['Montserrat'] font-semibold text-3xl mb-2 text-foreground">
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

      <section id="чему-научишься" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-5xl md:text-6xl mb-12 text-center text-foreground">
            Чему вы научитесь
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
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
                <Card key={index} className="bg-white hover:shadow-xl transition-all hover:scale-105 border-2 border-primary/20">
                  <CardContent className="p-8">
                    <Icon name={item.icon as any} size={56} className="mb-4 text-accent" />
                    <h3 className="font-['Montserrat'] font-semibold text-2xl mb-4 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-xl leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="преподаватель" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-5xl md:text-6xl mb-12 text-center text-foreground">
            Преподаватель
          </h2>
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-primary/30">
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent">
                      <img 
                        src="https://cdn.poehali.dev/files/photo_5377459643875461653_y.jpg"
                        alt="Екатерина Степанова"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Montserrat'] font-bold text-3xl mb-3 text-accent">
                      Екатерина Степанова
                    </h3>
                    <p className="text-gray-700 mb-8 text-2xl">
                      Практикующий психолог с более чем 8-летним опытом
                    </p>
                    <ul className="space-y-5">
                      {[
                        'Супервизор Российской Психотерапевтической Ассоциации (РПА)',
                        'Преподаватель Научно-Образовательного Центра Современных Медицинских Технологий',
                        'Специализация: индивидуальное и семейное консультирование и терапия взрослых и подростков',
                        'Интегративный подход с опорой на психоаналитический'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <Icon name="Award" size={28} className="flex-shrink-0 mt-1 text-accent" />
                          <span className="text-gray-700 text-xl leading-relaxed">{item}</span>
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
          <h2 className="font-['Montserrat'] font-bold text-5xl md:text-6xl mb-12 text-center text-foreground">
            Стоимость и запись
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-accent hover:shadow-2xl transition-all hover:scale-105">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-accent text-white">
                      Ранняя запись
                    </div>
                    <div className="font-['Montserrat'] font-bold text-4xl mb-2" style={{ color: '#1d4356' }}>
                      15 000 ₽
                    </div>
                    <p className="text-gray-600 text-2xl">при оплате 100% до 25.01</p>
                  </div>
                  <Button 
                    className="w-full text-white font-semibold"
                    size="lg"
                    className="bg-accent hover:bg-accent/90"
                    onClick={() => window.open('https://rosmededucation.ru/', '_blank')}
                  >
                    Записаться со скидкой
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-primary text-white">
                      Стандартная цена
                    </div>
                    <div className="font-['Montserrat'] font-bold text-4xl mb-2" style={{ color: '#1d4356' }}>
                      20 000 ₽
                    </div>
                    <p className="text-gray-600 text-2xl">при оплате 100% до 01.02</p>
                  </div>
                  <Button 
                    className="w-full font-semibold"
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
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
          <h2 className="font-['Montserrat'] font-bold text-5xl md:text-6xl mb-12 text-center text-foreground">
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
                  className="border-primary/30"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-['Montserrat'] font-semibold text-left text-foreground">
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

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6 text-white">
            Готовы начать обучение?
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к курсу и получите глубокие знания в области психоаналитической диагностики
          </p>
          <Button 
            size="lg"
            className="bg-accent text-white hover:bg-accent/90 font-semibold text-lg px-8"
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
            <p className="text-gray-500 text-xs mt-2">© 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;