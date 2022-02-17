export default new function()
{
    //相加
    this.Add=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值相加
        if (isNumber && isNumber2) return data+data2;

        //都是数组相加
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( !isNaN(data[i]) && !isNaN(data2[i]) ) result[i]=data[i]+data2[i];
                }
            }

            return result;
        }

        //单数据和数组相加
        let value;
        let aryData;
        if (isNumber)
        {
            value=data;
            aryData=data2;
        }
        else
        {
            value=data2;
            aryData=data;
        }

        for(let i in aryData)
        {
            result[i]=null;
            if (!isNaN(aryData[i]) && !isNaN(value)) result[i]=value+aryData[i];
        }

        return result;
    }

    //相减
    this.Subtract=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值相减
        if (isNumber && isNumber2) return data-data2;

        //都是数组相减
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( !isNaN(data[i]) && !isNaN(data2[i]) ) result[i]=data[i]-data2[i];
                }
            }

            return result;
        }

        if (isNumber)   //单数据-数组
        {
            for(let i in data2)
            {
                result[i]=null;
                if (!isNaN(data) && !isNaN(data2[i])) result[i]=data-data2[i];
            }
        }
        else            //数组-单数据
        {
            for(let i in data)
            {
                result[i]=null;
                if (!isNaN(data[i]) && !isNaN(data2)) result[i]=data[i]-data2;
            }
        }

        return result;
    }

    //相乘
    this.Multiply=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值相乘
        if (isNumber && isNumber2) return data*data2;

        //都是数组相乘
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( !isNaN(data[i]) && !isNaN(data2[i]) ) result[i]=data[i]*data2[i];
                }
            }

            return result;
        }

        //单数据和数组相乘
        let value;
        let aryData;
        if (isNumber)
        {
            value=data;
            aryData=data2;
        }
        else
        {
            value=data2;
            aryData=data;
        }

        for(let i in aryData)
        {
            result[i]=null;
            if (!isNaN(aryData[i]) && !isNaN(value)) result[i]=value*aryData[i];
        }

        return result;
    }

    //相除
    this.Divide=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值相除
        if (isNumber && isNumber2)
        {
            if (data2==0) return null;  //除0判断
            return data/data2;
        }

        //都是数组相除
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( this.IsNumber(data[i]) && this.IsDivideNumber(data2[i]) ) result[i]=data[i]/data2[i];
                }
            }

            return result;
        }

        if (isNumber)   //单数据-数组
        {
            for(let i in data2)
            {
                result[i]=null;
                if ( this.IsNumber(data) && this.IsDivideNumber(data2[i]) ) result[i]=data/data2[i];
            }
        }
        else            //数组-单数据
        {
            for(let i in data)
            {
                result[i]=null;
                if ( this.IsNumber(data[i]) && this.IsDivideNumber(data2) ) result[i]=data[i]/data2;
            }
        }

        return result;

    }

    //大于
    this.GT=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值比较
        if (isNumber && isNumber2) return (data>data2 ? 1 : 0);

        //都是数组比较
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( !isNaN(data[i]) && !isNaN(data2[i]) ) result[i]=(data[i]>data2[i] ? 1:0);
                }
            }

            return result;
        }

        if (isNumber)   //单数据-数组
        {
            for(let i in data2)
            {
                result[i]=null;
                if ( !isNaN(data) && !isNaN(data2[i]) ) result[i]=(data>data2[i] ? 1 : 0);
            }
        }
        else            //数组-单数据
        {
            for(let i in data)
            {
                result[i]=null;
                if ( !isNaN(data[i]) && !isNaN(data2) ) result[i]=(data[i]>data2 ? 1 : 0);
            }
        }

        return result;
    }

    //大于等于
    this.GTE=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值比较
        if (isNumber && isNumber2) return (data>=data2 ? 1 : 0);

        //都是数组比较
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( !isNaN(data[i]) && !isNaN(data2[i]) ) result[i]=(data[i]>=data2[i] ? 1:0);
                }
            }

            return result;
        }

        if (isNumber)   //单数据-数组
        {
            for(let i in data2)
            {
                result[i]=null;
                if ( !isNaN(data) && !isNaN(data2[i]) ) result[i]=(data>=data2[i] ? 1 : 0);
            }
        }
        else            //数组-单数据
        {
            for(let i in data)
            {
                result[i]=null;
                if ( !isNaN(data[i]) && !isNaN(data2) ) result[i]=(data[i]>=data2 ? 1 : 0);
            }
        }

        return result;
    }

    //小于
    this.LT=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值比较
        if (isNumber && isNumber2) return (data>=data2 ? 1 : 0);

        //都是数组比较
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( !isNaN(data[i]) && !isNaN(data2[i]) ) result[i]=(data[i]<data2[i] ? 1:0);
                }
            }

            return result;
        }

        if (isNumber)   //单数据-数组
        {
            for(let i in data2)
            {
                result[i]=null;
                if ( !isNaN(data) && !isNaN(data2[i]) ) result[i]=(data<data2[i] ? 1 : 0);
            }
        }
        else            //数组-单数据
        {
            for(let i in data)
            {
                result[i]=null;
                if ( !isNaN(data[i]) && !isNaN(data2) ) result[i]=(data[i]<data2 ? 1 : 0);
            }
        }

        return result;
    }

    //小于等于
    this.LTE=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值比较
        if (isNumber && isNumber2) return (data>=data2 ? 1 : 0);

        //都是数组比较
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( !isNaN(data[i]) && !isNaN(data2[i]) ) result[i]=(data[i]<=data2[i] ? 1:0);
                }
            }

            return result;
        }

        if (isNumber)   //单数据-数组
        {
            for(let i in data2)
            {
                result[i]=null;
                if ( !isNaN(data) && !isNaN(data2[i]) ) result[i]=(data<=data2[i] ? 1 : 0);
            }
        }
        else            //数组-单数据
        {
            for(let i in data)
            {
                result[i]=null;
                if ( !isNaN(data[i]) && !isNaN(data2) ) result[i]=(data[i]<=data2 ? 1 : 0);
            }
        }

        return result;
    }

    //等于
    this.EQ=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值比较
        if (isNumber && isNumber2) return (data==data2 ? 1 : 0);

        //都是数组比较
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( !isNaN(data[i]) && !isNaN(data2[i]) ) result[i]=(data[i]==data2[i] ? 1:0);
                }
            }

            return result;
        }

        if (isNumber)   //单数据-数组
        {
            for(let i in data2)
            {
                result[i]=null;
                if ( !isNaN(data) && !isNaN(data2[i]) ) result[i]=(data==data2[i] ? 1 : 0);
            }
        }
        else            //数组-单数据
        {
            for(let i in data)
            {
                result[i]=null;
                if ( !isNaN(data[i]) && !isNaN(data2) ) result[i]=(data[i]==data2 ? 1 : 0);
            }
        }

        return result;
    }

    //AND  &&
    this.And=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值 &&
        if (isNumber && isNumber2) return (data && data2 ? 1 : 0);

        //都是数组 &&
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( !isNaN(data[i]) && !isNaN(data2[i]) ) result[i]=(data[i] && data2[i] ? 1:0);
                }
            }

            return result;
        }

        if (isNumber)   //单数据-数组
        {
            for(let i in data2)
            {
                result[i]=null;
                if ( !isNaN(data) && !isNaN(data2[i]) ) result[i]=(data && data2[i] ? 1 : 0);
            }
        }
        else            //数组-单数据
        {
            for(let i in data)
            {
                result[i]=null;
                if ( !isNaN(data[i]) && !isNaN(data2) ) result[i]=(data[i] && data2 ? 1 : 0);
            }
        }

        return result;
    }

    //OR  ||
    this.Or=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值 &&
        if (isNumber && isNumber2) return (data || data2 ? 1 : 0);

        //都是数组 &&
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( !isNaN(data[i]) && !isNaN(data2[i]) ) result[i]=(data[i] || data2[i] ? 1:0);
                }
            }

            return result;
        }

        if (isNumber)   //单数据-数组
        {
            for(let i in data2)
            {
                result[i]=null;
                if ( !isNaN(data) && !isNaN(data2[i]) ) result[i]=(data || data2[i] ? 1 : 0);
            }
        }
        else            //数组-单数据
        {
            for(let i in data)
            {
                result[i]=null;
                if ( !isNaN(data[i]) && !isNaN(data2) ) result[i]=(data[i] || data2 ? 1 : 0);
            }
        }

        return result;
    }

    this.IF=function(data,trueData,falseData)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(trueData)=='number';
        let isNumber3=typeof(falseData)=='number';

        //单数值
        if (isNumber)
        {
            if (isNumber2 && isNumber3) return data?trueData:falseData;

            return data? trueData:falseData;
        }

        //都是数组
        let result=[];
        for(let i in data)
        {
            if (data[i])
            {
                if (isNumber2) result[i]=trueData;
                else result[i]=trueData[i];
            }
            else
            {
                if (isNumber3) result[i]=falseData;
                else result[i]=falseData[i];
            }
        }

        return result;
    }

    //指标函数 函数名全部大写
    this.REF=function(data,n)
    {
        let result=[];
        if (typeof(n)=='number')
        {
            if (data.length<=0) return result;
            if (n>=data.length) return result;

            result=data.slice(0,data.length-n);

            for(let i=0;i<n;++i)
                result.unshift(null);
        }
        else    //n 为数组的情况
        {
            for(let i=0;i<data.length;++i)
            {
                result[i]=null;
                if (i>=n.length) continue;
                var value=n[i];
                if (value>0 && value<=i) result[i]=data[i-value];
                else if (i) result[i]=result[i-1];
                else result[i]=data[i];
            }
        }

        return result;

    }

    this.MAX=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值
        if (isNumber && isNumber2) return Math.max(data,data2);

        //都是数组
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( !isNaN(data[i]) && !isNaN(data2[i]) ) result[i]=Math.max(data[i], data2[i]);
                }
            }

            return result;
        }

        if (isNumber)   //单数据-数组
        {
            for(let i in data2)
            {
                result[i]=null;
                if ( !isNaN(data) && !isNaN(data2[i]) ) result[i]=Math.max(data, data2[i]);
            }
        }
        else            //数组-单数据
        {
            for(let i in data)
            {
                result[i]=null;
                if ( !isNaN(data[i]) && !isNaN(data2) ) result[i]=Math.max(data[i], data2);
            }
        }

        return result;
    }

    this.MIN=function(data,data2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(data2)=='number';

        //单数值
        if (isNumber && isNumber2) return Math.min(data,data2);

        //都是数组
        let result=[];
        if (!isNumber && !isNumber2)
        {
            let count=Math.max(data.length, data2.length);
            for(let i=0;i<count;++i)
            {
                result[i]=null; //初始化

                if (i<data.length && i<data2.length)
                {
                    if ( !isNaN(data[i]) && !isNaN(data2[i]) ) result[i]=Math.min(data[i], data2[i]);
                }
            }

            return result;
        }

        if (isNumber)   //单数据-数组
        {
            for(let i in data2)
            {
                result[i]=null;
                if ( !isNaN(data) && !isNaN(data2[i]) ) result[i]=Math.min(data, data2[i]);
            }
        }
        else            //数组-单数据
        {
            for(let i in data)
            {
                result[i]=null;
                if ( !isNaN(data[i]) && !isNaN(data2) ) result[i]=Math.min(data[i], data2);
            }
        }

        return result;
    }

    //取正数
    this.ABS=function(data)
    {
        let result=[];

        for(let i in data)
        {
            result[i]=null;
            if (!isNaN(data[i])) result[i]=Math.abs(data[i]);
        }

        return result;
    }

    this.MA=function(data,dayCount)
    {
        if (dayCount<=0) dayCount=1;

        let result=[];
        if (!data || !data.length) return result;

        for(var i=0;i<data.length;++i)
        {
            result[i]=null;
            if (this.IsNumber(data[i])) break;
        }

        var data=data.slice(0); //复制一份数据出来
        for(var days=0;i<data.length;++i,++days)
        {
            if (days<dayCount-1)
            {
                result[i]=null;
                continue;
            }

            let preValue=data[i-(dayCount-1)];
            let sum=0;
            for(let j=dayCount-1;j>=0;--j)
            {
                var value=data[i-j];
                if (!this.IsNumber(value))
                {
                    value=preValue;  //空数据就取上一个数据
                    data[i-j]=value;
                }
                else
                {
                    preValue=value;
                }
                sum+=value;
            }

            result[i]=sum/dayCount;
        }

        return result;
    }

    //指数平均数指标 EMA(close,10)
    this.EMA=function(data,dayCount)
    {
        var result = [];

        var offset=0;
        if (offset>=data.length) return result;

        //取首个有效数据
        for(;offset<data.length;++offset)
        {
            if (data[offset]!=null && !isNaN(data[offset]))
                break;
        }

        var p1Index=offset;
        var p2Index=offset+1;

        result[p1Index]=data[p1Index];
        for(var i=offset+1;i<data.length;++i,++p1Index,++p2Index)
        {
            result[p2Index]=((2*data[p2Index]+(dayCount-1)*result[p1Index]))/(dayCount+1);
        }

        return result;
    }

    /*
        SMA 移动平均
        返回移动平均。
        用法：　SMA(X，N，M)　X的M日移动平均，M为权重，如Y=(X*M+Y'*(N-M))/N
    */
    this.SMA=function(data,n,m)
    {
        var result = [];

        var i=0;
        var lastData=null;
        for(;i<data.length; ++i)
        {
            if (data[i]==null || isNaN(data[i])) continue;
            lastData=data[i];
            result[i]=lastData; //第一天的数据
            break;
        }

        for(++i;i<data.length;++i)
        {
            result[i]=(m*data[i]+(n-m)*lastData)/n;
            lastData=result[i];
        }

        return result;
    }

    /*
    求动态移动平均.
    用法: DMA(X,A),求X的动态移动平均.
    算法: 若Y=DMA(X,A)则 Y=A*X+(1-A)*Y',其中Y'表示上一周期Y值,A必须小于1.
    例如:DMA(CLOSE,VOL/CAPITAL)表示求以换手率作平滑因子的平均价
    */
    this.DMA=function(data,data2)
    {
        var result = [];
        if (data.length<0 || data.length!=data2.length) return result;

        var index=0;
        for(;index<data.length;++index)
        {
            if (data[index]!=null && !isNaN(data[index]) && data2[index]!=null && !isNaN(data2[index]))
            {
                result[index]=data[index];
                break;
            }
        }

        for(index=index+1;index<data.length;++index)
        {
            if (data[index]==null || data2[index]==null)
                result[index]=null;
            else
            {
                if (data[index]<1)
                    result[index]=(data2[index]*data[index])+(1-data2[index])*result[index-1];
                else
                    result[index]= data[index];
            }
        }

        return result;
    }

    /*
    加权移动平均
    返回加权移动平均
    用法:EXPMA(X,M):X的M日加权移动平均
    EXPMA[i]=buffer[i]*para+(1-para)*EXPMA[i-1] para=2/(1+__para)
    */
    this.EXPMA=function(data,dayCount)
    {
        let result=[];
        if (dayCount>=data.length) return result;

        let i=dayCount;
        for(;i<data.length;++i) //获取第1个有效数据
        {
            if (data[i]!=null)
            {
                result[i]=data[i];
                break;
            }
        }

        for (i=i+1; i < data.length; ++i)
        {
            if (result[i-1]!=null && data[i]!=null)
                result[i]=(2*data[i]+(dayCount-1)*result[i-1])/(dayCount+1);
            else if (result[i-1]!=null)
                result[i]=result[i-1];
        }

        return result;
    }

    //加权平滑平均,MEMA[i]=SMA[i]*para+(1-para)*SMA[i-1] para=2/(1+__para)
    this.EXPMEMA=function(data,dayCount)
    {
        var result=[];
        if (dayCount>=data.length) return result;

        var index=0;
        for(;index<data.length;++index)
        {
            if (data[index] && !isNaN(data[index])) break;
        }

        var sum=0;
        for(var i=0; index<data.length && i<dayCount;++i, ++index)
        {
            if (data[index] && !isNaN(data[index]))
                sum+=data[index];
            else
                sum+=data[index-1];
        }

        result[index-1]=sum/dayCount;
        for(;index<data.length;++index)
        {
            if(result[index-1]!=null && data[index]!=null)
                result[index]=(2*data[index]+(dayCount-1)*result[index-1])/(dayCount+1);
            else if(result[index-1]!=null)
                result[index] = result[index-1];
        }

        return result;
    }

    this.COUNT=function(data,n)
    {
        let result=[];

        for(let i=0; i<data.length; ++i)
        {
            let count=0;
            for(let j=0;j<n && i-j>=0;++j)
            {
                if (data[i-j]) ++count;
            }

            result[i]=count;
        }

        return result;
    }

    /*
    HHV 最高值
    求最高值。
    用法：　HHV(X，N)　求N周期内X最高值，N=0则从第一个有效值开始。
    例如：　HHV(HIGH,30)　表示求30日最高价。
    */
    this.HHV=function(data,n)
    {
        let result = [];
        if (Array.isArray(n))
        {
            var max=null;
            for(var i=0,j=0;i<data.length;++i)
            {
                result[i]=null;
                if (i>=n.length) continue;

                max=null;
                var count=n[i];
                if (count>0 && count<=i)
                {
                    for(j=i-count;j<=i;++j)
                    {
                        if (max==null || max<data[j]) max=data[j];
                    }
                }
                else
                {
                    count=i;
                    for(j=0;j<=i;++j)
                    {
                        if (max==null || max<data[j]) max=data[j];
                    }
                }

                result[i]=max;
            }
        }
        else
        {
            if (n>data.length) return result;
            if (n<=0) n=data.length-1;

            var max=null;
            for(var i=n,j=0;i<data.length;++i,++j)
            {
                if(max==null || i<n+max)
                {
                    max=data[i]<data[max]?max:i;
                }
                else
                {
                    for(j=(max=i-n+1)+1;j<=i;++j)
                    {
                        if(data[j]>data[max])
                            max = j;
                    }
                }

                result[i] = data[max];
            }
        }

        return result;
    }

    /*
    LLV 最低值
    求最低值。
    用法：　LLV(X，N)　求N周期内X最低值，N=0则从第一个有效值开始。
    例如：　LLV(LOW，0)　表示求历史最低价。
    */
    this.LLV=function(data,n)
    {
        var result = [];
        if (Array.isArray(n))
        {
            for(var i=0;i<data.length;++i)
            {
                result[i]=null;
                if (i>=n.length) continue;

                var min=null;
                var count=n[i];
                if (count>0 && count<=i)
                {
                    for(var j=i-count;j<=i;++j)
                    {
                        if (min==null || min>data[j]) min=data[j];
                    }
                }
                else
                {
                    count=i;
                    for(var j=0;j<=i;++j)
                    {
                        if (min==null || min>data[j]) min=data[j];
                    }
                }

                result[i]=min;
            }
        }
        else
        {
            if (n>data.length) return result;
            if (n<=0) n=data.length-1;

            var min=null;
            for(var i=n;i<data.length;++i,++j)
            {
                if(min==null || i<n+min)    //最小值是否在当前周期里面
                {
                    min=data[i]>data[min]?min:i;
                }
                else
                {
                    for(var j=(min=i-n+1)+1;j<=i;++j)
                    {
                        if(data[j]<data[min])
                            min = j;
                    }
                }
                result[i] = data[min];
            }
        }

        return result;
    }

    this.STD=function(data,n)
    {
        var result=[];

        var total=0;
        var averageData=[]; //平均值
        for(var i=n-1;i<data.length;++i)
        {
            total=0;
            for(var j=0;j<n;++j)
            {
                total+=data[i-j];
            }

            averageData[i]=total/n;
        }

        for(var i=n-1;i<data.length;++i)
        {
            total=0;
            for(var j=0;j<n;++j)
            {
                total+=Math.pow((data[i-j]-averageData[i]),2);
            }

            result[i]=Math.sqrt(total/n);
        }


        return result;
    }

    //平均绝对方差
    this.AVEDEV=function(data,n)
    {
        var result=[];

        var total=0;
        var averageData=[]; //平均值
        for(var i=n-1;i<data.length;++i)
        {
            total=0;
            for(var j=0;j<n;++j)
            {
                total+=data[i-j];
            }

            averageData[i]=total/n;
        }

        for(var i=n-1;i<data.length;++i)
        {
            total=0;
            for(var j=0;j<n;++j)
            {
                total+=Math.abs(data[i-j]-averageData[i]);
            }

            result[i]=total/n;
        }


        return result;
    }

    //上穿
    this.CROSS=function(data,data2)
    {
        var result=[];

        if (Array.isArray(data) && Array.isArray(data2))
        {
            if (data.length!=data2.length) return result=[];

            var index=0;
            for(;index<data.length;++index)
            {
                if (this.IsNumber(data[index])  && this.IsNumber(data2[index]))
                    break;
            }

            for(++index;index<data.length;++index)
            {
                result[index]= (data[index]>data2[index] && data[index-1]<data2[index-1]) ? 1:0;
            }
        }
        else if (Array.isArray(data) && typeof(data2)=='number')
        {
            var index=0;
            for(;index<data.length;++index)
            {
                if (this.IsNumber(data[index])) break;
            }

            for(++index;index<data.length;++index)
            {
                result[index]= (data[index]>data2 && data[index-1]<data2) ? 1:0;
            }
        }
        else if (typeof(data)=='number' && Array.isArray(data2))
        {
            var index=0;
            for(;index<data2.length;++index)
            {
                if (this.IsNumber(data2[index])) break;
            }

            for(++index;index<data2.length;++index)
            {
                result[index]= (data2[index]>data && data2[index-1]<data) ? 1:0;
            }
        }

        return result;
    }

    //累乘
    this.MULAR=function(data,n)
    {
        var result=[];
        if(data.length<n) return result;

        var index=n;
        for(;index<data.length;++index)
        {
            if (data[index]!=null && !isNaN(data[index]))
            {
                result[index]=data[index];
                break;
            }
        }

        for(++index;index<data.length;++index)
        {
            result[index]=result[index-1]*data[index];
        }

        return result;
    }

    this.SUM=function(data,n)
    {
        var result=[];

        if (n==0)
        {
            result[0]=data[0];

            for (var i=1; i<data.length; ++i)
            {
                result[i] = result[i-1]+data[i];
            }
        }
        else
        {
            for(var i=n-1,j=0;i<data.length;++i,++j)
            {
                for(var k=0;k<n;++k)
                {
                    if (k==0) result[i]=data[k+j];
                    else result[i]+=data[k+j];
                }
            }
        }

        return result;
    }

    /*
        BARSCOUNT 有效数据周期数
        求总的周期数。
        用法：　BARSCOUNT(X)　第一个有效数据到当前的天数。
        例如：　BARSCOUNT(CLOSE)　对于日线数据取得上市以来总交易日数，对于分笔成交取得当日成交笔数，对于1分钟线取得当日交易分钟数。
    */
    this.BARSCOUNT=function(data)
    {
        let result=[];
        let days=null;
        for(let i in data)
        {
            result[i]=0;
            if (days==null)
            {
                if (!this.IsNumber(data[i])) contnue;

                days=0;
            }

            result[i]=days;
            ++days;
        }

        return result;
    }

    //DEVSQ 数据偏差平方和
    //DEVSQ(X，N) 　返回数据偏差平方和。
    this.DEVSQ=function(data,n)
    {
        var result=[];
        if (typeof(n)!='number') n=parseInt(n); //字符串的转成数值型
        var num = n;
        var datanum = data.length;
        var i = 0, j = 0, k = 0;
        var E = 0, DEV = 0;
        for(i = 0; i < datanum && !this.isNumber(data[i]); ++i)
        {
            result[i] = null;
        }
        if (num < 1 || i+num>datanum) return result;
        for(E=0; i < datanum && j < num; ++i,++j)
            E += data[i]/num;
        if (j == num)
        {
            DEV = 0;
            for(i--; k < num; k++)
                DEV += (data[i-k]-E) * (data[i-k]-E);
            result[i] = DEV;
            i++;
        }
        for(; i < datanum; ++i)
        {
            E += (data[i] - data[i-num]) / num;
            for(DEV=0, k = 0; k < num; ++k)
                DEV += (data[i-k]-E) * (data[i-k]-E);
            result[i] = DEV;
        }
        return result;
    }

    //NOT 取反
    //求逻辑非。
    //用法：　NOT(X)　返回非X，即当X=0时返回1，否则返回0。
    //例如：　NOT(ISUP)　表示平盘或收阴。
    this.NOT=function(data)
    {
        let isNumber=typeof(data)=='number';
        if (isNumber) return data? 0:1;

        let result=[];
        for(let i in data)
        {
            result[i]=null;
            if (this.IsNumber(data[i])) result[i]=data[i]?0:1;
        }

        return result;
    }

    //FORCAST 线性回归预测值
    //FORCAST(X，N)　 返回线性回归预测值。
    this.FORCAST=function(data,n)
    {
        var result=[];
        if (typeof(n)!='number') n=parseInt(n); //字符串的转成数值型
        var num = n;
        var datanum = data.length;
        if (num < 1 || num >= datanum)
            return result;
        var Ex = 0, Ey = 0, Sxy = 0, Sxx = 0, Const, Slope;
        var i, j;
        for(j = 0; j < datanum && !this.isNumber(data[j]); ++j)
        {
            result[j] = null;
        }
        for(i = j+num-1; i < datanum; ++i)
        {
            Ex = Ey = Sxy = Sxx = 0;
            for(j = 0; j < num && j <= i; ++j)
            {
                Ex += (i - j);
                Ey += data[i - j];
            }
            Ex /= num;
            Ey /= num;
            for(j = 0; j < num && j <= i; ++j)
            {
                Sxy += (i-j-Ex)*(data[i-j]-Ey);
                Sxx += (i-j-Ex)*(i-j-Ex);
            }
            Slope = Sxy / Sxx;
            Const = (Ey - Ex*Slope) / num;
            result[i] = Slope * num + Const;
        }
    }

    //SLOPE 线性回归斜率
    //SLOPE(X，N)　 返回线性回归斜率。
    this.SLOPE=function(data,n)
    {
        let result=[];
        if (typeof(n)!='number') n=parseInt(n); //字符串的转成数值型
        if (n<1 || !data.length) return result;
        if (n>=data.length) return result;

        let start=0;
        for(let i=0;i<data.length;++i,++start)
        {
            result[i]=null;
            if (this.IsNumber(data[i])) break;
        }

        let x,y,xy,xx;
        for(let i=start+n-1;i<data.length;++i)
        {
            result[i]=null;
            x=y=xy=xx=0;
            for(var j=0;j<n && j<=i; ++j)
            {
                x+=(i-j);       //数据索引相加
                y+=data[i-j];   //数据相加
            }

            x=x/n; y=y/n;
            for(j=0;j<n && j<=i; ++j)
            {
                xy+=(i-j-x)*(data[i-j]-y);
                xx+=(i-j-x)*(i-j-x);
            }

            if (xx) result[i]= xy/xx;
            else if (i) result[i]=result[i-1];
        }

        return result;
    }

    //STDP 总体标准差
    //STDP(X，N)　 返回总体标准差。
    this.STDP=function(data,n)
    {
        var result=[];
        if (typeof(n)!='number') n=parseInt(n); //字符串的转成数值型
        var num = n;
        var datanum = data.length;
        if (num < 1 || num >= datanum)
            return result;
        var i = 0, j = 0;
        for(i = 0; i < datanum && !this.isNumber(data[i]); ++i)
        {
            result[i] = null;
        }
        var SigmaPowerX = 0, SigmaX = 0, MidResult;
        for (; i < datanum && j < num; ++i, ++j)
        {
            SigmaPowerX += data[i] * data[i];
            SigmaX += data[i];
        }
        if (j == num)
        {
            MidResult = num*SigmaPowerX - SigmaX*SigmaX;
            result[i-1] = Math.sqrt(MidResult) / num;
        }
        for(; i < datanum; ++i)
        {
            SigmaPowerX += data[i]*data[i] - data[i-num]*data[i-num];
            SigmaX += data[i] - data[i-num];
            MidResult = num*SigmaPowerX - SigmaX*SigmaX;
            result[i] = Math.sqrt(MidResult) / num;
        }
    }

    //VAR 估算样本方差
    //VAR(X，N)　 返回估算样本方差。
    this.VAR=function(data,n)
    {
        var result=[];
        if (typeof(n)!='number') n=parseInt(n); //字符串的转成数值型
        var num = n;
        var datanum = data.length;
        if (num <= 1 || num >= datanum)
            return result;
        var i, j;
        for(i = 0; i < datanum && !this.IsNumber(data[i]); ++i)
        {
            result[i] = null;
        }
        var SigmaPowerX, SigmaX;
        for (j = 0, i = i+num-1; i < datanum; ++i)
        {
            SigmaPowerX = SigmaX = 0;
            for(j=0; j < num && j <= i; ++j)
            {
                SigmaPowerX += data[i-j] * data[i-j];
                SigmaX += data[i-j];
            }
            result[i] = (num*SigmaPowerX - SigmaX*SigmaX) / num * (num -1);
        }

        return result;
    }

    //VARP 总体样本方差
    //VARP(X，N)　 返回总体样本方差 。
    this.VARP=function(data,n)
    {
        var result=[];
        if (typeof(n)!='number') n=parseInt(n); //字符串的转成数值型
        var num = n;
        var datanum = data.length;
        if (num < 1 || num >= datanum)
            return result;
        var i = 0, j = 0;
        for(i = 0; i < datanum && !this.IsNumber(data[i]); ++i)
        {
            result[i] = null;
        }
        var SigmaPowerX = 0, SigmaX = 0;
        for (; i < datanum && j < num; ++i, ++j)
        {
            SigmaPowerX += data[i] * data[i];
            SigmaX += data[i];
        }
        if (j == num)
            result[i-1] = (num*SigmaPowerX - SigmaX*SigmaX) / (num*num);
        for(; i < datanum; ++i)
        {
            SigmaPowerX += data[i]*data[i] - data[i-num]*data[i-num];
            SigmaX += data[i] - data[i-num];
            result[i] = (num*SigmaPowerX - SigmaX*SigmaX) / (num*num);
        }

        return result;
    }

    //RANGE(A,B,C)表示A>B AND A<C;
    this.RANGE=function(data,range,range2)
    {
        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(range)=='number';
        let isNumber3=typeof(range2)=='number';

        if (isNumber && isNumber2 && isNumber3)
        {
            if (data>Math.min(range,range2) && data<Math.max(range,range2)) return 1;
            else return 0;
        }

        let result=[];
        let value, rangeValue,rangValue2;
        for(let i=0; i<data.length; ++i)
        {
            result[i]=null;
            value=data[i];
            if (!this.IsNumber(value)) continue;

            if (!isNumber2)
            {
                if (i>=range.length) continue;

                rangeValue=range[i];
            }
            else
            {
                rangeValue=range;
            }
            if (!this.IsNumber(rangeValue)) continue;

            if (!isNumber3)
            {
                if (i>=range2.length) continue;

                let rangeValue2=range2[i];
            }
            else
            {
                let rangeValue2=range2;
            }
            if (!this.IsNumber(rangeValue2)) continue;


            result[i]= (value>Math.min(rangeValue,rangeValue2) && value<Math.max(rangeValue,rangeValue2)) ? 1:0;
        }

        return result;
    }

    this.EXIST=function(data,n)
    {
        n=parseInt(n);

        if (typeof(data)=='number') return 0;

        var latestID; //最新满足条件的数据索引
        var result=[];
        var value;
        for(let i=0;i<data.length;++i)
        {
            result[i]=null;
            value=data[i];
            if (this.IsNumber(value) && value>0) latestID==i;

            if (i-latestID<n) result[i]=1;
            else result[i]=0;
        }

        return result;
    }

    this.TFILTER=function(data,data2,n)
    {
        n=parseInt(n);

        var result=[];

        let isNumber=typeof(data)=='number';
        let isNumber2=typeof(range)=='number';

        let count=Math.max(data.length, data2.length);
        for(let i=0;i<count;++i)
        {

        }

        return result;
    }

    /*
    过滤连续出现的信号.
    用法:FILTER(X,N):X满足条件后,将其后N周期内的数据置为0,N为常量.
    例如:
    FILTER(CLOSE>OPEN,5)查找阳线,5天内再次出现的阳线不被记录在内
    */
    this.FILTER=function(data,n)
    {
        var result=[];
        for(let i=0,j=0; i<data.length; ++i)
        {
            if (data[i])
            {
                result[i]=1;
                for(j=0;j<n && j+i+1<data.length;++j)
                {
                    result[j+i+1]=0;
                }
                i+=n;
            }
            else
            {
                result[i]=0;
            }
        }

        return result;
    }

    this.BARSLAST=function(data)
    {
        var result=[];
        if (!data) return result;

        let day=null;
        for(let i=0;i<data.length;++i)
        {
            result[i]=null;

            if (data[i]>0)  day=0;
            else if (day!=null) ++day;

            if (day!=null) result[i]=day;
        }

        return result;
    }

    /*
    N周期内第一个条件成立到当前的周期数.
    用法:
    BARSSINCEN(X,N):N周期内第一次X不为0到现在的天数,N为常量
    例如:
    BARSSINCEN(HIGH>10,10)表示10个周期内股价超过10元时到当前的周期数
    */
    this.BARSSINCEN=function(data,n)
    {
        var result=[];
        var day=null;
        for(let i=0;i<data.length;++i)
        {
            result[i]=null;
            if (day==null)
            {
                if (data[i]) day=0;
            }
            else
            {
                if (data[i])
                {
                    if (day+1<n) ++day;
                }
                else
                {
                    day=null;
                }
            }

            if (day) result[i]=day;
        }

        return result;
    }

    /*
    第一个条件成立到当前的周期数.
    用法:
    BARSSINCE(X):第一次X不为0到现在的天数
    例如:
    BARSSINCE(HIGH>10)表示股价超过10元时到当前的周期数
    */
    this.BARSSINCE=function(data)
    {
        var result=[];
        var day=null;

        for(let i=0;i<data.length;++i)
        {
            result[i]=null;
            if (day==null)
            {
                if (data[i]) day=0;
            }
            else
            {
                ++day;
            }

            if (day) result[i]=day;
        }

        return result;
    }

    /*三角函数调用 func 三角函数
    反正切值. 用法: ATAN(X)返回X的反正切值
    反余弦值. 用法: ACOS(X)返回X的反余弦值
    反正弦值. 用法: ASIN(X)返回X的反正弦值
    余弦值.  用法: COS(X)返回X的余弦值
    正弦值.  用法: SIN(X)返回X的正弦值
    正切值.  用法: TAN(X)返回X的正切值

    求自然对数. 用法: LN(X)以e为底的对数 例如: LN(CLOSE)求收盘价的对数
    求10为底的对数. 用法: LOG(X)取得X的对数 例如: LOG(100)等于2
    指数. 用法: EXP(X)为e的X次幂 例如: EXP(CLOSE)返回e的CLOSE次幂
    开平方. 用法: SQRT(X)为X的平方根 例如: SQRT(CLOSE)收盘价的平方根
    */
    this.Trigonometric=function(data,func)
    {
        if (!Array.isArray(data))
        {
            if (this.IsNumber(data)) return func(data);

            return null;
        }
        else
        {
            var result=[];
            for(let i in data)
            {
                var item=data[i];
                if (this.IsNumber(item)) result[i]=func(item);
                else result[i]=null;
            }

            return result;
        }
    }

    /*
    LAST(X,A,B):持续存在.
    用法:
    LAST(CLOSE>OPEN,10,5)
    表示从前10日到前5日内一直阳线
    若A为0,表示从第一天开始,B为0,表示到最后日止
    */
    this.LAST=function(data,n,n2)
    {
        var result=[];
        if (n2<=0) n2=data.length-1;
        if (n2>n) return result;

        var day=0;

        for(let i=0,j=0;i<data.length;++i)
        {
            result[i]=0;
            day=0;
            var start=i-n;
            var end=i-n2;
            if (start<0 || end<0) continue;

            for(j=start;j<data.length && j<=end;++j,++day)
            {
                if (!data[j]) break;
            }

            if (day==end-start+1)   //[start,end]
                result[i]=1;
        }

        return result;
    }

    /*
    一直存在.
    例如:
    EVERY(CLOSE>OPEN,N)
    表示N日内一直阳线(N应大于0,小于总周期数,N支持变量)
    */
    this.EVERY=function(data,n)
    {
        var result=[];
        if (n<1) return result;
        var i=0;
        for(;i<data.length;++i)
        {
            result[i]=null;
            if (this.IsNumber(data[i])) break;
        }

        var flag=0;
        for(;i<data.length;++i)
        {
            if (data[i]) flag+=1;
            else flag=0;

            if (flag==n)
            {
                result[i]=1;
                --flag;
            }
            else
            {
                result[i]=0;
            }
        }
        return result;
    }

    /*
    返回是否连涨周期数.
    用法:
    UPNDAY(CLOSE,M)
    表示连涨M个周期,M为常量
    */
    this.UPNDAY=function(data,n)
    {
        var result=[];
        if (n<1) return result;
        if (data==null || n>data.length) return result;

        var days=0;
        for(let i=0;i<data.length;++i)
        {
            result[i]=0;
            if (i-1<0) continue;
            if (!this.IsNumber(data[i]) || !this.IsNumber(data[i-1])) //无效数都不算连涨
            {
                days=0;
                continue;
            }

            if (data[i]>data[i-1]) ++days;
            else days=0;

            if (days==n)
            {
                result[i]=1;
                --days;
            }
        }

        return result;
    }

    /*
    返回是否连跌周期.
    用法:
    DOWNNDAY(CLOSE,M)
    表示连跌M个周期,M为常量
    */
    this.DOWNNDAY=function(data,n)
    {
        var result=[];
        if (n<1) return result;
        if (data==null || n>data.length) return result;

        var days=0;
        for(let i=0;i<data.length;++i)
        {
            result[i]=0;
            if (i-1<0) continue;
            if (!this.IsNumber(data[i]) || !this.IsNumber(data[i-1])) //无效数都不算连涨
            {
                days=0;
                continue;
            }

            if (data[i]<data[i-1]) ++days;
            else days=0;

            if (days==n)
            {
                result[i]=1;
                --days;
            }
        }

        return result;
    }

    /*
    返回是否持续存在X>Y
    用法:
    NDAY(CLOSE,OPEN,3)
    表示连续3日收阳线
    */
    this.NDAY=function(data,data2,n)
    {
        var result=[];
        if (n<1) return result;
        if (!Array.isArray(data) && !Array.isArray(data2)) return result;
        if (data==null || data2==null ) return result;

        if (Array.isArray(data) && Array.isArray(data2))
        {
            if (n>=data.length || n>=data2.length) return result;
            var count=Math.max(data.length,data2.length);
            var days=0;
            for(let i=0;i<count;++i)
            {
                result[i]=0;
                if (i>=data.length || i>=data2.length) continue;
                if (!this.IsNumber(data[i]) || !this.IsNumber(data2[i]))
                {
                    days=0;
                    continue;
                }

                if (data[i]>data2[i]) ++days;
                else days=0;

                if (days==n)
                {
                    result[i]=1;
                    --days;
                }
            }
        }
        else if (Array.isArray(data) && !Array.isArray(data2))
        {
            if (n>=data.length || !this.IsNumber(data2)) return;
            var days=0;
            for(let i in data)
            {
                result[i]=0;
                if (!this.IsNumber(data[i]))
                {
                    days=0;
                    continue;
                }

                if (data[i]>data2) ++days;
                else days=0;

                if (days==n)
                {
                    result[i]=1;
                    --days;
                }
            }
        }
        else if (!Array.isArray(data) && Array.isArray(data2))
        {
            if (n>=data2.length || !this.IsNumber(data)) return;
            var days=0;
            for(let i in data2)
            {
                result[i]=0;
                if (!this.IsNumber(data2[i]))
                {
                    days=0;
                    continue;
                }

                if (data>data2[i]) ++days;
                else days=0;

                if (days==n)
                {
                    result[i]=1;
                    --days;
                }
            }
        }

        return result;
    }

    /*
    两条线维持一定周期后交叉.
    用法:LONGCROSS(A,B,N)表示A在N周期内都小于B,本周期从下方向上穿过B时返回1,否则返回0
    */
    this.LONGCROSS=function(data,data2,n)
    {
        var result=[];
        var count=Math.max(data.length,data2.length);
        for(let i=0;i<count;++i)
        {
            result[i]=0;
            if (i-1<0) continue;
            if (i>=data.length || i>=data2.length) continue;
            if (!this.IsNumber(data[i]) || !this.IsNumber(data2[i]) || !this.IsNumber(data[i-1]) || !this.IsNumber(data2[i-1])) continue;

            if (data[i]>data2[i] && data[i-1]<data2[i-1]) result[i]=1;
        }

        for(let i=0,j=0;i<count;++i)
        {
            if (!result[i]) continue;

            for(j=1;j<=n && i-j>=0;++j)
            {
                if (data[i-j]>=data2[i-j])
                {
                    result[i]=0;
                    break;
                }
            }
        }

        return result;
    }

    /*
    EXISTR(X,A,B):是否存在(前几日到前几日间).
    例如: EXISTR(CLOSE>OPEN,10,5)
    表示从前10日内到前5日内存在着阳线
    若A为0,表示从第一天开始,B为0,表示到最后日止
    */
    this.EXISTR=function(data,n,n2)
    {
        var result=[];
        if (!Array.isArray(data)) return result;

        n=parseInt(n);
        n2=parseInt(n2);
        if (n<=0) n=data.length;
        if (n2<=0) n2=1;
        if (n2>n) return result;

        var result=[];
        var value;
        for(let i=0,j=0;i<data.length;++i)
        {
            result[i]=null;
            if (i-n<0 || i-n2<0) continue;

            result[i]=0;
            for(j=n;j>=n2;--j)
            {
                var value=data[i-j];
                if (this.IsNumber(value) && value)
                {
                    result[i]=1;
                    break;
                }
            }
        }

        return result;
    }

    /*
    RELATE(X,Y,N) 返回X和Y的N周期的相关系数
    RELATE(X,Y,N)=(∑[(Xi-Avg(X))(Yi-Avg(y))])/N ÷ √((∑(Xi-Avg(X))^2)/N * (∑(Yi-Avg(Y))^2)/N)
    其中 avg(x)表示x的N周期均值：  avg(X) = (∑Xi)/N
    √(...)表示开平方
    */
    this.RELATE=function(data,data2,n)
    {
        var result=[];
        if (n<1) n=1;

        if (!Array.isArray(data)|| !Array.isArray(data2)) return result;

        var dataAverage=this.CalculateAverage(data,n);
        var data2Average=this.CalculateAverage(data2,n);

        var count=Math.max(data.length,data2.length);
        for(let i=0,j=0;i<count;++i)
        {
            result[i]=null;

            if (i>=data.length || i>=data2.length || i>=dataAverage.length || i>=data2Average.length) continue;

            var average=dataAverage[i];
            var average2=data2Average[i];

            var total=0,total2=0,total3=0;
            for(j=i-n+1;j<=i;++j)
            {
                total+=(data[j]-average)*(data2[j]-average2);   //∑[(Xi-Avg(X))(Yi-Avg(y))])
                total2+=Math.pow(data[j]-average,2);            //∑(Xi-Avg(X))^2
                total3+=Math.pow(data2[j]-average2,2);          //∑(Yi-Avg(Y))^2)
            }

            result[i]=(total/n)/(Math.sqrt(total2/n)*Math.sqrt(total3/n));
        }

        return result;
    }

    //计算数组n周期内的均值
    this.CalculateAverage=function(data,n)
    {
        var result=[];
        if (n<1) return result;

        var total=0;

        for(var i=0;i<data.length;++i)  //去掉开始的无效数
        {
            if (this.IsNumber(data[i])) break;
        }

        for(;i<data.length && i<n;++i)  //计算第1个周期的数据
        {
            result[i]=null;
            var value=data[i];
            if (!this.IsNumber(value)) continue;
            total+=value;
        }
        result[i-1]=total/n;

        for(;i<data.length;++i)         //计算后面的周期数据
        {
            var value=data[i];
            var preValue=data[i-n];     //上一个周期的第1个数据
            if (!this.IsNumber(value)) value=0;
            if (!this.IsNumber(preValue)) preValue=0;

            total=total-preValue+value; //当前周期的数据 等于上一个周期数据 去掉上一个周期的第1个数据 加上这个周期的最后1个数据
            result[i]=total/n;
        }

        return result;
    }

    /*
    COVAR(X,Y,N) 返回X和Y的N周期的协方差
    */
    this.COVAR=function(data,data2,n)
    {
        var result=[];
        if (n<1) n=1;

        if (!Array.isArray(data)|| !Array.isArray(data2)) return result;

        var dataAverage=this.CalculateAverage(data,n);
        var data2Average=this.CalculateAverage(data2,n);

        var count=Math.max(data.length,data2.length);

        var count=Math.max(data.length,data2.length);
        for(let i=0,j=0;i<count;++i)
        {
            result[i]=null;

            if (i>=data.length || i>=data2.length || i>=dataAverage.length || i>=data2Average.length) continue;

            var average=dataAverage[i];
            var average2=data2Average[i];

            var total=0;
            for(j=i-n+1;j<=i;++j)
            {
                total+=(data[j]-average)*(data2[j]-average2);
            }

            result[i]=(total/n);
        }


        return result;
    }

    /*
    求上一高点到当前的周期数.
    用法:
    HHVBARS(X,N):求N周期内X最高值到当前周期数,N=0表示从第一个有效值开始统计
    例如:
    HHVBARS(HIGH,0)求得历史新高到到当前的周期数
    */
    this.HHVBARS=function(data,n)
    {
        var result=[];
        if (!Array.isArray(data)) return result;
        if (n<1) n=data.length;

        var nMax=null;  //最大值索引
        for(var i=0;i<data.length;++i)
        {
            result[i]=null;
            if (this.IsNumber(data[i]))
            {
                nMax=i;
                break;
            }
        }

        var j=0;
        for(i=nMax+1;i<data.length && j<n ;++i,++j) //求第1个最大值
        {
            if (data[i]>=data[nMax]) nMax=i;
            if(n==data.length) result[i]=(i-nMax);
        }

        for(;i<data.length;++i)
        {
            if (i-nMax<n)
            {
                if (data[i]>=data[nMax]) nMax=i;
            }
            else
            {
                nMax=i-n+1;
                for(j=nMax;j<=i;++j)    //计算区间最大值
                {
                    if (data[j]>=data[nMax]) nMax=j;
                }
            }

            result[i]=i-nMax;
        }

        return result;
    }

    /*
    求上一低点到当前的周期数.
    用法: LLVBARS(X,N):求N周期内X最低值到当前周期数,N=0表示从第一个有效值开始统计
    例如: LLVBARS(HIGH,20)求得20日最低点到当前的周期数
    */
    this.LLVBARS=function(data,n)
    {
        var result=[];
        if (!Array.isArray(data)) return result;
        if (n<1) n=data.length;

        var nMin=null;  //最小值索引
        for(var i=0;i<data.length;++i)
        {
            result[i]=null;
            if (this.IsNumber(data[i]))
            {
                nMin=i;
                break;
            }
        }

        var j=0;
        for(i=nMin+1;i<data.length && j<n ;++i,++j) //求第1个最大值
        {
            if (data[i]<=data[nMin]) nMin=i;
            if(n==data.length) result[i]=(i-nMin);
        }

        for(;i<data.length;++i)
        {
            if (i-nMin<n)
            {
                if (data[i]<=data[nMin]) nMin=i;
            }
            else
            {
                nMin=i-n+1;
                for(j=nMin;j<=i;++j)    //计算区间最小值
                {
                    if (data[j]<=data[nMin]) nMin=j;
                }
            }

            result[i]=i-nMin;
        }

        return result;
    }

    this.ATAN = function (data) {
        return this.Trigonometric(data, Math.atan);
    }

    this.ACOS = function (data) {
        return this.Trigonometric(data, Math.acos);
    }

    this.ASIN = function (data) {
        return this.Trigonometric(data, Math.asin);
    }

    this.COS = function (data) {
        return this.Trigonometric(data, Math.cos);
    }

    this.SIN = function (data) {
        return this.Trigonometric(data, Math.sin);
    }

    this.TAN = function (data) {
        return this.Trigonometric(data, Math.tan);
    }

    this.LN = function (data) {
        return this.Trigonometric(data, Math.log);
    }

    this.LOG = function (data) {
        return this.Trigonometric(data, Math.log);
    }

    this.EXP = function (data) {
        return this.Trigonometric(data, Math.exp);
    }

    this.SQRT = function (data) {
        return this.Trigonometric(data, Math.sqrt);
    }

    //是否有是有效的数字
    this.IsNumber = function(value)
    {
        if (value==null) return false;
        if (isNaN(value)) return false;

        return true;
    }

    //是否有是有效的除数
    this.IsDivideNumber = function(value)
    {
        if (value==null) return false;
        if (isNaN(value)) return false;
        if (value==0) return false;

        return true;
    }
    return this;
};
