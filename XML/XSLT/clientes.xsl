<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="//clientes" name="clientes" >
        <html lang="es">
            <head>
                <meta charset="utf-8"/>
                <title>Clientes de Empresa S.L.</title>
                <meta name="description" content="HTML5"/>
                <meta name="author" content="Miguel A. Tomás"/>
                <link rel="stylesheet" href="css/estilos.css"/>
                <link rel="shortcut icon" href="favicon.ico"/>
            </head>
            <body>
                <h1><xsl:value-of select="//cliente/titulo" /></h1>
                <xsl:for-each select ="//cliente">
                    <p>Nombre del Cliente: <xsl:value-of select="./nombre" /></p>
                    <p>Apellidos del Cliente: <xsl:value-of select="./apellidos" /></p>
                    <p>Dirección: <xsl:value-of select="./direccion/calle" /></p>
                    <xsl:if test="edad &gt; 40">
                        <p>Edad: <xsl:value-of select="./edad" /></p>
                    </xsl:if>
                    <xsl:choose>
                        <xsl:when test="edad &lt; 20">
                            <p>Niño</p>
                        </xsl:when>
                        <xsl:when test="(edad &lt; 40) and (edad &gt; 20)">
                            <p>Adulto</p>
                        </xsl:when>
                        <xsl:otherwise>
                            <p>Carroza</p>
                        </xsl:otherwise>
                    </xsl:choose>
                    <table>
                        <xsl:for-each select ="./telefono">
                            <tr><td><xsl:value-of select="." /></td></tr>
                        </xsl:for-each>
                    </table>

                </xsl:for-each>
                <p>Los más pastosillos son</p>
                <ol>
                <xsl:for-each select ="//cliente">
                    <xsl:sort select="patrimonio" data-type="number" order="descending"/>


                        <li><xsl:value-of select="./nombre"/>:<xsl:value-of select="./patrimonio"/></li>

                </xsl:for-each>
                </ol>
            </body>
        </html>

    </xsl:template>
</xsl:stylesheet>