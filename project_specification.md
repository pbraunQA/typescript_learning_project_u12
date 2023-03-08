Lastenheft: Umschulungsverwaltungssyst 

Zielsetzung 
Das Ziel des Projekts ist die Entwicklung eines webbasierten Umschulungsverwaltungssystems für die effektive Organisation und Verwaltung von Umschulungsmaßnahmen. Das System soll den Prozess der Umschulungsverwaltung erleichtern und optimieren. 
Funktionale Anforderungen 
Teilnehmerverwaltung 
· Das System soll die Verwaltung von Teilnehmern ermöglichen, einschließlich der Erfassung von persönlichen Daten, Schulungshistorie und Anwesenheit. 
· Jeder Teilnehmer soll mit einer eindeutigen Teilnehmernummer identifiziert werden. 
· Das System soll die Anwesenheit der Teilnehmer automatisch erfassen und die Möglichkeit bieten, die Anwesenheitsliste manuell zu bearbeiten. 
· Wenn ein Teilnehmer mehr als 20% Abwesenheit hat, soll eine Warnung erscheinen, dass zu viele Fehlzeiten den Erfolg der Umschulung gefährden können. 

Unterrichtsplanung 
· Das System soll die Planung von Unterrichtseinheiten ermöglichen, einschließlich Datum, Uhrzeit, Unterrichtsmethode und verwendeten Materialien. 
· Der Unterrichtsablauf soll wie folgt sein: 

MO-DO: 
08:00-09:30 Unterrichtseinheit1, 
09:30-09:45 Pause, 
09:45-11:00 Unterrichtseinheit2, 
11:00-11:15 Pause, 
11:15-12:30 Unterrichtseinheit3, 
12:30-13:00 PAUSE Mittag, 
13:00-15:00 Selbstlernphase der Teilnehmer, 
15:00-16:00 Unterrichtseinheit4, 

FR: 
08:00-09:30 Klausur zur Woche (LEK/LSE), 
09:45-10:00 Pause, 
10:00-11:45 Unterrichtseinheit2, 

· Für jede Unterrichtseinheit soll im Klassenbuch festgehalten werden, was wann mit welcher Methode unterrichtet wurde. 
Usability 
· Die Usability-Anforderungen sollen von den Teilnehmern geplant und erarbeitet werden, wobei der Ausbilder das Lastenheft vorbereitet. 
· Die Teilnehmer sollen im Gespräch mit dem Ausbilder wie bei einem echten Projekt Pflichtenheft erarbeiten. Diese sollte dann auch Mockups zur Usability enthalten. 
Wochenberichte 
· Das System soll pro Gruppe und pro Teilnehmer die Möglichkeit bieten, Wochenberichte zu generieren. 
· Die Generierung der Wochenberichte soll über den Administrations-Bereich per Knopfdruck angestoßen werden. 
Server und Netzwerk 
· Das System soll auf einem Server mit Hyper-V laufen, der genügend Ressourcen zur Virtualisierung bereitstellt. 
· Das System soll an das Firmennetzwerk angebunden sein. 



Nichtfunktionale Anforderungen 
Sicherheit 
Das System soll sicher sein und vertrauliche Daten schützen, einschließlich persönlicher Daten der Teilnehmer. 
Benutzerfreundlichkeit 
Die Anwendung soll benutzerfreundlich gestaltet sein und eine intuitive Bedienung ermöglichen. Folgende Aspekte sind hierbei zu berücksichtigen: 
· Übersichtliche Navigation: Die Anwendung soll über eine klare und übersichtliche Navigation verfügen, damit die Nutzer schnell zu den benötigten Funktionen gelangen können. 
· Konsistente Benutzeroberfläche: Die Benutzeroberfläche der Anwendung soll konsistent gestaltet sein, um eine einheitliche Nutzererfahrung zu gewährleisten. 
· Einfache Eingabe von Daten: Die Eingabe von Daten soll einfach und schnell möglich sein. Hierbei ist darauf zu achten, dass die Nutzer bei der Eingabe von Daten unterstützt werden, z.B. durch automatische Vervollständigung von Eingabefeldern. 
· Vermeidung von Redundanzen: Die Anwendung soll so gestaltet sein, dass die Nutzer keine redundanten Informationen eingeben müssen und dadurch Zeit und Aufwand sparen. 
· Hilfe und Dokumentation: Die Anwendung soll über eine ausführliche Dokumentation verfügen, um den Nutzern bei Problemen oder Fragen schnell und einfach weiterhelfen zu können. 
Generierung von Wochenberichten 
Die Anwendung soll in der Lage sein, Wochenberichte für jede Gruppe und jeden Teilnehmer zu generieren. Die Wochenberichte sollen auf Grundlage der im Klassenbuch erfassten Unterrichtseinheiten erstellt werden und eine Übersicht über die erlernten Themen sowie die erreichten Lernziele bieten. Die Generierung der Wochenberichte soll über den Administrations-Bereich per Knopfdruck angestoßen werden können. 
Anwesenheitskontrolle 
Die Anwendung soll eine Anwesenheitskontrolle für die Teilnehmer bereitstellen. Jeder Teilnehmer soll seine Anwesenheit einsehen können. Bei mehr als 20% Abwesenheit soll eine Warnung erscheinen, dass mit zu vielen Fehlzeiten der Erfolg der Umschulung gefährdet ist. 
Systemanforderungen 
Die Anwendung soll auf einem Server laufen, auf dem ein Hyper-V läuft und ausreichend Ressourcen zur Virtualisierung zur Verfügung stehen. Die Anbindung zum Firmennetzwerk ist gegeben. 
Kosten 
Die Umschulung der Teilnehmer wird über das Arbeitsamt finanziert. Das Projekt soll keine zusätzlichen Kosten für den Umschulungsbetrieb verursachen. 

Sonstige Anforderungen 
· Die Anwendung soll barrierefrei gestaltet sein und auch von Menschen mit Behinderungen genutzt werden können. 
· Die Anwendung soll für die Nutzung auf mobilen Endgeräten optimiert sein. 
· Die Anwendung soll sicherheitskritische Daten verschlüsseln und schützen. 
· Die Anwendung soll regelmäßig aktualisiert und gewartet werden, um einen reibungslosen Betrieb zu gewährleisten. 
· Die Anwendung soll eine automatische Datensicherung durchführen, um Datenverlust zu vermeiden. 