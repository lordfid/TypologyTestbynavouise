export type QuestionKind =
  | "forcedChoice"
  | "singleChoice"
  | "multiChoice"
  | "ranking"
  | "firstReaction"
  | "hiddenReaction";

export type AnswerKind =
  | "left"
  | "right"
  | "both"
  | "neither"
  | "depends"
  | "skip"
  | "choice"
  | "multi"
  | "rank";

export type QuestionDomain =
  | "family"
  | "friendship"
  | "romance"
  | "idealPartner"
  | "preference"
  | "work"
  | "school"
  | "money"
  | "moral"
  | "stress"
  | "identity"
  | "daily";

export type CognitiveFunction =
  | "Ni"
  | "Ne"
  | "Si"
  | "Se"
  | "Fi"
  | "Fe"
  | "Ti"
  | "Te";

export type StackRole =
  | "dominant"
  | "auxiliary"
  | "tertiary"
  | "inferior"
  | "opposing"
  | "critical"
  | "trickster"
  | "transformative";

export type MBTILetter =
  | "I"
  | "E"
  | "N"
  | "S"
  | "F"
  | "T"
  | "J"
  | "P";

export type MBTIAxis =
  | "I"
  | "E"
  | "N"
  | "S"
  | "F"
  | "T"
  | "J"
  | "P";

export type MBTIType =
  | "INTJ"
  | "INTP"
  | "ENTJ"
  | "ENTP"
  | "INFJ"
  | "INFP"
  | "ENFJ"
  | "ENFP"
  | "ISTJ"
  | "ISFJ"
  | "ESTJ"
  | "ESFJ"
  | "ISTP"
  | "ISFP"
  | "ESTP"
  | "ESFP";

export type EnneagramType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

export type WingType =
  | "1w9"
  | "1w2"
  | "2w1"
  | "2w3"
  | "3w2"
  | "3w4"
  | "4w3"
  | "4w5"
  | "5w4"
  | "5w6"
  | "6w5"
  | "6w7"
  | "7w6"
  | "7w8"
  | "8w7"
  | "8w9"
  | "9w8"
  | "9w1";

export type Instinct =
  | "sp"
  | "sx"
  | "so";

export type InstinctStacking =
  | "sp/sx"
  | "sp/so"
  | "sx/sp"
  | "sx/so"
  | "so/sp"
  | "so/sx";

export type TritypeCenter =
  | "heart"
  | "head"
  | "gut";

export type BigFiveTrait =
  | "openness"
  | "conscientiousness"
  | "extraversion"
  | "agreeableness"
  | "neuroticism";

export type HexacoTrait =
  | "honestyHumility"
  | "emotionality"
  | "extraversion"
  | "agreeableness"
  | "conscientiousness"
  | "openness";

export type TemperamentType =
  | "sanguine"
  | "choleric"
  | "melancholic"
  | "phlegmatic";

export type SocionicsType =
  | "ILE"
  | "SEI"
  | "ESE"
  | "LII"
  | "EIE"
  | "LSI"
  | "SLE"
  | "IEI"
  | "SEE"
  | "ILI"
  | "LIE"
  | "ESI"
  | "LSE"
  | "EII"
  | "IEE"
  | "SLI";

export type AttitudinalPsycheAspect =
  | "L"
  | "E"
  | "V"
  | "F";

export type AttitudinalPsychePosition =
  | "1"
  | "2"
  | "3"
  | "4";

export type AttitudinalPsycheType =
  | "LVEF"
  | "LVFE"
  | "LEVF"
  | "LEFV"
  | "LFVE"
  | "LFEV"
  | "VLEF"
  | "VLFE"
  | "VELF"
  | "VEFL"
  | "VFLE"
  | "VFEL"
  | "ELVF"
  | "ELFV"
  | "EVLF"
  | "EVFL"
  | "EFLV"
  | "EFVL"
  | "FLVE"
  | "FLEV"
  | "FVLE"
  | "FVEL"
  | "FELV"
  | "FEVL";

export type DiscType =
  | "D"
  | "I"
  | "S"
  | "C";

export type RiasecType =
  | "R"
  | "I"
  | "A"
  | "S"
  | "E"
  | "C";

export type MoralStyle =
  | "principled"
  | "careBased"
  | "justiceBased"
  | "loyaltyBased"
  | "freedomBased"
  | "harmonyBased"
  | "truthBased"
  | "outcomeBased";

export type DecisionStyle =
  | "analytical"
  | "intuitive"
  | "consensusSeeking"
  | "decisive"
  | "cautious"
  | "adaptive"
  | "valuesDriven"
  | "evidenceDriven";

export type ConflictStyle =
  | "direct"
  | "avoidant"
  | "accommodating"
  | "compromising"
  | "collaborative"
  | "defensive"
  | "withdrawn"
  | "mediating";

export type CommunicationStyle =
  | "warm"
  | "precise"
  | "expressive"
  | "reserved"
  | "diplomatic"
  | "blunt"
  | "reflective"
  | "persuasive";

export type RelationshipTendency =
  | "secure"
  | "anxious"
  | "avoidant"
  | "disorganized"
  | "caretaking"
  | "independent"
  | "intense"
  | "slowTrust";

export type StressResponse =
  | "freeze"
  | "fight"
  | "flight"
  | "fawn"
  | "control"
  | "collapse"
  | "overthink"
  | "numb"
  | "impulsive";

export type DefensePattern =
  | "rationalization"
  | "withdrawal"
  | "projection"
  | "idealization"
  | "devaluation"
  | "denial"
  | "peoplePleasing"
  | "perfectionism"
  | "detachment"
  | "control";

export type ValueTheme =
  | "meaning"
  | "freedom"
  | "security"
  | "love"
  | "truth"
  | "success"
  | "beauty"
  | "control"
  | "peace"
  | "impact"
  | "excitement"
  | "competence"
  | "understanding"
  | "respect"
  | "connection"
  | "future";

export type WorkStyle =
  | "independent"
  | "collaborative"
  | "structured"
  | "flexible"
  | "strategic"
  | "handsOn"
  | "creative"
  | "serviceOriented"
  | "leadershipDriven"
  | "specialist";

export type LearningStyle =
  | "visual"
  | "verbal"
  | "experiential"
  | "reflective"
  | "structured"
  | "exploratory"
  | "social"
  | "solitary"
  | "patternBased"
  | "practiceBased";

export type CoreFear =
  | "beingControlled"
  | "beingAbandoned"
  | "beingWorthless"
  | "beingOrdinary"
  | "beingIncapable"
  | "beingUnsafe"
  | "beingTrapped"
  | "beingWeak"
  | "beingDisconnected"
  | "beingMisunderstood";

export type CoreDesire =
  | "autonomy"
  | "love"
  | "achievement"
  | "identity"
  | "competence"
  | "safety"
  | "freedom"
  | "strength"
  | "peace"
  | "meaning";

export type IdealPartnerTendency =
  | "emotionallySafe"
  | "intellectuallyStimulating"
  | "adventurous"
  | "loyal"
  | "gentle"
  | "ambitious"
  | "deep"
  | "playful"
  | "protective"
  | "independent";

export type PreferredLoveStyle =
  | "slowBurn"
  | "intenseBond"
  | "steadyCare"
  | "playfulFlirtation"
  | "actsOfService"
  | "deepConversation"
  | "protectivePresence"
  | "sharedAdventure"
  | "quietLoyalty"
  | "romanticExpression";

export type PreferredEnvironment =
  | "calm"
  | "dynamic"
  | "private"
  | "social"
  | "structured"
  | "openEnded"
  | "beautiful"
  | "practical"
  | "challenging"
  | "supportive";

export type ReliabilitySignal =
  | "consistent"
  | "slightlyMixed"
  | "contradictory"
  | "tooNeutral"
  | "tooExtreme"
  | "skippedOften"
  | "tieHeavy";

export type AmbiguitySignal =
  | "clear"
  | "moderate"
  | "high"
  | "needsTieBreak";

export type EvidenceSignal =
  | "direct"
  | "indirect"
  | "behavioral"
  | "emotional"
  | "relational"
  | "stressBased"
  | "preferenceBased"
  | "valueBased"
  | "tieBreakBased";

export type TargetSystem =
  | "cognitive"
  | "stackRole"
  | "mbtiAxis"
  | "enneagram"
  | "instinct"
  | "bigFive"
  | "hexaco"
  | "socionics"
  | "temperament"
  | "attitudinalPsyche"
  | "disc"
  | "riasec"
  | "moral"
  | "decision"
  | "conflict"
  | "communication"
  | "relationship"
  | "stress"
  | "defense"
  | "values"
  | "work"
  | "learning"
  | "coreFear"
  | "coreDesire"
  | "idealPartner"
  | "loveStyle"
  | "environment"
  | "reliability"
  | "tieBreak";

export type FunctionRoleKey = `${CognitiveFunction}_${StackRole}`;

export type AttitudinalPsychePositionKey =
  `${AttitudinalPsycheAspect}${AttitudinalPsychePosition}`;

export type ScoreMap<K extends string> = Partial<Record<K, number>>;

export interface ScoreWeight {
  cognitive?: ScoreMap<CognitiveFunction>;
  stackRole?: ScoreMap<StackRole | FunctionRoleKey>;
  mbtiAxis?: ScoreMap<MBTIAxis>;
  enneagram?: ScoreMap<EnneagramType>;
  instinct?: ScoreMap<Instinct>;
  bigFive?: ScoreMap<BigFiveTrait>;
  hexaco?: ScoreMap<HexacoTrait>;
  attitudinalPsyche?: ScoreMap<
    AttitudinalPsycheAspect | AttitudinalPsychePositionKey | AttitudinalPsycheType
  >;
  disc?: ScoreMap<DiscType>;
  riasec?: ScoreMap<RiasecType>;
  moral?: ScoreMap<MoralStyle>;
  decision?: ScoreMap<DecisionStyle>;
  conflict?: ScoreMap<ConflictStyle>;
  communication?: ScoreMap<CommunicationStyle>;
  relationship?: ScoreMap<RelationshipTendency>;
  stress?: ScoreMap<StressResponse>;
  defense?: ScoreMap<DefensePattern>;
  values?: ScoreMap<ValueTheme>;
  work?: ScoreMap<WorkStyle>;
  learning?: ScoreMap<LearningStyle>;
  coreFear?: ScoreMap<CoreFear>;
  coreDesire?: ScoreMap<CoreDesire>;
  evidence?: ScoreMap<EvidenceSignal>;
  positive?: number;
  negative?: number;
  reliability?: number;
  ambiguity?: number;
  contradiction?: number;
}

export interface QuestionOption {
  id: string;
  text: string;
  subtleMeaning: string;
  weights: ScoreWeight;
}

export interface QuestionSide {
  id: string;
  text: string;
  subtleMeaning: string;
  weights: ScoreWeight;
}

export interface QuestionReliability {
  reverseKeyed?: boolean;
  consistencyGroup?: string;
  contradictionGroup?: string;
  expectedAnswerKinds?: AnswerKind[];
  minConfidenceImpact: number;
  maxConfidenceImpact: number;
  ambiguityRisk: number;
}

export interface QuestionItem {
  id: string;
  kind: QuestionKind;
  domain: QuestionDomain;
  context: string;
  prompt: string;
  instruction: string;
  options: QuestionOption[];
  left?: QuestionSide;
  right?: QuestionSide;
  maxSelect?: number;
  minSelect?: number;
  rankLimit?: number;
  reliability: QuestionReliability;
  targetSystems: TargetSystem[];
}

export interface UserAnswer {
  questionId: string;
  kind: QuestionKind;
  answerKind: AnswerKind;
  selectedOptionId?: string;
  selectedOptionIds?: string[];
  rankedOptionIds?: string[];
  side?: "left" | "right" | "both" | "neither";
  timestamp: number;
}

export interface RankedScore<T extends string> {
  key: T;
  score: number;
  normalizedScore: number;
  rank: number;
  label?: string;
  description?: string;
}

export interface ScoreEvidence {
  questionId: string;
  optionId?: string;
  answerKind: AnswerKind;
  system: TargetSystem;
  target: string;
  points: number;
  subtleMeaning: string;
}

export interface RawScores {
  cognitive: Record<CognitiveFunction, number>;
  stackRole: Record<string, number>;
  mbtiAxis: Record<MBTIAxis, number>;
  enneagram: Record<EnneagramType, number>;
  instinct: Record<Instinct, number>;
  bigFive: Record<BigFiveTrait, number>;
  hexaco: Record<HexacoTrait, number>;
  attitudinalPsyche: Record<string, number>;
  disc: Record<DiscType, number>;
  riasec: Record<RiasecType, number>;
  moral: Record<MoralStyle, number>;
  decision: Record<DecisionStyle, number>;
  conflict: Record<ConflictStyle, number>;
  communication: Record<CommunicationStyle, number>;
  relationship: Record<RelationshipTendency, number>;
  stress: Record<StressResponse, number>;
  defense: Record<DefensePattern, number>;
  values: Record<ValueTheme, number>;
  work: Record<WorkStyle, number>;
  learning: Record<LearningStyle, number>;
  coreFear: Record<CoreFear, number>;
  coreDesire: Record<CoreDesire, number>;
  idealPartner: Record<IdealPartnerTendency, number>;
  loveStyle: Record<PreferredLoveStyle, number>;
  environment: Record<PreferredEnvironment, number>;
  reliability: number;
  ambiguity: number;
  contradiction: number;
  evidence: ScoreEvidence[];
}

export interface NormalizedScores {
  cognitive: RankedScore<CognitiveFunction>[];
  stackRole: RankedScore<string>[];
  mbtiAxis: RankedScore<MBTIAxis>[];
  enneagram: RankedScore<EnneagramType>[];
  instinct: RankedScore<Instinct>[];
  bigFive: RankedScore<BigFiveTrait>[];
  hexaco: RankedScore<HexacoTrait>[];
  attitudinalPsyche: RankedScore<string>[];
  disc: RankedScore<DiscType>[];
  riasec: RankedScore<RiasecType>[];
  moral: RankedScore<MoralStyle>[];
  decision: RankedScore<DecisionStyle>[];
  conflict: RankedScore<ConflictStyle>[];
  communication: RankedScore<CommunicationStyle>[];
  relationship: RankedScore<RelationshipTendency>[];
  stress: RankedScore<StressResponse>[];
  defense: RankedScore<DefensePattern>[];
  values: RankedScore<ValueTheme>[];
  work: RankedScore<WorkStyle>[];
  learning: RankedScore<LearningStyle>[];
  coreFear: RankedScore<CoreFear>[];
  coreDesire: RankedScore<CoreDesire>[];
  idealPartner: RankedScore<IdealPartnerTendency>[];
  loveStyle: RankedScore<PreferredLoveStyle>[];
  environment: RankedScore<PreferredEnvironment>[];
}

export interface MBTIResult {
  type: MBTIType;
  score: number;
  confidence: number;
  dominantFunction: CognitiveFunction;
  auxiliaryFunction: CognitiveFunction;
  tertiaryFunction: CognitiveFunction;
  inferiorFunction: CognitiveFunction;
  reason: string;
}

export interface StackFitResult {
  type: MBTIType;
  fitScore: number;
  matchedRoles: Partial<Record<StackRole, CognitiveFunction>>;
  mismatchNotes: string[];
}

export interface FunctionRoleResult {
  role: StackRole;
  function: CognitiveFunction;
  score: number;
  interpretation: string;
}

export interface ShadowRoleResult {
  role: Extract<StackRole, "opposing" | "critical" | "trickster" | "transformative">;
  function: CognitiveFunction;
  score: number;
  trigger: string;
  likelyPattern: string;
}

export interface EnneagramResult {
  type: EnneagramType;
  score: number;
  confidence: number;
  coreFear: CoreFear;
  coreDesire: CoreDesire;
  description: string;
}

export interface WingResult {
  wing: WingType;
  mainType: EnneagramType;
  wingType: EnneagramType;
  score: number;
  confidence: number;
  description: string;
}

export interface TritypeResult {
  code: string;
  heart: EnneagramType;
  head: EnneagramType;
  gut: EnneagramType;
  score: number;
  description: string;
}

export interface BigFiveResult {
  trait: BigFiveTrait;
  score: number;
  level: "low" | "moderate" | "high";
  description: string;
}

export interface HexacoResult {
  trait: HexacoTrait;
  score: number;
  level: "low" | "moderate" | "high";
  description: string;
}

export interface SocionicsResult {
  type: SocionicsType;
  score: number;
  confidence: number;
  description: string;
}

export interface TemperamentResult {
  type: TemperamentType;
  score: number;
  description: string;
}

export interface AttitudinalPsycheResult {
  type: AttitudinalPsycheType;
  score: number;
  confidence: number;
  positions: Record<AttitudinalPsychePosition, AttitudinalPsycheAspect>;
  description: string;
}

export interface DiscResult {
  type: DiscType;
  score: number;
  description: string;
}

export interface RiasecResult {
  type: RiasecType;
  score: number;
  description: string;
}

export interface StyleResult<T extends string> {
  type: T;
  score: number;
  confidence: number;
  description: string;
}

export interface ConfidenceResult {
  overall: number;
  label: "rendah" | "sedang" | "cukup kuat" | "kuat";
  reliability: number;
  ambiguity: number;
  contradiction: number;
  consistencyNotes: string[];
}

export interface ResultNote {
  title: string;
  body: string;
  severity: "info" | "warning" | "important";
}

export interface FinalResult {
  summary: string;
  topMBTI: MBTIResult[];
  cognitiveRanking: RankedScore<CognitiveFunction>[];
  stackFit: StackFitResult[];
  functionRoles: FunctionRoleResult[];
  shadowRoles: ShadowRoleResult[];
  enneagram: EnneagramResult;
  wing: WingResult;
  instinctStacking: InstinctStacking;
  tritype: TritypeResult;
  bigFive: BigFiveResult[];
  hexaco: HexacoResult[];
  socionics: SocionicsResult;
  temperament: TemperamentResult;
  attitudinalPsyche: AttitudinalPsycheResult;
  disc: DiscResult[];
  riasec: RiasecResult[];
  moralStyle: StyleResult<MoralStyle>;
  decisionStyle: StyleResult<DecisionStyle>;
  conflictStyle: StyleResult<ConflictStyle>;
  communicationStyle: StyleResult<CommunicationStyle>;
  relationshipTendency: StyleResult<RelationshipTendency>;
  stressResponse: StyleResult<StressResponse>;
  coreFear: StyleResult<CoreFear>;
  coreDesire: StyleResult<CoreDesire>;
  valuesRanking: RankedScore<ValueTheme>[];
  workStyle: StyleResult<WorkStyle>;
  learningStyle: StyleResult<LearningStyle>;
  defensePattern: StyleResult<DefensePattern>;
  idealPartnerTendency: StyleResult<IdealPartnerTendency>;
  preferredLoveStyle: StyleResult<PreferredLoveStyle>;
  preferredEnvironment: StyleResult<PreferredEnvironment>;
  confidence: ConfidenceResult;
  notes: ResultNote[];
  completedAt: string;
}

export interface TestProgress {
  currentIndex: number;
  totalQuestions: number;
  answeredQuestions: number;
  isCompleted: boolean;
  startedAt: string;
  updatedAt: string;
}

export interface StoredSession {
  version: string;
  appName: "Rasi Diri";
  answers: UserAnswer[];
  progress: TestProgress;
  result?: FinalResult;
}

export interface StorageState {
  session: StoredSession | null;
  theme: "light" | "dark";
  lastSavedAt?: string;
}

export interface ShareCardData {
  appName: "Rasi Diri";
  title: string;
  subtitle: string;
  mbti: MBTIType;
  enneagram: EnneagramType;
  wing: WingType;
  instinctStacking: InstinctStacking;
  topFunctions: CognitiveFunction[];
  highlights: string[];
  confidenceLabel: ConfidenceResult["label"];
  generatedAt: string;
}

export interface EmailResultPayload {
  to?: string;
  subject: string;
  plainText: string;
  result: FinalResult;
  shareCard: ShareCardData;
}

export interface ResultNarrationInput {
  result: FinalResult;
  evidence: ScoreEvidence[];
  tone: "gentle" | "direct" | "deep" | "balanced";
}

export interface AuditIssue {
  id: string;
  severity: "low" | "medium" | "high";
  message: string;
  relatedSystem?: TargetSystem;
  relatedQuestionId?: string;
}

export interface ScoringAuditReport {
  totalQuestions: number;
  totalOptions: number;
  targetSystemCoverage: Record<TargetSystem, number>;
  cognitiveCoverage: Record<CognitiveFunction, number>;
  enneagramCoverage: Record<EnneagramType, number>;
  instinctCoverage: Record<Instinct, number>;
  issues: AuditIssue[];
}

export interface FairnessReport {
  isBalanced: boolean;
  minimumCoverageMet: boolean;
  overloadedSystems: TargetSystem[];
  underloadedSystems: TargetSystem[];
  notes: string[];
}

export interface TieBreakInput {
  answers: UserAnswer[];
  rawScores: RawScores;
  normalizedScores: NormalizedScores;
}

export interface TieBreakResult {
  resolved: boolean;
  reason: string;
  affectedSystems: TargetSystem[];
  recommendedQuestionIds: string[];
}
