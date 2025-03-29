
// Manually created from generated/index.d.ts

// Workaround for missing type in older versions of TypeScript and type incompatibility.
type MLAllowSharedBufferSource = BufferSource | SharedArrayBuffer;

// Define an empty interface to avoid requiring the WebGPU types.
interface GPUDevice {}

type MLNamedOperands = Record<string, MLOperand>;
type MLNamedTensors = Record<string, MLTensor>;
type MLNumber = bigint | number;
type MLConv2dFilterOperandLayout = "oihw" | "hwio" | "ohwi" | "ihwo";
type MLConvTranspose2dFilterOperandLayout = "iohw" | "hwoi" | "ohwi";
type MLGruWeightLayout = "zrn" | "rzn";
type MLInputOperandLayout = "nchw" | "nhwc";
type MLInterpolationMode = "nearest-neighbor" | "linear";
type MLLstmWeightLayout = "iofg" | "ifgo";
type MLOperandDataType = "float32" | "float16" | "int32" | "uint32" | "int64" | "uint64" | "int8" | "uint8";
type MLPaddingMode = "constant" | "edge" | "reflection" | "symmetric";
type MLPowerPreference = "default" | "high-performance" | "low-power";
type MLRecurrentNetworkActivation = "relu" | "sigmoid" | "tanh";
type MLRecurrentNetworkDirection = "forward" | "backward" | "both";
type MLRoundingType = "floor" | "ceil";

interface MLArgMinMaxOptions extends MLOperatorOptions {
    /**
     * If true, retains reduced dimensions with list/size 1.
     */
    keepDimensions?: boolean;
    /**
     * An {@link MLOperandDataType}. The output data type.
     */
    outputDataType?: MLOperandDataType;
}

interface MLBatchNormalizationOptions extends MLOperatorOptions {
    /**
     * The 1-D tensor of the scaling values whose list/size is equal to the size of the input dimension denoted by {@link MLBatchNormalizationOptions#axis}.
     */
    scale?: MLOperand;
    /**
     * The 1-D tensor of the bias values whose list/size is equal to the size of the input dimension denoted by {@link MLBatchNormalizationOptions#axis}.
     */
    bias?: MLOperand;
    /**
     * The index to the feature count dimension of the input shape for which the mean and variance values are. Its value must be in the range [0, N-1] where N is the MLOperand/rank of the input tensor. The default value is 1, corresponding to the channel (*"c"*) dimension in the {@link MLInputOperandLayout} `"nchw"` data layout.
     */
    axis?: number;
    /**
     * A small value to prevent computational error due to divide-by-zero.
     */
    epsilon?: number;
}

interface MLBatchNormalizationSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for mean operand.
     */
    mean?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for variance operand.
     */
    variance?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for scale operand.
     */
    scale?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for bias operand.
     */
    bias?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLBinarySupportLimits {
    /**
     * {@link MLSupportLimits} for a operand.
     */
    a?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for b operand.
     */
    b?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLClampOptions extends MLOperatorOptions {
    /**
     * The minimum value of the range. When it is not specified, the clamping is not performed on the lower limit of the range.
     */
    minValue?: MLNumber;
    /**
     * The maximum value of the range. When it is not specified, the clamping is not performed on the upper limit of the range.
     */
    maxValue?: MLNumber;
}

interface MLConcatSupportLimits {
    /**
     * {@link MLSupportLimits} for all input operands.
     */
    inputs?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLContextLostInfo {
    /**
     * An implementation-defined message providing information about the error that occurred.
     */
    message?: string;
}

interface MLContextOptions {
    powerPreference?: MLPowerPreference;
}

interface MLConv2dOptions extends MLOperatorOptions {
    /**
     * A list of length 4: *[beginningHeight, endingHeight, beginningWidth, endingWidth]*.
     * Specifies the additional rows and columns added to the beginning and ending of each spatial dimension of the convolution input.
     * The default value is [0, 0, 0, 0].
     */
    padding?: Iterable<number>;
    /**
     * A list of length 2: *[strideHeight, strideWidth]*.
     * Specifies the stride of the sliding window for each spatial dimension of the convolution input.
     * The default value is [1, 1].
     */
    strides?: Iterable<number>;
    /**
     * A list of length 2: *[dilationHeight, dilationWidth]*. Specifies the dilation factor for each spatial dimension applied on the convolution filter (kernel).
     * The default value is [1, 1].
     */
    dilations?: Iterable<number>;
    /**
     * The number of groups that input channels and output channels are divided into.
     */
    groups?: number;
    /**
     * Specifies the layout format of the input and output tensor as follows:
     * - {@link MLInputOperandLayout} `"nchw"`
     * - input tensor: *[batches, inputChannels, height, width]*
     * - output tensor: *[batches, outputChannels, height, width]*
     * - {@link MLInputOperandLayout} `"nhwc"`:
     * - input tensor: *[batches, height, width, inputChannels]*
     * - output tensor: *[batches, height, width, outputChannels]*
     */
    inputLayout?: MLInputOperandLayout;
    /**
     * Specifies the layout format of the filter tensor as follows:
     * - {@link MLConv2dFilterOperandLayout} `"oihw"`: *[outputChannels, inputChannels/groups, height, width]*
     * - {@link MLConv2dFilterOperandLayout} `"hwio"`: *[height, width, inputChannels/groups, outputChannels]*
     * - {@link MLConv2dFilterOperandLayout} `"ohwi"`: *[outputChannels, height, width, inputChannels/groups]*
     * - {@link MLConv2dFilterOperandLayout} `"ihwo"`: *[inputChannels/groups, height, width, outputChannels]*
     */
    filterLayout?: MLConv2dFilterOperandLayout;
    /**
     * An additional 1-D tensor with the shape of *[outputChannels]* whose values are to be added to the convolution result.
     */
    bias?: MLOperand;
}

interface MLConv2dSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for filter operand.
     */
    filter?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for bias operand.
     */
    bias?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLConvTranspose2dOptions extends MLOperatorOptions {
    /**
     * A list of length 4: *[beginningHeight, endingHeight, beginningWidth, endingWidth]*.
     * Specifies the additional rows and columns added to the beginning and ending of each spatial dimension of the convolution input.
     * The default value is [0, 0, 0, 0].
     */
    padding?: Iterable<number>;
    /**
     * A list of length 2: *[strideHeight, strideWidth]*.
     * Specifies the stride of the sliding window for each spatial dimension of the convolution input.
     * The default value is [1, 1].
     */
    strides?: Iterable<number>;
    /**
     * A list of length 2: *[dilationHeight, dilationWidth]*. Specifies the dilation factor for each spatial dimension applied on the convolution filter (kernel).
     * The default value is [1, 1].
     */
    dilations?: Iterable<number>;
    /**
     * A list of length 2.
     * Specifies the padding values applied to each spatial dimension of the output tensor. The explicit padding values are needed to disambiguate the output tensor shape for transposed convolution when the value of the {@link MLConvTranspose2dOptions#strides} is greater than 1.
     * Note that these values are only used to disambiguate output shape when needed; it does not necessarily cause any padding value to be written to the output tensor.
     * The default value is [0, 0].
     */
    outputPadding?: Iterable<number>;
    /**
     * A list of length 2.
     * Specifies the sizes of the last two dimensions of the output tensor. When the output sizes are explicitly specified, the output padding values in {@link MLConvTranspose2dOptions#outputPadding} are ignored.
     * If not specified, the output sizes are automatically computed.
     */
    outputSizes?: Iterable<number>;
    /**
     * The number of groups that input channels and output channels are divided into.
     */
    groups?: number;
    /**
     * Specifies the layout format of the input and output tensor as follows:
     * - {@link MLInputOperandLayout} `"nchw"`
     * - input tensor: *[batches, inputChannels, height, width]*
     * - output tensor: *[batches, outputChannels, height, width]*
     * - {@link MLInputOperandLayout} `"nhwc"`:
     * - input tensor: *[batches, height, width, inputChannels]*
     * - output tensor: *[batches, height, width, outputChannels]*
     */
    inputLayout?: MLInputOperandLayout;
    /**
     * Specifies the layout format of the filter tensor as follows:
     * - {@link MLConvTranspose2dFilterOperandLayout} `"iohw"`: *[inputChannels, outputChannels/groups, height, width]*
     * - {@link MLConvTranspose2dFilterOperandLayout} `"hwoi"`: *[height, width, outputChannels/groups, inputChannels]*
     * - {@link MLConvTranspose2dFilterOperandLayout} `"ohwi"`: *[outputChannels/groups, height, width, inputChannels]*
     */
    filterLayout?: MLConvTranspose2dFilterOperandLayout;
    /**
     * An additional 1-D tensor with the shape of *[outputChannels]* whose values are to be added to the convolution result.
     */
    bias?: MLOperand;
}

interface MLCumulativeSumOptions extends MLOperatorOptions {
    /**
     * Whether to include or exclude the current value in the output, meaning inclusive prefix sum or exclusive prefix sum' {@link https://www.w3.org/TR/webnn/#biblio-prefix-sum}'. Given input *[1,2,3,4]*, inclusive summation would yield an output of *[1,3,6,10]* whereas exclusive would yield *[0,1,3,6]*. The default is inclusive.
     */
    exclusive?: boolean;
    /**
     * Whether to reverse the summation direction along the active axis to instead start from the high coordinate to low coordinate. Given input *[1,2,3,4]*, inclusive forward summation would yield an output of *[1,3,6,10]* whereas inclusive backward summation would yield *[10,9,7,4]*. The default is forward.
     */
    reversed?: boolean;
}

interface MLEluOptions extends MLOperatorOptions {
    /**
     * A scalar multiplier.
     */
    alpha?: number;
}

interface MLGatherOptions extends MLOperatorOptions {
    /**
     * The axis along which the gathered values are obtained. Its value must be in the range [0, N-1] where N is the MLOperand/rank of the input tensor.
     */
    axis?: number;
}

interface MLGatherSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for indices operand.
     */
    indices?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLGemmOptions extends MLOperatorOptions {
    /**
     * The third input tensor. It is either a scalar, or of the shape that is unidirectionally broadcastable to the shape *[M, N]*. When it is not specified, the computation is done as if {@link MLGemmOptions#c} is a scalar 0.0.
     */
    c?: MLOperand;
    /**
     * A multiplier for the first input.
     */
    alpha?: number;
    /**
     * A multiplier for the third input {@link MLGemmOptions#c}.
     */
    beta?: number;
    /**
     * Indicates if the first input is transposed prior to calculating the output.
     */
    aTranspose?: boolean;
    /**
     * Indicates if the second input is transposed prior to calculating the output.
     */
    bTranspose?: boolean;
}

interface MLGemmSupportLimits {
    /**
     * {@link MLSupportLimits} for a operand.
     */
    a?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for b operand.
     */
    b?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for c operand.
     */
    c?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLGruCellOptions extends MLOperatorOptions {
    /**
     * The 1-D input bias tensor of shape *[3 * hiddenSize]*. The ordering of the bias vectors in the second dimension of the tensor shape is specified according to {@link MLGruOptions#layout}.
     */
    bias?: MLOperand;
    /**
     * The 1-D recurrent bias tensor of shape *[3 * hiddenSize]*. The ordering of the bias vectors in the second dimension of the tensor shape is specified according to {@link MLGruOptions#layout}.
     */
    recurrentBias?: MLOperand;
    /**
     * Indicates whether to apply the reset gate after or before matrix multiplication.
     */
    resetAfter?: boolean;
    /**
     * The ordering of the weight and bias vectors for the internal gates of GRU, specifically the `update (z)`, `reset (r)`, and `new (n)` gate, as indicated in the second dimension of the weight and bias tensor shape.
     */
    layout?: MLGruWeightLayout;
    /**
     * Specifies a pair of operator/activation functions with the first function used for the update and reset gate, and the second used for the new gate. When not specified, defaults to the {@link MLRecurrentNetworkActivation} `"sigmoid"` and {@link MLRecurrentNetworkActivation} `"tanh"` functions, respectively.
     */
    activations?: Iterable<MLRecurrentNetworkActivation>;
}

interface MLGruCellSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for weight operand.
     */
    weight?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for recurrentWeight operand.
     */
    recurrentWeight?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for hiddenState operand.
     */
    hiddenState?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for bias operand.
     */
    bias?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for recurrentBias operand.
     */
    recurrentBias?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLGruOptions extends MLOperatorOptions {
    /**
     * The 2-D input bias tensor of shape *[numDirections, 3 * hiddenSize]*. The ordering of the bias vectors in the second dimension of the tensor shape is specified according to {@link MLGruOptions#layout}.
     */
    bias?: MLOperand;
    /**
     * The 2-D recurrent bias tensor of shape *[numDirections, 3 * hiddenSize]*. The ordering of the bias vectors in the second dimension of the tensor shape is specified according to {@link MLGruOptions#layout}.
     */
    recurrentBias?: MLOperand;
    /**
     * The 3-D initial hidden state tensor of shape *[numDirections, batchSize, hiddenSize]*.
     * When not specified, implementations must use a tensor filled with zero.
     */
    initialHiddenState?: MLOperand;
    /**
     * Indicates whether to apply the reset gate after or before matrix multiplication.
     */
    resetAfter?: boolean;
    /**
     * Indicates whether to also return the entire sequence with every output from each time step in it in addition to the output of the last time step.
     */
    returnSequence?: boolean;
    /**
     * The processing direction of the input sequence. When set to {@link MLRecurrentNetworkDirection} `"both"`, the size of the first dimension of the weight and the bias tensor shapes must be 2, and the input is processed in both directions.
     */
    direction?: MLRecurrentNetworkDirection;
    /**
     * The ordering of the weight and bias vectors for the internal gates of GRU, specifically the `update (z)`, `reset (r)`, and `new (n)` gate, as indicated in the second dimension of the weight and bias tensor shape.
     */
    layout?: MLGruWeightLayout;
    /**
     * Specifies a pair of operator/activation functions with the first function used for the update and reset gate, and the second used for the new gate. When not specified, defaults to the {@link MLRecurrentNetworkActivation} `"sigmoid"` and {@link MLRecurrentNetworkActivation} `"tanh"` functions, respectively.
     */
    activations?: Iterable<MLRecurrentNetworkActivation>;
}

interface MLGruSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for weight operand.
     */
    weight?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for recurrentWeight operand.
     */
    recurrentWeight?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for bias operand.
     */
    bias?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for recurrentBias operand.
     */
    recurrentBias?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for initialHiddenState operand.
     */
    initialHiddenState?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for all the output operands.
     */
    outputs?: MLSupportLimits;
}

interface MLHardSigmoidOptions extends MLOperatorOptions {
    /**
     * A scalar multiplier.
     */
    alpha?: number;
    /**
     * A scalar addition.
     */
    beta?: number;
}

interface MLInstanceNormalizationOptions extends MLOperatorOptions {
    /**
     * The 1-D tensor of the scaling values whose list/size is equal to the number of channels, i.e. the size of the feature dimension of the input. For example, for an {@link MLGraphBuilder/instanceNormalization(input, options)#input} tensor with {@link MLInputOperandLayout} `"nchw"` layout, the list/size is equal to {@link MLGraphBuilder/instanceNormalization(input, options)#input}'s MLOperand/shape[1].
     */
    scale?: MLOperand;
    /**
     * The 1-D tensor of the bias values whose list/size is equal to the size of the feature dimension of the input. For example, for an {@link MLGraphBuilder/instanceNormalization(input, options)#input} tensor with {@link MLInputOperandLayout} `"nchw"` layout, the list/size is equal to {@link MLGraphBuilder/instanceNormalization(input, options)#input}'s MLOperand/shape[1].
     */
    bias?: MLOperand;
    /**
     * A small value to prevent computational error due to divide-by-zero.
     */
    epsilon?: number;
    /**
     * The layout format of the input.
     */
    layout?: MLInputOperandLayout;
}

interface MLLayerNormalizationOptions extends MLOperatorOptions {
    /**
     * The N-D tensor of the scaling values whose shape is determined by the {@link MLLayerNormalizationOptions#axes} member in that each value in {@link MLLayerNormalizationOptions#axes} indicates the dimension of the input tensor with scaling values. For example, for an {@link MLLayerNormalizationOptions#axes} values of [1,2,3], the shape of this tensor is the list of the corresponding sizes of the input dimension 1, 2 and 3. When this member is not present, the scaling value is assumed to be 1.
     */
    scale?: MLOperand;
    /**
     * The N-D tensor of the bias values whose shape is determined by the {@link MLLayerNormalizationOptions#axes} member in that each value in {@link MLLayerNormalizationOptions#axes} indicates the dimension of the input tensor with bias values. For example, for an {@link MLLayerNormalizationOptions#axes} values of [1,2,3], the shape of this tensor is the list of the corresponding sizes of the input dimension 1, 2 and 3. When this member is not present, the bias value is assumed to be 0.
     */
    bias?: MLOperand;
    /**
     * The indices to the input dimensions to reduce. When this member is not present, it is treated as if all dimensions except the first were given (e.g. for a 4-D input tensor, {@link MLLayerNormalizationOptions#axes} = [1,2,3]). That is, the reduction for the mean and variance values are calculated across all the input features for each independent batch. If empty, no dimensions are reduced.
     */
    axes?: Iterable<number>;
    /**
     * A small value to prevent computational error due to divide-by-zero.
     */
    epsilon?: number;
}

interface MLLeakyReluOptions extends MLOperatorOptions {
    /**
     * A scalar multiplier.
     */
    alpha?: number;
}

interface MLLinearOptions extends MLOperatorOptions {
    /**
     * A scalar multiplier.
     */
    alpha?: number;
    /**
     * A scalar addition.
     */
    beta?: number;
}

interface MLLogicalNotSupportLimits {
    /**
     * {@link MLSupportLimits} for a operand.
     */
    a?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLLstmCellOptions extends MLOperatorOptions {
    /**
     * The 1-D input bias tensor of shape *[4 * hiddenSize]*. The ordering of the bias vectors in the first dimension of the tensor shape is specified according to {@link MLLstmCellOptions#layout}.
     */
    bias?: MLOperand;
    /**
     * The 1-D recurrent bias tensor of shape *[4 * hiddenSize]*. The ordering of the bias vectors in the first dimension of the tensor shape is specified according to {@link MLLstmCellOptions#layout}.
     */
    recurrentBias?: MLOperand;
    /**
     * The 1-D weight tensor for peepholes of shape *[3 * hiddenSize]*. The pack ordering of the weight vectors is for the `input (i)`, `output (o)`, and `forget (f)` gate, respectively.
     */
    peepholeWeight?: MLOperand;
    /**
     * The ordering of the weight and bias vectors for the internal gates of LSTM, specifically the `input (i)`, `output (o)`, `forget (f)`, and `cell (g)` gate, as indicated in the first dimension of the weight and bias tensor shapes.
     */
    layout?: MLLstmWeightLayout;
    /**
     * A list of three operator/activation functions, the first one is used for the `input (i)`, `forget (f)`, and `output (o)` gate, the second one is used for the `cell (g)` gate, and the last used for filtering the output cell state before combining it with the result of the output gate to form the output hidden state. When not specified, defaults to a sequence of the {@link MLRecurrentNetworkActivation} `"sigmoid"`, {@link MLRecurrentNetworkActivation} `"tanh"`, and {@link MLRecurrentNetworkActivation} `"tanh"` functions, respectively.
     */
    activations?: Iterable<MLRecurrentNetworkActivation>;
}

interface MLLstmCellSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for weight operand.
     */
    weight?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for recurrentWeight operand.
     */
    recurrentWeight?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for hiddenState operand.
     */
    hiddenState?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for cellState operand.
     */
    cellState?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for bias operand.
     */
    bias?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for recurrentBias operand.
     */
    recurrentBias?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for peepholeWeight operand.
     */
    peepholeWeight?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for all the output operands.
     */
    outputs?: MLSupportLimits;
}

interface MLLstmOptions extends MLOperatorOptions {
    /**
     * The 2-D input bias tensor of shape *[numDirections, 4 * hiddenSize]*. The ordering of the bias vectors in the second dimension of the tensor shape is specified according to {@link MLLstmOptions#layout}.
     */
    bias?: MLOperand;
    /**
     * The 2-D recurrent bias tensor of shape *[numDirections, 4 * hiddenSize]*. The ordering of the bias vectors in the first dimension of the tensor shape is specified according to {@link MLLstmOptions#layout}.
     */
    recurrentBias?: MLOperand;
    /**
     * The 2-D weight tensor for peepholes of shape *[numDirections, 3 * hiddenSize]*. The pack ordering of the weight vectors is for the `input (i)`, `output (o)`, and `forget (f)` gate, respectively.
     */
    peepholeWeight?: MLOperand;
    /**
     * The 3-D initial hidden state tensor of shape *[numDirections, batchSize, hiddenSize]*. When not specified, implementations must use a tensor filled with zero.
     */
    initialHiddenState?: MLOperand;
    /**
     * The 3-D initial hidden state tensor of shape *[numDirections, batchSize, hiddenSize]*. When not specified, implementations must use a tensor filled with zero.
     */
    initialCellState?: MLOperand;
    /**
     * Indicates whether to also return the entire sequence with every output from each time step in it in addition to the output of the last time step.
     */
    returnSequence?: boolean;
    /**
     * The processing direction of the input sequence. When set to {@link MLRecurrentNetworkDirection} `"both"`, the size of the first dimension of the weight and the bias tensor shapes must be 2, and the input is processed in both directions.
     */
    direction?: MLRecurrentNetworkDirection;
    /**
     * The ordering of the weight and bias vectors for the internal gates of LSTM, specifically the `input (i)`, `output (o)`, `forget (f)`, and `cell (g)` gate, as indicated in the first dimension of the weight and bias tensor shapes.
     */
    layout?: MLLstmWeightLayout;
    /**
     * A list of three operator/activation functions, the first one is used for the `input (i)`, `forget (f)`, and `output (o)` gate, the second one is used for the `cell (g)` gate, and the last used for filtering the output cell state before combining it with the result of the output gate to form the output hidden state. When not specified, defaults to a sequence of the {@link MLRecurrentNetworkActivation} `"sigmoid"`, {@link MLRecurrentNetworkActivation} `"tanh"`, and {@link MLRecurrentNetworkActivation} `"tanh"` functions, respectively.
     */
    activations?: Iterable<MLRecurrentNetworkActivation>;
}

interface MLLstmSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for weight operand.
     */
    weight?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for recurrentWeight operand.
     */
    recurrentWeight?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for bias operand.
     */
    bias?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for recurrentBias operand.
     */
    recurrentBias?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for peepholeWeight operand.
     */
    peepholeWeight?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for initialHiddenState operand.
     */
    initialHiddenState?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for initialCellState operand.
     */
    initialCellState?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for all the output operands.
     */
    outputs?: MLSupportLimits;
}

interface MLNormalizationSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for scale operand.
     */
    scale?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for bias operand.
     */
    bias?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLOperandDescriptor {
    /**
     * The operand data type.
     */
    dataType: MLOperandDataType;
    /**
     * The list of dimensions of the operand. It is empty for scalar operands.
     */
    shape: Iterable<number>;
}

interface MLOperatorOptions {
    /**
     * Optionally provided when an operator is created using {@link MLGraphBuilder} methods that create {@link MLOperand}s. The implementation may use this value to initialize the operator's operator/label.
     */
    label?: string;
}

interface MLOpSupportLimits {
    /**
     * Preferred input layout for layout dependent operators like {@link MLGraphBuilder#conv2d}.
     */
    preferredInputLayout?: MLInputOperandLayout;
    /**
     * Support limits for input {@link MLOperand}s for an {@link MLGraph}.
     */
    input?: MLSupportLimits;
    /**
     * Support limits for constant {@link MLOperand}s for an {@link MLGraph}.
     */
    constant?: MLSupportLimits;
    /**
     * Support limits for output {@link MLOperand}s for an {@link MLGraph}.
     */
    output?: MLSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#argMin}.
     */
    argMin?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#argMax}.
     */
    argMax?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#batchNormalization}.
     */
    batchNormalization?: MLBatchNormalizationSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#cast}.
     */
    cast?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#clamp}.
     */
    clamp?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#concat}.
     */
    concat?: MLConcatSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#conv2d}.
     */
    conv2d?: MLConv2dSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#convTranspose2d}.
     */
    convTranspose2d?: MLConv2dSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#cumulativeSum}.
     */
    cumulativeSum?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#add}.
     */
    add?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#sub}.
     */
    sub?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#mul}.
     */
    mul?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#div}.
     */
    div?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#max}.
     */
    max?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#min}.
     */
    min?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#pow}.
     */
    pow?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#equal}.
     */
    equal?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#notEqual}.
     */
    notEqual?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#greater}.
     */
    greater?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#greaterOrEqual}.
     */
    greaterOrEqual?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#lesser}.
     */
    lesser?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#lesserOrEqual}.
     */
    lesserOrEqual?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#logicalNot}.
     */
    logicalNot?: MLLogicalNotSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#logicalAnd}.
     */
    logicalAnd?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#logicalOr}.
     */
    logicalOr?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#logicalXor}.
     */
    logicalXor?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#abs}.
     */
    abs?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#ceil}.
     */
    ceil?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#cos}.
     */
    cos?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#erf}.
     */
    erf?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#exp}.
     */
    exp?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#floor}.
     */
    floor?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#identity}.
     */
    identity?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#log}.
     */
    log?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#neg}.
     */
    neg?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reciprocal}.
     */
    reciprocal?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#sin}.
     */
    sin?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#sign}.
     */
    sign?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#sqrt}.
     */
    sqrt?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#tan}.
     */
    tan?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#dequantizeLinear}.
     */
    dequantizeLinear?: MLQuantizationSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#quantizeLinear}.
     */
    quantizeLinear?: MLQuantizationSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#elu}.
     */
    elu?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#expand}.
     */
    expand?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#gather}.
     */
    gather?: MLGatherSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#gatherElements}.
     */
    gatherElements?: MLGatherSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#gatherND}.
     */
    gatherND?: MLGatherSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#gelu}.
     */
    gelu?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#gemm}.
     */
    gemm?: MLGemmSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#gru}.
     */
    gru?: MLGruSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#gruCell}.
     */
    gruCell?: MLGruCellSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#hardSigmoid}.
     */
    hardSigmoid?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#hardSwish}.
     */
    hardSwish?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#instanceNormalization}.
     */
    instanceNormalization?: MLNormalizationSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#layerNormalization}.
     */
    layerNormalization?: MLNormalizationSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#leakyRelu}.
     */
    leakyRelu?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#linear}.
     */
    linear?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#lstm}.
     */
    lstm?: MLLstmSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#lstmCell}.
     */
    lstmCell?: MLLstmCellSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#matmul}.
     */
    matmul?: MLBinarySupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#pad}.
     */
    pad?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#averagePool2d}.
     */
    averagePool2d?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#l2Pool2d}.
     */
    l2Pool2d?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#maxPool2d}.
     */
    maxPool2d?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#prelu}.
     */
    prelu?: MLPreluSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reduceL1}.
     */
    reduceL1?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reduceL2}.
     */
    reduceL2?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reduceLogSum}.
     */
    reduceLogSum?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reduceLogSumExp}.
     */
    reduceLogSumExp?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reduceMax}.
     */
    reduceMax?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reduceMean}.
     */
    reduceMean?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reduceMin}.
     */
    reduceMin?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reduceProduct}.
     */
    reduceProduct?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reduceSum}.
     */
    reduceSum?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reduceSumSquare}.
     */
    reduceSumSquare?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#relu}.
     */
    relu?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#resample2d}.
     */
    resample2d?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reshape}.
     */
    reshape?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#reverse}.
     */
    reverse?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#scatterElements}.
     */
    scatterElements?: MLScatterSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#scatterND}.
     */
    scatterND?: MLScatterSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#sigmoid}.
     */
    sigmoid?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#slice}.
     */
    slice?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#softmax}.
     */
    softmax?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#softplus}.
     */
    softplus?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#softsign}.
     */
    softsign?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#split}.
     */
    split?: MLSplitSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#tanh}.
     */
    tanh?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#tile}.
     */
    tile?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#transpose}.
     */
    transpose?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#triangular}.
     */
    triangular?: MLSingleInputSupportLimits;
    /**
     * Support limits for operator {@link MLGraphBuilder#where}.
     */
    where?: MLWhereSupportLimits;
}

interface MLPadOptions extends MLOperatorOptions {
    /**
     * The different ways to pad the tensor.
     */
    mode?: MLPaddingMode;
    /**
     * The padding value when {@link MLPadOptions#mode} is set to {@link MLPaddingMode} `"constant"`.
     */
    value?: MLNumber;
}

interface MLPool2dOptions extends MLOperatorOptions {
    /**
     * A list of length 2: *[windowHeight, windowWidth]*.
     * Specifies the dimensions of the sliding window.
     * The default value for the window dimensions are the height and width dimensions of the input shape.
     */
    windowDimensions?: Iterable<number>;
    /**
     * A list of length 4: *[beginningHeight, endingHeight, beginningWidth, endingWidth]*.
     * Specifies the additional rows and columns added to the beginning and ending of each spatial dimension of the convolution input.
     * The default value is [0,0,0,0].
     */
    padding?: Iterable<number>;
    /**
     * A list of length 2: *[strideHeight, strideWidth]*.
     * Specifies the stride of the sliding window for each spatial dimension of the convolution input.
     * The default value is [1,1].
     */
    strides?: Iterable<number>;
    /**
     * A list of length 2: *[dilationHeight, dilationWidth]*. Specifies the dilation factor for each spatial dimension applied on the convolution filter (kernel).
     * The default value is [1,1].
     */
    dilations?: Iterable<number>;
    /**
     * Specifies the layout format of the input and output tensor as follows:
     * - {@link MLInputOperandLayout} `"nchw"`
     * - input tensor: *[batches, inputChannels, height, width]*
     * - output tensor: *[batches, outputChannels, height, width]*
     * - {@link MLInputOperandLayout} `"nhwc"`:
     * - input tensor: *[batches, height, width, inputChannels]*
     * - output tensor: *[batches, height, width, outputChannels]*
     */
    layout?: MLInputOperandLayout;
    /**
     * The rounding function used to compute the output shape.
     */
    roundingType?: MLRoundingType;
    /**
     * A list of length 2.
     * Specifies the sizes of the two spacial dimensions of the output tensor. When the output sizes are explicitly specified, the {@link MLPool2dOptions#roundingType} is ignored.
     * If not specified, the output sizes are automatically computed.
     */
    outputSizes?: Iterable<number>;
}

interface MLPreluSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for slope operand.
     */
    slope?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLQuantizationSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for scale operand.
     */
    scale?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for zeroPoint operand.
     */
    zeroPoint?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLReduceOptions extends MLOperatorOptions {
    /**
     * The dimensions to reduce, which also specifies which of the values in the input tensor are used with the reduction function. The axes in the list must be in the range [0, N-1] where N is the MLOperand/rank of the input tensor.
     * If not present, all dimensions are reduced. The input values for the reduction function are all of the values in the input tensor.
     * If present and not empty, the input values for the reduction function are all the values for the specified dimensions of the input tensor.
     * If present and empty, no dimensions are reduced, and the shape of the output tensor is the same as the shape of the input tensor; the reduction function is applied to each value in the tensor individually.
     */
    axes?: Iterable<number>;
    /**
     * If true, the output has the same rank as the input, setting any reduced dimensions to size 1.
     */
    keepDimensions?: boolean;
}

interface MLResample2dOptions extends MLOperatorOptions {
    mode?: MLInterpolationMode;
    scales?: Iterable<number>;
    sizes?: Iterable<number>;
    axes?: Iterable<number>;
}

interface MLReverseOptions extends MLOperatorOptions {
    /**
     * The indices to the input dimensions to reverse. When this member is not present, it is treated as if all dimensions are reversed. If explicitly passed as empty, no dimensions are reversed.
     */
    axes?: Iterable<number>;
}

interface MLScatterOptions extends MLOperatorOptions {
    /**
     * The axis along which the scattered values are obtained. Its value must be in the range [0, N-1] where N is the MLOperand/rank of the input tensor.
     */
    axis?: number;
}

interface MLScatterSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for indices operand.
     */
    indices?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for updates operand.
     */
    updates?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLSingleInputSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface MLSliceOptions extends MLOperatorOptions {
    /**
     * The stride to step over each input along each axis.
     * The length of the strides array must equal the MLOperand/rank of the input tensor.
     * The default is an array of length MLOperand/rank consisting of all 1's.
     * e.g. [1,1,1] for a 3-D tensor.
     * Strides must be greater than zero.
     */
    strides?: Iterable<number>;
}

interface MLSplitOptions extends MLOperatorOptions {
    /**
     * The dimension along which to split. Its value must be in the range [0, N-1] where N is the MLOperand/rank of the input tensor.
     */
    axis?: number;
}

interface MLSplitSupportLimits {
    /**
     * {@link MLSupportLimits} for input operand.
     */
    input?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for all the output operands.
     */
    outputs?: MLSupportLimits;
}

interface MLSupportLimits {
    /**
     * Supported data types.
     */
    dataTypes?: Iterable<MLOperandDataType>;
}

interface MLTensorDescriptor extends MLOperandDescriptor {
    /**
     * Whether the tensor can be exported to WebGPU.
     */
    importableToWebGPU?: boolean;
    /**
     * Whether the tensor's contents can be read via {@link MLContext#readTensor(tensor)} or {@link MLContext#readTensor}.
     */
    readable?: boolean;
    /**
     * Whether the tensor's contents can be written to via {@link MLContext#writeTensor}.
     */
    writable?: boolean;
}

interface MLTransposeOptions extends MLOperatorOptions {
    /**
     * The values used to permute the output shape.
     * The default is [N-1, ..., 0], where N is the MLOperand/rank of the input tensor, e.g. [2,1,0] for a 3-D tensor.
     * These default values cause the output to become a transposed tensor of the input. When specified, the number of values must be the same as the MLOperand/rank of the input tensor, and the values must be within the range from 0 to N-1 with no duplicates.
     */
    permutation?: Iterable<number>;
}

interface MLTriangularOptions extends MLOperatorOptions {
    /**
     * Indicates whether the output the upper or the lower part of the input matrix is retained. True indicates that the upper part is retained.
     */
    upper?: boolean;
    /**
     * Specifies how many diagonals above or below the main diagonals of the input matrix are retained or excluded. A value of 0 means no diagonals other than the main diagonals are affected.
     */
    diagonal?: number;
}

interface MLWhereSupportLimits {
    /**
     * {@link MLSupportLimits} for condition operand.
     */
    condition?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for trueValue operand.
     */
    trueValue?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for falseValue operand.
     */
    falseValue?: MLSupportLimits;
    /**
     * {@link MLSupportLimits} for output operand.
     */
    output?: MLSupportLimits;
}

interface NavigatorML {
    readonly ml: ML;
}

interface ML {
    /** @internal Workaround for [nominal typing](https://github.com/microsoft/TypeScript/pull/33038). */
    readonly __brand: 'ML';
    createContext(options?: MLContextOptions): Promise<MLContext>;
    createContext(gpuDevice: GPUDevice): Promise<MLContext>;
}

declare var ML: {
    prototype: ML;
    new (): never;
};

interface MLContext {
    /** @internal Workaround for [nominal typing](https://github.com/microsoft/TypeScript/pull/33038). */
    readonly __brand: 'MLContext';
    dispatch(graph: MLGraph, inputs: MLNamedTensors, outputs: MLNamedTensors): undefined;
    createTensor(descriptor: MLTensorDescriptor): Promise<MLTensor>;
    readTensor(tensor: MLTensor): Promise<ArrayBuffer>;
    readTensor(tensor: MLTensor, outputData: MLAllowSharedBufferSource): Promise<undefined>;
    writeTensor(tensor: MLTensor, inputData: MLAllowSharedBufferSource): undefined;
    opSupportLimits(): MLOpSupportLimits;
    destroy(): undefined;
    readonly lost: Promise<MLContextLostInfo>;
}

declare var MLContext: {
    prototype: MLContext;
    new (): never;
};

interface MLGraph {
    /** @internal Workaround for [nominal typing](https://github.com/microsoft/TypeScript/pull/33038). */
    readonly __brand: 'MLGraph';
    destroy(): undefined;
}

declare var MLGraph: {
    prototype: MLGraph;
    new (): never;
};

interface MLGraphBuilder {
    /** @internal Workaround for [nominal typing](https://github.com/microsoft/TypeScript/pull/33038). */
    readonly __brand: 'MLGraphBuilder';
    input(name: string, descriptor: MLOperandDescriptor): MLOperand;
    constant(descriptor: MLOperandDescriptor, buffer: MLAllowSharedBufferSource): MLOperand;
    constant(type: MLOperandDataType, value: MLNumber): MLOperand;
    build(outputs: MLNamedOperands): Promise<MLGraph>;
    argMin(input: MLOperand, axis: number, options?: MLArgMinMaxOptions): MLOperand;
    argMax(input: MLOperand, axis: number, options?: MLArgMinMaxOptions): MLOperand;
    batchNormalization(input: MLOperand, mean: MLOperand, variance: MLOperand, options?: MLBatchNormalizationOptions): MLOperand;
    cast(input: MLOperand, type: MLOperandDataType, options?: MLOperatorOptions): MLOperand;
    clamp(input: MLOperand, options?: MLClampOptions): MLOperand;
    concat(inputs: Iterable<MLOperand>, axis: number, options?: MLOperatorOptions): MLOperand;
    conv2d(input: MLOperand, filter: MLOperand, options?: MLConv2dOptions): MLOperand;
    convTranspose2d(input: MLOperand, filter: MLOperand, options?: MLConvTranspose2dOptions): MLOperand;
    cumulativeSum(input: MLOperand, axis: number, options?: MLCumulativeSumOptions): MLOperand;
    add(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    sub(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    mul(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    div(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    max(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    min(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    pow(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    equal(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    notEqual(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    greater(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    greaterOrEqual(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    lesser(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    lesserOrEqual(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    logicalNot(a: MLOperand, options?: MLOperatorOptions): MLOperand;
    logicalAnd(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    logicalOr(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    logicalXor(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    abs(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    ceil(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    cos(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    erf(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    exp(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    floor(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    identity(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    log(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    neg(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    reciprocal(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    sin(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    sign(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    sqrt(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    tan(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    dequantizeLinear(input: MLOperand, scale: MLOperand, zeroPoint: MLOperand, options?: MLOperatorOptions): MLOperand;
    quantizeLinear(input: MLOperand, scale: MLOperand, zeroPoint: MLOperand, options?: MLOperatorOptions): MLOperand;
    elu(input: MLOperand, options?: MLEluOptions): MLOperand;
    expand(input: MLOperand, newShape: Iterable<number>, options?: MLOperatorOptions): MLOperand;
    gather(input: MLOperand, indices: MLOperand, options?: MLGatherOptions): MLOperand;
    gatherElements(input: MLOperand, indices: MLOperand, options?: MLGatherOptions): MLOperand;
    gatherND(input: MLOperand, indices: MLOperand, options?: MLOperatorOptions): MLOperand;
    gelu(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    gemm(a: MLOperand, b: MLOperand, options?: MLGemmOptions): MLOperand;
    gru(input: MLOperand, weight: MLOperand, recurrentWeight: MLOperand, steps: number, hiddenSize: number, options?: MLGruOptions): Iterable<MLOperand>;
    gruCell(input: MLOperand, weight: MLOperand, recurrentWeight: MLOperand, hiddenState: MLOperand, hiddenSize: number, options?: MLGruCellOptions): MLOperand;
    hardSigmoid(input: MLOperand, options?: MLHardSigmoidOptions): MLOperand;
    hardSwish(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    instanceNormalization(input: MLOperand, options?: MLInstanceNormalizationOptions): MLOperand;
    layerNormalization(input: MLOperand, options?: MLLayerNormalizationOptions): MLOperand;
    leakyRelu(input: MLOperand, options?: MLLeakyReluOptions): MLOperand;
    linear(input: MLOperand, options?: MLLinearOptions): MLOperand;
    lstm(input: MLOperand, weight: MLOperand, recurrentWeight: MLOperand, steps: number, hiddenSize: number, options?: MLLstmOptions): Iterable<MLOperand>;
    lstmCell(input: MLOperand, weight: MLOperand, recurrentWeight: MLOperand, hiddenState: MLOperand, cellState: MLOperand, hiddenSize: number, options?: MLLstmCellOptions): Iterable<MLOperand>;
    matmul(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
    pad(input: MLOperand, beginningPadding: Iterable<number>, endingPadding: Iterable<number>, options?: MLPadOptions): MLOperand;
    averagePool2d(input: MLOperand, options?: MLPool2dOptions): MLOperand;
    l2Pool2d(input: MLOperand, options?: MLPool2dOptions): MLOperand;
    maxPool2d(input: MLOperand, options?: MLPool2dOptions): MLOperand;
    prelu(input: MLOperand, slope: MLOperand, options?: MLOperatorOptions): MLOperand;
    reduceL1(input: MLOperand, options?: MLReduceOptions): MLOperand;
    reduceL2(input: MLOperand, options?: MLReduceOptions): MLOperand;
    reduceLogSum(input: MLOperand, options?: MLReduceOptions): MLOperand;
    reduceLogSumExp(input: MLOperand, options?: MLReduceOptions): MLOperand;
    reduceMax(input: MLOperand, options?: MLReduceOptions): MLOperand;
    reduceMean(input: MLOperand, options?: MLReduceOptions): MLOperand;
    reduceMin(input: MLOperand, options?: MLReduceOptions): MLOperand;
    reduceProduct(input: MLOperand, options?: MLReduceOptions): MLOperand;
    reduceSum(input: MLOperand, options?: MLReduceOptions): MLOperand;
    reduceSumSquare(input: MLOperand, options?: MLReduceOptions): MLOperand;
    relu(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    resample2d(input: MLOperand, options?: MLResample2dOptions): MLOperand;
    reshape(input: MLOperand, newShape: Iterable<number>, options?: MLOperatorOptions): MLOperand;
    reverse(input: MLOperand, options?: MLReverseOptions): MLOperand;
    scatterElements(input: MLOperand, indices: MLOperand, updates: MLOperand, options?: MLScatterOptions): MLOperand;
    scatterND(input: MLOperand, indices: MLOperand, updates: MLOperand, options?: MLOperatorOptions): MLOperand;
    sigmoid(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    slice(input: MLOperand, starts: Iterable<number>, sizes: Iterable<number>, options?: MLSliceOptions): MLOperand;
    softmax(input: MLOperand, axis: number, options?: MLOperatorOptions): MLOperand;
    softplus(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    softsign(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    split(input: MLOperand, splits: number | Iterable<number>, options?: MLSplitOptions): Iterable<MLOperand>;
    tanh(input: MLOperand, options?: MLOperatorOptions): MLOperand;
    tile(input: MLOperand, repetitions: Iterable<number>, options?: MLOperatorOptions): MLOperand;
    transpose(input: MLOperand, options?: MLTransposeOptions): MLOperand;
    triangular(input: MLOperand, options?: MLTriangularOptions): MLOperand;
    where(condition: MLOperand, trueValue: MLOperand, falseValue: MLOperand, options?: MLOperatorOptions): MLOperand;
}

declare var MLGraphBuilder: {
    prototype: MLGraphBuilder;
    new (context: MLContext): MLGraphBuilder;
};

interface MLOperand {
    /** @internal Workaround for [nominal typing](https://github.com/microsoft/TypeScript/pull/33038). */
    readonly __brand: 'MLOperand';
    readonly dataType: MLOperandDataType;
    readonly shape: ReadonlyArray<number>;
}

declare var MLOperand: {
    prototype: MLOperand;
    new (): never;
};

interface MLTensor {
    /** @internal Workaround for [nominal typing](https://github.com/microsoft/TypeScript/pull/33038). */
    readonly __brand: 'MLTensor';
    readonly dataType: MLOperandDataType;
    readonly shape: ReadonlyArray<number>;
    readonly importableToWebGPU: boolean;
    readonly readable: boolean;
    readonly writable: boolean;
    destroy(): undefined;
}

declare var MLTensor: {
    prototype: MLTensor;
    new (): never;
};

interface Navigator extends NavigatorML {
}

interface WorkerNavigator extends NavigatorML {
}

