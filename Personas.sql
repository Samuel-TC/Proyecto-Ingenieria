use [django_db]

USE [ejemploCrud]
GO
/****** Object:  Table [dbo].[Persona]    Script Date: 5/14/2022 1:16:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Persona](
	[idPersona] [int] IDENTITY(1,1) NOT NULL,
	[cedula] [varchar](9) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[apellidos] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Persona] PRIMARY KEY CLUSTERED 
(
	[idPersona] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Persona] ON 

INSERT [dbo].[Persona] ([idPersona], [cedula], [nombre], [apellidos]) VALUES (1, N'78220723', N'Maria', N'Perez')
INSERT [dbo].[Persona] ([idPersona], [cedula], [nombre], [apellidos]) VALUES (2, N'42322056', N'Luis', N'Mora')
SET IDENTITY_INSERT [dbo].[Persona] OFF
GO