
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CalendarEvent
 * 
 */
export type CalendarEvent = $Result.DefaultSelection<Prisma.$CalendarEventPayload>
/**
 * Model Lecture
 * 
 */
export type Lecture = $Result.DefaultSelection<Prisma.$LecturePayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model ESEntry
 * 
 */
export type ESEntry = $Result.DefaultSelection<Prisma.$ESEntryPayload>
/**
 * Model ESQuestion
 * 
 */
export type ESQuestion = $Result.DefaultSelection<Prisma.$ESQuestionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more CalendarEvents
 * const calendarEvents = await prisma.calendarEvent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more CalendarEvents
   * const calendarEvents = await prisma.calendarEvent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.calendarEvent`: Exposes CRUD operations for the **CalendarEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalendarEvents
    * const calendarEvents = await prisma.calendarEvent.findMany()
    * ```
    */
  get calendarEvent(): Prisma.CalendarEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecture`: Exposes CRUD operations for the **Lecture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lectures
    * const lectures = await prisma.lecture.findMany()
    * ```
    */
  get lecture(): Prisma.LectureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eSEntry`: Exposes CRUD operations for the **ESEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ESEntries
    * const eSEntries = await prisma.eSEntry.findMany()
    * ```
    */
  get eSEntry(): Prisma.ESEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eSQuestion`: Exposes CRUD operations for the **ESQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ESQuestions
    * const eSQuestions = await prisma.eSQuestion.findMany()
    * ```
    */
  get eSQuestion(): Prisma.ESQuestionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CalendarEvent: 'CalendarEvent',
    Lecture: 'Lecture',
    Company: 'Company',
    ESEntry: 'ESEntry',
    ESQuestion: 'ESQuestion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "calendarEvent" | "lecture" | "company" | "eSEntry" | "eSQuestion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CalendarEvent: {
        payload: Prisma.$CalendarEventPayload<ExtArgs>
        fields: Prisma.CalendarEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          findFirst: {
            args: Prisma.CalendarEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          findMany: {
            args: Prisma.CalendarEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          create: {
            args: Prisma.CalendarEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          createMany: {
            args: Prisma.CalendarEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          delete: {
            args: Prisma.CalendarEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          update: {
            args: Prisma.CalendarEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          deleteMany: {
            args: Prisma.CalendarEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          upsert: {
            args: Prisma.CalendarEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          aggregate: {
            args: Prisma.CalendarEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendarEvent>
          }
          groupBy: {
            args: Prisma.CalendarEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarEventCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarEventCountAggregateOutputType> | number
          }
        }
      }
      Lecture: {
        payload: Prisma.$LecturePayload<ExtArgs>
        fields: Prisma.LectureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LectureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LectureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          findFirst: {
            args: Prisma.LectureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LectureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          findMany: {
            args: Prisma.LectureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>[]
          }
          create: {
            args: Prisma.LectureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          createMany: {
            args: Prisma.LectureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LectureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>[]
          }
          delete: {
            args: Prisma.LectureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          update: {
            args: Prisma.LectureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          deleteMany: {
            args: Prisma.LectureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LectureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LectureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>[]
          }
          upsert: {
            args: Prisma.LectureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          aggregate: {
            args: Prisma.LectureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecture>
          }
          groupBy: {
            args: Prisma.LectureGroupByArgs<ExtArgs>
            result: $Utils.Optional<LectureGroupByOutputType>[]
          }
          count: {
            args: Prisma.LectureCountArgs<ExtArgs>
            result: $Utils.Optional<LectureCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      ESEntry: {
        payload: Prisma.$ESEntryPayload<ExtArgs>
        fields: Prisma.ESEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ESEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ESEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESEntryPayload>
          }
          findFirst: {
            args: Prisma.ESEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ESEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESEntryPayload>
          }
          findMany: {
            args: Prisma.ESEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESEntryPayload>[]
          }
          create: {
            args: Prisma.ESEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESEntryPayload>
          }
          createMany: {
            args: Prisma.ESEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ESEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESEntryPayload>[]
          }
          delete: {
            args: Prisma.ESEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESEntryPayload>
          }
          update: {
            args: Prisma.ESEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESEntryPayload>
          }
          deleteMany: {
            args: Prisma.ESEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ESEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ESEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESEntryPayload>[]
          }
          upsert: {
            args: Prisma.ESEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESEntryPayload>
          }
          aggregate: {
            args: Prisma.ESEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateESEntry>
          }
          groupBy: {
            args: Prisma.ESEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ESEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ESEntryCountArgs<ExtArgs>
            result: $Utils.Optional<ESEntryCountAggregateOutputType> | number
          }
        }
      }
      ESQuestion: {
        payload: Prisma.$ESQuestionPayload<ExtArgs>
        fields: Prisma.ESQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ESQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ESQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESQuestionPayload>
          }
          findFirst: {
            args: Prisma.ESQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ESQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESQuestionPayload>
          }
          findMany: {
            args: Prisma.ESQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESQuestionPayload>[]
          }
          create: {
            args: Prisma.ESQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESQuestionPayload>
          }
          createMany: {
            args: Prisma.ESQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ESQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESQuestionPayload>[]
          }
          delete: {
            args: Prisma.ESQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESQuestionPayload>
          }
          update: {
            args: Prisma.ESQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESQuestionPayload>
          }
          deleteMany: {
            args: Prisma.ESQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ESQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ESQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESQuestionPayload>[]
          }
          upsert: {
            args: Prisma.ESQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESQuestionPayload>
          }
          aggregate: {
            args: Prisma.ESQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateESQuestion>
          }
          groupBy: {
            args: Prisma.ESQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ESQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ESQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<ESQuestionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    calendarEvent?: CalendarEventOmit
    lecture?: LectureOmit
    company?: CompanyOmit
    eSEntry?: ESEntryOmit
    eSQuestion?: ESQuestionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    esEntries: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    esEntries?: boolean | CompanyCountOutputTypeCountEsEntriesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEsEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ESEntryWhereInput
  }


  /**
   * Count Type ESEntryCountOutputType
   */

  export type ESEntryCountOutputType = {
    questions: number
  }

  export type ESEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | ESEntryCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * ESEntryCountOutputType without action
   */
  export type ESEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntryCountOutputType
     */
    select?: ESEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ESEntryCountOutputType without action
   */
  export type ESEntryCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ESQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CalendarEvent
   */

  export type AggregateCalendarEvent = {
    _count: CalendarEventCountAggregateOutputType | null
    _min: CalendarEventMinAggregateOutputType | null
    _max: CalendarEventMaxAggregateOutputType | null
  }

  export type CalendarEventMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: string | null
    category: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CalendarEventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: string | null
    category: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CalendarEventCountAggregateOutputType = {
    id: number
    title: number
    date: number
    category: number
    description: number
    createdAt: number
    _all: number
  }


  export type CalendarEventMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    category?: true
    description?: true
    createdAt?: true
  }

  export type CalendarEventMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    category?: true
    description?: true
    createdAt?: true
  }

  export type CalendarEventCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    category?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CalendarEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarEvent to aggregate.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalendarEvents
    **/
    _count?: true | CalendarEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarEventMaxAggregateInputType
  }

  export type GetCalendarEventAggregateType<T extends CalendarEventAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendarEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendarEvent[P]>
      : GetScalarType<T[P], AggregateCalendarEvent[P]>
  }




  export type CalendarEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
    orderBy?: CalendarEventOrderByWithAggregationInput | CalendarEventOrderByWithAggregationInput[]
    by: CalendarEventScalarFieldEnum[] | CalendarEventScalarFieldEnum
    having?: CalendarEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarEventCountAggregateInputType | true
    _min?: CalendarEventMinAggregateInputType
    _max?: CalendarEventMaxAggregateInputType
  }

  export type CalendarEventGroupByOutputType = {
    id: string
    title: string
    date: string
    category: string
    description: string | null
    createdAt: Date
    _count: CalendarEventCountAggregateOutputType | null
    _min: CalendarEventMinAggregateOutputType | null
    _max: CalendarEventMaxAggregateOutputType | null
  }

  type GetCalendarEventGroupByPayload<T extends CalendarEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarEventGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarEventGroupByOutputType[P]>
        }
      >
    >


  export type CalendarEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type CalendarEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "category" | "description" | "createdAt", ExtArgs["result"]["calendarEvent"]>

  export type $CalendarEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalendarEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      date: string
      category: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["calendarEvent"]>
    composites: {}
  }

  type CalendarEventGetPayload<S extends boolean | null | undefined | CalendarEventDefaultArgs> = $Result.GetResult<Prisma.$CalendarEventPayload, S>

  type CalendarEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarEventCountAggregateInputType | true
    }

  export interface CalendarEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalendarEvent'], meta: { name: 'CalendarEvent' } }
    /**
     * Find zero or one CalendarEvent that matches the filter.
     * @param {CalendarEventFindUniqueArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarEventFindUniqueArgs>(args: SelectSubset<T, CalendarEventFindUniqueArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CalendarEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarEventFindUniqueOrThrowArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarEventFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindFirstArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarEventFindFirstArgs>(args?: SelectSubset<T, CalendarEventFindFirstArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindFirstOrThrowArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarEventFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CalendarEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalendarEvents
     * const calendarEvents = await prisma.calendarEvent.findMany()
     * 
     * // Get first 10 CalendarEvents
     * const calendarEvents = await prisma.calendarEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarEventFindManyArgs>(args?: SelectSubset<T, CalendarEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CalendarEvent.
     * @param {CalendarEventCreateArgs} args - Arguments to create a CalendarEvent.
     * @example
     * // Create one CalendarEvent
     * const CalendarEvent = await prisma.calendarEvent.create({
     *   data: {
     *     // ... data to create a CalendarEvent
     *   }
     * })
     * 
     */
    create<T extends CalendarEventCreateArgs>(args: SelectSubset<T, CalendarEventCreateArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CalendarEvents.
     * @param {CalendarEventCreateManyArgs} args - Arguments to create many CalendarEvents.
     * @example
     * // Create many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarEventCreateManyArgs>(args?: SelectSubset<T, CalendarEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalendarEvents and returns the data saved in the database.
     * @param {CalendarEventCreateManyAndReturnArgs} args - Arguments to create many CalendarEvents.
     * @example
     * // Create many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalendarEvents and only return the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarEventCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CalendarEvent.
     * @param {CalendarEventDeleteArgs} args - Arguments to delete one CalendarEvent.
     * @example
     * // Delete one CalendarEvent
     * const CalendarEvent = await prisma.calendarEvent.delete({
     *   where: {
     *     // ... filter to delete one CalendarEvent
     *   }
     * })
     * 
     */
    delete<T extends CalendarEventDeleteArgs>(args: SelectSubset<T, CalendarEventDeleteArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CalendarEvent.
     * @param {CalendarEventUpdateArgs} args - Arguments to update one CalendarEvent.
     * @example
     * // Update one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarEventUpdateArgs>(args: SelectSubset<T, CalendarEventUpdateArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CalendarEvents.
     * @param {CalendarEventDeleteManyArgs} args - Arguments to filter CalendarEvents to delete.
     * @example
     * // Delete a few CalendarEvents
     * const { count } = await prisma.calendarEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarEventDeleteManyArgs>(args?: SelectSubset<T, CalendarEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarEventUpdateManyArgs>(args: SelectSubset<T, CalendarEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarEvents and returns the data updated in the database.
     * @param {CalendarEventUpdateManyAndReturnArgs} args - Arguments to update many CalendarEvents.
     * @example
     * // Update many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalendarEvents and only return the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CalendarEventUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CalendarEvent.
     * @param {CalendarEventUpsertArgs} args - Arguments to update or create a CalendarEvent.
     * @example
     * // Update or create a CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.upsert({
     *   create: {
     *     // ... data to create a CalendarEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalendarEvent we want to update
     *   }
     * })
     */
    upsert<T extends CalendarEventUpsertArgs>(args: SelectSubset<T, CalendarEventUpsertArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CalendarEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventCountArgs} args - Arguments to filter CalendarEvents to count.
     * @example
     * // Count the number of CalendarEvents
     * const count = await prisma.calendarEvent.count({
     *   where: {
     *     // ... the filter for the CalendarEvents we want to count
     *   }
     * })
    **/
    count<T extends CalendarEventCountArgs>(
      args?: Subset<T, CalendarEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalendarEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalendarEventAggregateArgs>(args: Subset<T, CalendarEventAggregateArgs>): Prisma.PrismaPromise<GetCalendarEventAggregateType<T>>

    /**
     * Group by CalendarEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CalendarEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarEventGroupByArgs['orderBy'] }
        : { orderBy?: CalendarEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CalendarEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalendarEvent model
   */
  readonly fields: CalendarEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendarEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CalendarEvent model
   */
  interface CalendarEventFieldRefs {
    readonly id: FieldRef<"CalendarEvent", 'String'>
    readonly title: FieldRef<"CalendarEvent", 'String'>
    readonly date: FieldRef<"CalendarEvent", 'String'>
    readonly category: FieldRef<"CalendarEvent", 'String'>
    readonly description: FieldRef<"CalendarEvent", 'String'>
    readonly createdAt: FieldRef<"CalendarEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CalendarEvent findUnique
   */
  export type CalendarEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent findUniqueOrThrow
   */
  export type CalendarEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent findFirst
   */
  export type CalendarEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEvents.
     */
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent findFirstOrThrow
   */
  export type CalendarEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEvents.
     */
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent findMany
   */
  export type CalendarEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Filter, which CalendarEvents to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEvents.
     */
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent create
   */
  export type CalendarEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data needed to create a CalendarEvent.
     */
    data: XOR<CalendarEventCreateInput, CalendarEventUncheckedCreateInput>
  }

  /**
   * CalendarEvent createMany
   */
  export type CalendarEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalendarEvents.
     */
    data: CalendarEventCreateManyInput | CalendarEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalendarEvent createManyAndReturn
   */
  export type CalendarEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data used to create many CalendarEvents.
     */
    data: CalendarEventCreateManyInput | CalendarEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalendarEvent update
   */
  export type CalendarEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data needed to update a CalendarEvent.
     */
    data: XOR<CalendarEventUpdateInput, CalendarEventUncheckedUpdateInput>
    /**
     * Choose, which CalendarEvent to update.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent updateMany
   */
  export type CalendarEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalendarEvents.
     */
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyInput>
    /**
     * Filter which CalendarEvents to update
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to update.
     */
    limit?: number
  }

  /**
   * CalendarEvent updateManyAndReturn
   */
  export type CalendarEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data used to update CalendarEvents.
     */
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyInput>
    /**
     * Filter which CalendarEvents to update
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to update.
     */
    limit?: number
  }

  /**
   * CalendarEvent upsert
   */
  export type CalendarEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The filter to search for the CalendarEvent to update in case it exists.
     */
    where: CalendarEventWhereUniqueInput
    /**
     * In case the CalendarEvent found by the `where` argument doesn't exist, create a new CalendarEvent with this data.
     */
    create: XOR<CalendarEventCreateInput, CalendarEventUncheckedCreateInput>
    /**
     * In case the CalendarEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarEventUpdateInput, CalendarEventUncheckedUpdateInput>
  }

  /**
   * CalendarEvent delete
   */
  export type CalendarEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Filter which CalendarEvent to delete.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent deleteMany
   */
  export type CalendarEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarEvents to delete
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to delete.
     */
    limit?: number
  }

  /**
   * CalendarEvent without action
   */
  export type CalendarEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
  }


  /**
   * Model Lecture
   */

  export type AggregateLecture = {
    _count: LectureCountAggregateOutputType | null
    _avg: LectureAvgAggregateOutputType | null
    _sum: LectureSumAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  export type LectureAvgAggregateOutputType = {
    period: number | null
  }

  export type LectureSumAggregateOutputType = {
    period: number | null
  }

  export type LectureMinAggregateOutputType = {
    id: string | null
    name: string | null
    dayOfWeek: string | null
    period: number | null
    memo: string | null
    assignment: string | null
    assignmentDeadline: string | null
    attended: boolean | null
    createdAt: Date | null
  }

  export type LectureMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dayOfWeek: string | null
    period: number | null
    memo: string | null
    assignment: string | null
    assignmentDeadline: string | null
    attended: boolean | null
    createdAt: Date | null
  }

  export type LectureCountAggregateOutputType = {
    id: number
    name: number
    dayOfWeek: number
    period: number
    memo: number
    assignment: number
    assignmentDeadline: number
    attended: number
    createdAt: number
    _all: number
  }


  export type LectureAvgAggregateInputType = {
    period?: true
  }

  export type LectureSumAggregateInputType = {
    period?: true
  }

  export type LectureMinAggregateInputType = {
    id?: true
    name?: true
    dayOfWeek?: true
    period?: true
    memo?: true
    assignment?: true
    assignmentDeadline?: true
    attended?: true
    createdAt?: true
  }

  export type LectureMaxAggregateInputType = {
    id?: true
    name?: true
    dayOfWeek?: true
    period?: true
    memo?: true
    assignment?: true
    assignmentDeadline?: true
    attended?: true
    createdAt?: true
  }

  export type LectureCountAggregateInputType = {
    id?: true
    name?: true
    dayOfWeek?: true
    period?: true
    memo?: true
    assignment?: true
    assignmentDeadline?: true
    attended?: true
    createdAt?: true
    _all?: true
  }

  export type LectureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecture to aggregate.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lectures
    **/
    _count?: true | LectureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LectureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LectureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LectureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LectureMaxAggregateInputType
  }

  export type GetLectureAggregateType<T extends LectureAggregateArgs> = {
        [P in keyof T & keyof AggregateLecture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecture[P]>
      : GetScalarType<T[P], AggregateLecture[P]>
  }




  export type LectureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureWhereInput
    orderBy?: LectureOrderByWithAggregationInput | LectureOrderByWithAggregationInput[]
    by: LectureScalarFieldEnum[] | LectureScalarFieldEnum
    having?: LectureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LectureCountAggregateInputType | true
    _avg?: LectureAvgAggregateInputType
    _sum?: LectureSumAggregateInputType
    _min?: LectureMinAggregateInputType
    _max?: LectureMaxAggregateInputType
  }

  export type LectureGroupByOutputType = {
    id: string
    name: string
    dayOfWeek: string
    period: number
    memo: string | null
    assignment: string | null
    assignmentDeadline: string | null
    attended: boolean
    createdAt: Date
    _count: LectureCountAggregateOutputType | null
    _avg: LectureAvgAggregateOutputType | null
    _sum: LectureSumAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  type GetLectureGroupByPayload<T extends LectureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LectureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LectureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LectureGroupByOutputType[P]>
            : GetScalarType<T[P], LectureGroupByOutputType[P]>
        }
      >
    >


  export type LectureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dayOfWeek?: boolean
    period?: boolean
    memo?: boolean
    assignment?: boolean
    assignmentDeadline?: boolean
    attended?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lecture"]>

  export type LectureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dayOfWeek?: boolean
    period?: boolean
    memo?: boolean
    assignment?: boolean
    assignmentDeadline?: boolean
    attended?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lecture"]>

  export type LectureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dayOfWeek?: boolean
    period?: boolean
    memo?: boolean
    assignment?: boolean
    assignmentDeadline?: boolean
    attended?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lecture"]>

  export type LectureSelectScalar = {
    id?: boolean
    name?: boolean
    dayOfWeek?: boolean
    period?: boolean
    memo?: boolean
    assignment?: boolean
    assignmentDeadline?: boolean
    attended?: boolean
    createdAt?: boolean
  }

  export type LectureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dayOfWeek" | "period" | "memo" | "assignment" | "assignmentDeadline" | "attended" | "createdAt", ExtArgs["result"]["lecture"]>

  export type $LecturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lecture"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dayOfWeek: string
      period: number
      memo: string | null
      assignment: string | null
      assignmentDeadline: string | null
      attended: boolean
      createdAt: Date
    }, ExtArgs["result"]["lecture"]>
    composites: {}
  }

  type LectureGetPayload<S extends boolean | null | undefined | LectureDefaultArgs> = $Result.GetResult<Prisma.$LecturePayload, S>

  type LectureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LectureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LectureCountAggregateInputType | true
    }

  export interface LectureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lecture'], meta: { name: 'Lecture' } }
    /**
     * Find zero or one Lecture that matches the filter.
     * @param {LectureFindUniqueArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LectureFindUniqueArgs>(args: SelectSubset<T, LectureFindUniqueArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LectureFindUniqueOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LectureFindUniqueOrThrowArgs>(args: SelectSubset<T, LectureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureFindFirstArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LectureFindFirstArgs>(args?: SelectSubset<T, LectureFindFirstArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureFindFirstOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LectureFindFirstOrThrowArgs>(args?: SelectSubset<T, LectureFindFirstOrThrowArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lectures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lectures
     * const lectures = await prisma.lecture.findMany()
     * 
     * // Get first 10 Lectures
     * const lectures = await prisma.lecture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lectureWithIdOnly = await prisma.lecture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LectureFindManyArgs>(args?: SelectSubset<T, LectureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecture.
     * @param {LectureCreateArgs} args - Arguments to create a Lecture.
     * @example
     * // Create one Lecture
     * const Lecture = await prisma.lecture.create({
     *   data: {
     *     // ... data to create a Lecture
     *   }
     * })
     * 
     */
    create<T extends LectureCreateArgs>(args: SelectSubset<T, LectureCreateArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lectures.
     * @param {LectureCreateManyArgs} args - Arguments to create many Lectures.
     * @example
     * // Create many Lectures
     * const lecture = await prisma.lecture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LectureCreateManyArgs>(args?: SelectSubset<T, LectureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lectures and returns the data saved in the database.
     * @param {LectureCreateManyAndReturnArgs} args - Arguments to create many Lectures.
     * @example
     * // Create many Lectures
     * const lecture = await prisma.lecture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lectures and only return the `id`
     * const lectureWithIdOnly = await prisma.lecture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LectureCreateManyAndReturnArgs>(args?: SelectSubset<T, LectureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lecture.
     * @param {LectureDeleteArgs} args - Arguments to delete one Lecture.
     * @example
     * // Delete one Lecture
     * const Lecture = await prisma.lecture.delete({
     *   where: {
     *     // ... filter to delete one Lecture
     *   }
     * })
     * 
     */
    delete<T extends LectureDeleteArgs>(args: SelectSubset<T, LectureDeleteArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecture.
     * @param {LectureUpdateArgs} args - Arguments to update one Lecture.
     * @example
     * // Update one Lecture
     * const lecture = await prisma.lecture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LectureUpdateArgs>(args: SelectSubset<T, LectureUpdateArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lectures.
     * @param {LectureDeleteManyArgs} args - Arguments to filter Lectures to delete.
     * @example
     * // Delete a few Lectures
     * const { count } = await prisma.lecture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LectureDeleteManyArgs>(args?: SelectSubset<T, LectureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lectures
     * const lecture = await prisma.lecture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LectureUpdateManyArgs>(args: SelectSubset<T, LectureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lectures and returns the data updated in the database.
     * @param {LectureUpdateManyAndReturnArgs} args - Arguments to update many Lectures.
     * @example
     * // Update many Lectures
     * const lecture = await prisma.lecture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lectures and only return the `id`
     * const lectureWithIdOnly = await prisma.lecture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LectureUpdateManyAndReturnArgs>(args: SelectSubset<T, LectureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lecture.
     * @param {LectureUpsertArgs} args - Arguments to update or create a Lecture.
     * @example
     * // Update or create a Lecture
     * const lecture = await prisma.lecture.upsert({
     *   create: {
     *     // ... data to create a Lecture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecture we want to update
     *   }
     * })
     */
    upsert<T extends LectureUpsertArgs>(args: SelectSubset<T, LectureUpsertArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureCountArgs} args - Arguments to filter Lectures to count.
     * @example
     * // Count the number of Lectures
     * const count = await prisma.lecture.count({
     *   where: {
     *     // ... the filter for the Lectures we want to count
     *   }
     * })
    **/
    count<T extends LectureCountArgs>(
      args?: Subset<T, LectureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LectureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LectureAggregateArgs>(args: Subset<T, LectureAggregateArgs>): Prisma.PrismaPromise<GetLectureAggregateType<T>>

    /**
     * Group by Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LectureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LectureGroupByArgs['orderBy'] }
        : { orderBy?: LectureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LectureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLectureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lecture model
   */
  readonly fields: LectureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lecture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LectureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lecture model
   */
  interface LectureFieldRefs {
    readonly id: FieldRef<"Lecture", 'String'>
    readonly name: FieldRef<"Lecture", 'String'>
    readonly dayOfWeek: FieldRef<"Lecture", 'String'>
    readonly period: FieldRef<"Lecture", 'Int'>
    readonly memo: FieldRef<"Lecture", 'String'>
    readonly assignment: FieldRef<"Lecture", 'String'>
    readonly assignmentDeadline: FieldRef<"Lecture", 'String'>
    readonly attended: FieldRef<"Lecture", 'Boolean'>
    readonly createdAt: FieldRef<"Lecture", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lecture findUnique
   */
  export type LectureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture findUniqueOrThrow
   */
  export type LectureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture findFirst
   */
  export type LectureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lectures.
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Lecture findFirstOrThrow
   */
  export type LectureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lectures.
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Lecture findMany
   */
  export type LectureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Filter, which Lectures to fetch.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lectures.
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Lecture create
   */
  export type LectureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * The data needed to create a Lecture.
     */
    data: XOR<LectureCreateInput, LectureUncheckedCreateInput>
  }

  /**
   * Lecture createMany
   */
  export type LectureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lectures.
     */
    data: LectureCreateManyInput | LectureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lecture createManyAndReturn
   */
  export type LectureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * The data used to create many Lectures.
     */
    data: LectureCreateManyInput | LectureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lecture update
   */
  export type LectureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * The data needed to update a Lecture.
     */
    data: XOR<LectureUpdateInput, LectureUncheckedUpdateInput>
    /**
     * Choose, which Lecture to update.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture updateMany
   */
  export type LectureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lectures.
     */
    data: XOR<LectureUpdateManyMutationInput, LectureUncheckedUpdateManyInput>
    /**
     * Filter which Lectures to update
     */
    where?: LectureWhereInput
    /**
     * Limit how many Lectures to update.
     */
    limit?: number
  }

  /**
   * Lecture updateManyAndReturn
   */
  export type LectureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * The data used to update Lectures.
     */
    data: XOR<LectureUpdateManyMutationInput, LectureUncheckedUpdateManyInput>
    /**
     * Filter which Lectures to update
     */
    where?: LectureWhereInput
    /**
     * Limit how many Lectures to update.
     */
    limit?: number
  }

  /**
   * Lecture upsert
   */
  export type LectureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * The filter to search for the Lecture to update in case it exists.
     */
    where: LectureWhereUniqueInput
    /**
     * In case the Lecture found by the `where` argument doesn't exist, create a new Lecture with this data.
     */
    create: XOR<LectureCreateInput, LectureUncheckedCreateInput>
    /**
     * In case the Lecture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LectureUpdateInput, LectureUncheckedUpdateInput>
  }

  /**
   * Lecture delete
   */
  export type LectureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Filter which Lecture to delete.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture deleteMany
   */
  export type LectureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lectures to delete
     */
    where?: LectureWhereInput
    /**
     * Limit how many Lectures to delete.
     */
    limit?: number
  }

  /**
   * Lecture without action
   */
  export type LectureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: string | null
    nextDeadline: string | null
    memo: string | null
    createdAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: string | null
    nextDeadline: string | null
    memo: string | null
    createdAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    status: number
    nextDeadline: number
    memo: number
    createdAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    nextDeadline?: true
    memo?: true
    createdAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    nextDeadline?: true
    memo?: true
    createdAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    nextDeadline?: true
    memo?: true
    createdAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    status: string
    nextDeadline: string | null
    memo: string | null
    createdAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    nextDeadline?: boolean
    memo?: boolean
    createdAt?: boolean
    esEntries?: boolean | Company$esEntriesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    nextDeadline?: boolean
    memo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    nextDeadline?: boolean
    memo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    nextDeadline?: boolean
    memo?: boolean
    createdAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "nextDeadline" | "memo" | "createdAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    esEntries?: boolean | Company$esEntriesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      esEntries: Prisma.$ESEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: string
      nextDeadline: string | null
      memo: string | null
      createdAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    esEntries<T extends Company$esEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Company$esEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly status: FieldRef<"Company", 'String'>
    readonly nextDeadline: FieldRef<"Company", 'String'>
    readonly memo: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.esEntries
   */
  export type Company$esEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryInclude<ExtArgs> | null
    where?: ESEntryWhereInput
    orderBy?: ESEntryOrderByWithRelationInput | ESEntryOrderByWithRelationInput[]
    cursor?: ESEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ESEntryScalarFieldEnum | ESEntryScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model ESEntry
   */

  export type AggregateESEntry = {
    _count: ESEntryCountAggregateOutputType | null
    _min: ESEntryMinAggregateOutputType | null
    _max: ESEntryMaxAggregateOutputType | null
  }

  export type ESEntryMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    createdAt: Date | null
  }

  export type ESEntryMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    createdAt: Date | null
  }

  export type ESEntryCountAggregateOutputType = {
    id: number
    companyId: number
    createdAt: number
    _all: number
  }


  export type ESEntryMinAggregateInputType = {
    id?: true
    companyId?: true
    createdAt?: true
  }

  export type ESEntryMaxAggregateInputType = {
    id?: true
    companyId?: true
    createdAt?: true
  }

  export type ESEntryCountAggregateInputType = {
    id?: true
    companyId?: true
    createdAt?: true
    _all?: true
  }

  export type ESEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ESEntry to aggregate.
     */
    where?: ESEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESEntries to fetch.
     */
    orderBy?: ESEntryOrderByWithRelationInput | ESEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ESEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ESEntries
    **/
    _count?: true | ESEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ESEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ESEntryMaxAggregateInputType
  }

  export type GetESEntryAggregateType<T extends ESEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateESEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateESEntry[P]>
      : GetScalarType<T[P], AggregateESEntry[P]>
  }




  export type ESEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ESEntryWhereInput
    orderBy?: ESEntryOrderByWithAggregationInput | ESEntryOrderByWithAggregationInput[]
    by: ESEntryScalarFieldEnum[] | ESEntryScalarFieldEnum
    having?: ESEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ESEntryCountAggregateInputType | true
    _min?: ESEntryMinAggregateInputType
    _max?: ESEntryMaxAggregateInputType
  }

  export type ESEntryGroupByOutputType = {
    id: string
    companyId: string
    createdAt: Date
    _count: ESEntryCountAggregateOutputType | null
    _min: ESEntryMinAggregateOutputType | null
    _max: ESEntryMaxAggregateOutputType | null
  }

  type GetESEntryGroupByPayload<T extends ESEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ESEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ESEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ESEntryGroupByOutputType[P]>
            : GetScalarType<T[P], ESEntryGroupByOutputType[P]>
        }
      >
    >


  export type ESEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    questions?: boolean | ESEntry$questionsArgs<ExtArgs>
    _count?: boolean | ESEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eSEntry"]>

  export type ESEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eSEntry"]>

  export type ESEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eSEntry"]>

  export type ESEntrySelectScalar = {
    id?: boolean
    companyId?: boolean
    createdAt?: boolean
  }

  export type ESEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "createdAt", ExtArgs["result"]["eSEntry"]>
  export type ESEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    questions?: boolean | ESEntry$questionsArgs<ExtArgs>
    _count?: boolean | ESEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ESEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ESEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $ESEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ESEntry"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      questions: Prisma.$ESQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      createdAt: Date
    }, ExtArgs["result"]["eSEntry"]>
    composites: {}
  }

  type ESEntryGetPayload<S extends boolean | null | undefined | ESEntryDefaultArgs> = $Result.GetResult<Prisma.$ESEntryPayload, S>

  type ESEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ESEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ESEntryCountAggregateInputType | true
    }

  export interface ESEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ESEntry'], meta: { name: 'ESEntry' } }
    /**
     * Find zero or one ESEntry that matches the filter.
     * @param {ESEntryFindUniqueArgs} args - Arguments to find a ESEntry
     * @example
     * // Get one ESEntry
     * const eSEntry = await prisma.eSEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ESEntryFindUniqueArgs>(args: SelectSubset<T, ESEntryFindUniqueArgs<ExtArgs>>): Prisma__ESEntryClient<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ESEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ESEntryFindUniqueOrThrowArgs} args - Arguments to find a ESEntry
     * @example
     * // Get one ESEntry
     * const eSEntry = await prisma.eSEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ESEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, ESEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ESEntryClient<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ESEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESEntryFindFirstArgs} args - Arguments to find a ESEntry
     * @example
     * // Get one ESEntry
     * const eSEntry = await prisma.eSEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ESEntryFindFirstArgs>(args?: SelectSubset<T, ESEntryFindFirstArgs<ExtArgs>>): Prisma__ESEntryClient<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ESEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESEntryFindFirstOrThrowArgs} args - Arguments to find a ESEntry
     * @example
     * // Get one ESEntry
     * const eSEntry = await prisma.eSEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ESEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, ESEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ESEntryClient<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ESEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ESEntries
     * const eSEntries = await prisma.eSEntry.findMany()
     * 
     * // Get first 10 ESEntries
     * const eSEntries = await prisma.eSEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eSEntryWithIdOnly = await prisma.eSEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ESEntryFindManyArgs>(args?: SelectSubset<T, ESEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ESEntry.
     * @param {ESEntryCreateArgs} args - Arguments to create a ESEntry.
     * @example
     * // Create one ESEntry
     * const ESEntry = await prisma.eSEntry.create({
     *   data: {
     *     // ... data to create a ESEntry
     *   }
     * })
     * 
     */
    create<T extends ESEntryCreateArgs>(args: SelectSubset<T, ESEntryCreateArgs<ExtArgs>>): Prisma__ESEntryClient<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ESEntries.
     * @param {ESEntryCreateManyArgs} args - Arguments to create many ESEntries.
     * @example
     * // Create many ESEntries
     * const eSEntry = await prisma.eSEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ESEntryCreateManyArgs>(args?: SelectSubset<T, ESEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ESEntries and returns the data saved in the database.
     * @param {ESEntryCreateManyAndReturnArgs} args - Arguments to create many ESEntries.
     * @example
     * // Create many ESEntries
     * const eSEntry = await prisma.eSEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ESEntries and only return the `id`
     * const eSEntryWithIdOnly = await prisma.eSEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ESEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, ESEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ESEntry.
     * @param {ESEntryDeleteArgs} args - Arguments to delete one ESEntry.
     * @example
     * // Delete one ESEntry
     * const ESEntry = await prisma.eSEntry.delete({
     *   where: {
     *     // ... filter to delete one ESEntry
     *   }
     * })
     * 
     */
    delete<T extends ESEntryDeleteArgs>(args: SelectSubset<T, ESEntryDeleteArgs<ExtArgs>>): Prisma__ESEntryClient<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ESEntry.
     * @param {ESEntryUpdateArgs} args - Arguments to update one ESEntry.
     * @example
     * // Update one ESEntry
     * const eSEntry = await prisma.eSEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ESEntryUpdateArgs>(args: SelectSubset<T, ESEntryUpdateArgs<ExtArgs>>): Prisma__ESEntryClient<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ESEntries.
     * @param {ESEntryDeleteManyArgs} args - Arguments to filter ESEntries to delete.
     * @example
     * // Delete a few ESEntries
     * const { count } = await prisma.eSEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ESEntryDeleteManyArgs>(args?: SelectSubset<T, ESEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ESEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ESEntries
     * const eSEntry = await prisma.eSEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ESEntryUpdateManyArgs>(args: SelectSubset<T, ESEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ESEntries and returns the data updated in the database.
     * @param {ESEntryUpdateManyAndReturnArgs} args - Arguments to update many ESEntries.
     * @example
     * // Update many ESEntries
     * const eSEntry = await prisma.eSEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ESEntries and only return the `id`
     * const eSEntryWithIdOnly = await prisma.eSEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ESEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, ESEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ESEntry.
     * @param {ESEntryUpsertArgs} args - Arguments to update or create a ESEntry.
     * @example
     * // Update or create a ESEntry
     * const eSEntry = await prisma.eSEntry.upsert({
     *   create: {
     *     // ... data to create a ESEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ESEntry we want to update
     *   }
     * })
     */
    upsert<T extends ESEntryUpsertArgs>(args: SelectSubset<T, ESEntryUpsertArgs<ExtArgs>>): Prisma__ESEntryClient<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ESEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESEntryCountArgs} args - Arguments to filter ESEntries to count.
     * @example
     * // Count the number of ESEntries
     * const count = await prisma.eSEntry.count({
     *   where: {
     *     // ... the filter for the ESEntries we want to count
     *   }
     * })
    **/
    count<T extends ESEntryCountArgs>(
      args?: Subset<T, ESEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ESEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ESEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ESEntryAggregateArgs>(args: Subset<T, ESEntryAggregateArgs>): Prisma.PrismaPromise<GetESEntryAggregateType<T>>

    /**
     * Group by ESEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ESEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ESEntryGroupByArgs['orderBy'] }
        : { orderBy?: ESEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ESEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetESEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ESEntry model
   */
  readonly fields: ESEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ESEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ESEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends ESEntry$questionsArgs<ExtArgs> = {}>(args?: Subset<T, ESEntry$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ESEntry model
   */
  interface ESEntryFieldRefs {
    readonly id: FieldRef<"ESEntry", 'String'>
    readonly companyId: FieldRef<"ESEntry", 'String'>
    readonly createdAt: FieldRef<"ESEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ESEntry findUnique
   */
  export type ESEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryInclude<ExtArgs> | null
    /**
     * Filter, which ESEntry to fetch.
     */
    where: ESEntryWhereUniqueInput
  }

  /**
   * ESEntry findUniqueOrThrow
   */
  export type ESEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryInclude<ExtArgs> | null
    /**
     * Filter, which ESEntry to fetch.
     */
    where: ESEntryWhereUniqueInput
  }

  /**
   * ESEntry findFirst
   */
  export type ESEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryInclude<ExtArgs> | null
    /**
     * Filter, which ESEntry to fetch.
     */
    where?: ESEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESEntries to fetch.
     */
    orderBy?: ESEntryOrderByWithRelationInput | ESEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ESEntries.
     */
    cursor?: ESEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ESEntries.
     */
    distinct?: ESEntryScalarFieldEnum | ESEntryScalarFieldEnum[]
  }

  /**
   * ESEntry findFirstOrThrow
   */
  export type ESEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryInclude<ExtArgs> | null
    /**
     * Filter, which ESEntry to fetch.
     */
    where?: ESEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESEntries to fetch.
     */
    orderBy?: ESEntryOrderByWithRelationInput | ESEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ESEntries.
     */
    cursor?: ESEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ESEntries.
     */
    distinct?: ESEntryScalarFieldEnum | ESEntryScalarFieldEnum[]
  }

  /**
   * ESEntry findMany
   */
  export type ESEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryInclude<ExtArgs> | null
    /**
     * Filter, which ESEntries to fetch.
     */
    where?: ESEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESEntries to fetch.
     */
    orderBy?: ESEntryOrderByWithRelationInput | ESEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ESEntries.
     */
    cursor?: ESEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ESEntries.
     */
    distinct?: ESEntryScalarFieldEnum | ESEntryScalarFieldEnum[]
  }

  /**
   * ESEntry create
   */
  export type ESEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a ESEntry.
     */
    data: XOR<ESEntryCreateInput, ESEntryUncheckedCreateInput>
  }

  /**
   * ESEntry createMany
   */
  export type ESEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ESEntries.
     */
    data: ESEntryCreateManyInput | ESEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ESEntry createManyAndReturn
   */
  export type ESEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * The data used to create many ESEntries.
     */
    data: ESEntryCreateManyInput | ESEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ESEntry update
   */
  export type ESEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a ESEntry.
     */
    data: XOR<ESEntryUpdateInput, ESEntryUncheckedUpdateInput>
    /**
     * Choose, which ESEntry to update.
     */
    where: ESEntryWhereUniqueInput
  }

  /**
   * ESEntry updateMany
   */
  export type ESEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ESEntries.
     */
    data: XOR<ESEntryUpdateManyMutationInput, ESEntryUncheckedUpdateManyInput>
    /**
     * Filter which ESEntries to update
     */
    where?: ESEntryWhereInput
    /**
     * Limit how many ESEntries to update.
     */
    limit?: number
  }

  /**
   * ESEntry updateManyAndReturn
   */
  export type ESEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * The data used to update ESEntries.
     */
    data: XOR<ESEntryUpdateManyMutationInput, ESEntryUncheckedUpdateManyInput>
    /**
     * Filter which ESEntries to update
     */
    where?: ESEntryWhereInput
    /**
     * Limit how many ESEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ESEntry upsert
   */
  export type ESEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the ESEntry to update in case it exists.
     */
    where: ESEntryWhereUniqueInput
    /**
     * In case the ESEntry found by the `where` argument doesn't exist, create a new ESEntry with this data.
     */
    create: XOR<ESEntryCreateInput, ESEntryUncheckedCreateInput>
    /**
     * In case the ESEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ESEntryUpdateInput, ESEntryUncheckedUpdateInput>
  }

  /**
   * ESEntry delete
   */
  export type ESEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryInclude<ExtArgs> | null
    /**
     * Filter which ESEntry to delete.
     */
    where: ESEntryWhereUniqueInput
  }

  /**
   * ESEntry deleteMany
   */
  export type ESEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ESEntries to delete
     */
    where?: ESEntryWhereInput
    /**
     * Limit how many ESEntries to delete.
     */
    limit?: number
  }

  /**
   * ESEntry.questions
   */
  export type ESEntry$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionInclude<ExtArgs> | null
    where?: ESQuestionWhereInput
    orderBy?: ESQuestionOrderByWithRelationInput | ESQuestionOrderByWithRelationInput[]
    cursor?: ESQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ESQuestionScalarFieldEnum | ESQuestionScalarFieldEnum[]
  }

  /**
   * ESEntry without action
   */
  export type ESEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESEntry
     */
    select?: ESEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESEntry
     */
    omit?: ESEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESEntryInclude<ExtArgs> | null
  }


  /**
   * Model ESQuestion
   */

  export type AggregateESQuestion = {
    _count: ESQuestionCountAggregateOutputType | null
    _avg: ESQuestionAvgAggregateOutputType | null
    _sum: ESQuestionSumAggregateOutputType | null
    _min: ESQuestionMinAggregateOutputType | null
    _max: ESQuestionMaxAggregateOutputType | null
  }

  export type ESQuestionAvgAggregateOutputType = {
    maxLength: number | null
  }

  export type ESQuestionSumAggregateOutputType = {
    maxLength: number | null
  }

  export type ESQuestionMinAggregateOutputType = {
    id: string | null
    entryId: string | null
    title: string | null
    answer: string | null
    maxLength: number | null
    createdAt: Date | null
  }

  export type ESQuestionMaxAggregateOutputType = {
    id: string | null
    entryId: string | null
    title: string | null
    answer: string | null
    maxLength: number | null
    createdAt: Date | null
  }

  export type ESQuestionCountAggregateOutputType = {
    id: number
    entryId: number
    title: number
    answer: number
    maxLength: number
    createdAt: number
    _all: number
  }


  export type ESQuestionAvgAggregateInputType = {
    maxLength?: true
  }

  export type ESQuestionSumAggregateInputType = {
    maxLength?: true
  }

  export type ESQuestionMinAggregateInputType = {
    id?: true
    entryId?: true
    title?: true
    answer?: true
    maxLength?: true
    createdAt?: true
  }

  export type ESQuestionMaxAggregateInputType = {
    id?: true
    entryId?: true
    title?: true
    answer?: true
    maxLength?: true
    createdAt?: true
  }

  export type ESQuestionCountAggregateInputType = {
    id?: true
    entryId?: true
    title?: true
    answer?: true
    maxLength?: true
    createdAt?: true
    _all?: true
  }

  export type ESQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ESQuestion to aggregate.
     */
    where?: ESQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESQuestions to fetch.
     */
    orderBy?: ESQuestionOrderByWithRelationInput | ESQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ESQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ESQuestions
    **/
    _count?: true | ESQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ESQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ESQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ESQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ESQuestionMaxAggregateInputType
  }

  export type GetESQuestionAggregateType<T extends ESQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateESQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateESQuestion[P]>
      : GetScalarType<T[P], AggregateESQuestion[P]>
  }




  export type ESQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ESQuestionWhereInput
    orderBy?: ESQuestionOrderByWithAggregationInput | ESQuestionOrderByWithAggregationInput[]
    by: ESQuestionScalarFieldEnum[] | ESQuestionScalarFieldEnum
    having?: ESQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ESQuestionCountAggregateInputType | true
    _avg?: ESQuestionAvgAggregateInputType
    _sum?: ESQuestionSumAggregateInputType
    _min?: ESQuestionMinAggregateInputType
    _max?: ESQuestionMaxAggregateInputType
  }

  export type ESQuestionGroupByOutputType = {
    id: string
    entryId: string
    title: string
    answer: string
    maxLength: number | null
    createdAt: Date
    _count: ESQuestionCountAggregateOutputType | null
    _avg: ESQuestionAvgAggregateOutputType | null
    _sum: ESQuestionSumAggregateOutputType | null
    _min: ESQuestionMinAggregateOutputType | null
    _max: ESQuestionMaxAggregateOutputType | null
  }

  type GetESQuestionGroupByPayload<T extends ESQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ESQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ESQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ESQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], ESQuestionGroupByOutputType[P]>
        }
      >
    >


  export type ESQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryId?: boolean
    title?: boolean
    answer?: boolean
    maxLength?: boolean
    createdAt?: boolean
    entry?: boolean | ESEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eSQuestion"]>

  export type ESQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryId?: boolean
    title?: boolean
    answer?: boolean
    maxLength?: boolean
    createdAt?: boolean
    entry?: boolean | ESEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eSQuestion"]>

  export type ESQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryId?: boolean
    title?: boolean
    answer?: boolean
    maxLength?: boolean
    createdAt?: boolean
    entry?: boolean | ESEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eSQuestion"]>

  export type ESQuestionSelectScalar = {
    id?: boolean
    entryId?: boolean
    title?: boolean
    answer?: boolean
    maxLength?: boolean
    createdAt?: boolean
  }

  export type ESQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entryId" | "title" | "answer" | "maxLength" | "createdAt", ExtArgs["result"]["eSQuestion"]>
  export type ESQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | ESEntryDefaultArgs<ExtArgs>
  }
  export type ESQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | ESEntryDefaultArgs<ExtArgs>
  }
  export type ESQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | ESEntryDefaultArgs<ExtArgs>
  }

  export type $ESQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ESQuestion"
    objects: {
      entry: Prisma.$ESEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entryId: string
      title: string
      answer: string
      maxLength: number | null
      createdAt: Date
    }, ExtArgs["result"]["eSQuestion"]>
    composites: {}
  }

  type ESQuestionGetPayload<S extends boolean | null | undefined | ESQuestionDefaultArgs> = $Result.GetResult<Prisma.$ESQuestionPayload, S>

  type ESQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ESQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ESQuestionCountAggregateInputType | true
    }

  export interface ESQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ESQuestion'], meta: { name: 'ESQuestion' } }
    /**
     * Find zero or one ESQuestion that matches the filter.
     * @param {ESQuestionFindUniqueArgs} args - Arguments to find a ESQuestion
     * @example
     * // Get one ESQuestion
     * const eSQuestion = await prisma.eSQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ESQuestionFindUniqueArgs>(args: SelectSubset<T, ESQuestionFindUniqueArgs<ExtArgs>>): Prisma__ESQuestionClient<$Result.GetResult<Prisma.$ESQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ESQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ESQuestionFindUniqueOrThrowArgs} args - Arguments to find a ESQuestion
     * @example
     * // Get one ESQuestion
     * const eSQuestion = await prisma.eSQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ESQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, ESQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ESQuestionClient<$Result.GetResult<Prisma.$ESQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ESQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESQuestionFindFirstArgs} args - Arguments to find a ESQuestion
     * @example
     * // Get one ESQuestion
     * const eSQuestion = await prisma.eSQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ESQuestionFindFirstArgs>(args?: SelectSubset<T, ESQuestionFindFirstArgs<ExtArgs>>): Prisma__ESQuestionClient<$Result.GetResult<Prisma.$ESQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ESQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESQuestionFindFirstOrThrowArgs} args - Arguments to find a ESQuestion
     * @example
     * // Get one ESQuestion
     * const eSQuestion = await prisma.eSQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ESQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, ESQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ESQuestionClient<$Result.GetResult<Prisma.$ESQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ESQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ESQuestions
     * const eSQuestions = await prisma.eSQuestion.findMany()
     * 
     * // Get first 10 ESQuestions
     * const eSQuestions = await prisma.eSQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eSQuestionWithIdOnly = await prisma.eSQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ESQuestionFindManyArgs>(args?: SelectSubset<T, ESQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ESQuestion.
     * @param {ESQuestionCreateArgs} args - Arguments to create a ESQuestion.
     * @example
     * // Create one ESQuestion
     * const ESQuestion = await prisma.eSQuestion.create({
     *   data: {
     *     // ... data to create a ESQuestion
     *   }
     * })
     * 
     */
    create<T extends ESQuestionCreateArgs>(args: SelectSubset<T, ESQuestionCreateArgs<ExtArgs>>): Prisma__ESQuestionClient<$Result.GetResult<Prisma.$ESQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ESQuestions.
     * @param {ESQuestionCreateManyArgs} args - Arguments to create many ESQuestions.
     * @example
     * // Create many ESQuestions
     * const eSQuestion = await prisma.eSQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ESQuestionCreateManyArgs>(args?: SelectSubset<T, ESQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ESQuestions and returns the data saved in the database.
     * @param {ESQuestionCreateManyAndReturnArgs} args - Arguments to create many ESQuestions.
     * @example
     * // Create many ESQuestions
     * const eSQuestion = await prisma.eSQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ESQuestions and only return the `id`
     * const eSQuestionWithIdOnly = await prisma.eSQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ESQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, ESQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ESQuestion.
     * @param {ESQuestionDeleteArgs} args - Arguments to delete one ESQuestion.
     * @example
     * // Delete one ESQuestion
     * const ESQuestion = await prisma.eSQuestion.delete({
     *   where: {
     *     // ... filter to delete one ESQuestion
     *   }
     * })
     * 
     */
    delete<T extends ESQuestionDeleteArgs>(args: SelectSubset<T, ESQuestionDeleteArgs<ExtArgs>>): Prisma__ESQuestionClient<$Result.GetResult<Prisma.$ESQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ESQuestion.
     * @param {ESQuestionUpdateArgs} args - Arguments to update one ESQuestion.
     * @example
     * // Update one ESQuestion
     * const eSQuestion = await prisma.eSQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ESQuestionUpdateArgs>(args: SelectSubset<T, ESQuestionUpdateArgs<ExtArgs>>): Prisma__ESQuestionClient<$Result.GetResult<Prisma.$ESQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ESQuestions.
     * @param {ESQuestionDeleteManyArgs} args - Arguments to filter ESQuestions to delete.
     * @example
     * // Delete a few ESQuestions
     * const { count } = await prisma.eSQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ESQuestionDeleteManyArgs>(args?: SelectSubset<T, ESQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ESQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ESQuestions
     * const eSQuestion = await prisma.eSQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ESQuestionUpdateManyArgs>(args: SelectSubset<T, ESQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ESQuestions and returns the data updated in the database.
     * @param {ESQuestionUpdateManyAndReturnArgs} args - Arguments to update many ESQuestions.
     * @example
     * // Update many ESQuestions
     * const eSQuestion = await prisma.eSQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ESQuestions and only return the `id`
     * const eSQuestionWithIdOnly = await prisma.eSQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ESQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, ESQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ESQuestion.
     * @param {ESQuestionUpsertArgs} args - Arguments to update or create a ESQuestion.
     * @example
     * // Update or create a ESQuestion
     * const eSQuestion = await prisma.eSQuestion.upsert({
     *   create: {
     *     // ... data to create a ESQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ESQuestion we want to update
     *   }
     * })
     */
    upsert<T extends ESQuestionUpsertArgs>(args: SelectSubset<T, ESQuestionUpsertArgs<ExtArgs>>): Prisma__ESQuestionClient<$Result.GetResult<Prisma.$ESQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ESQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESQuestionCountArgs} args - Arguments to filter ESQuestions to count.
     * @example
     * // Count the number of ESQuestions
     * const count = await prisma.eSQuestion.count({
     *   where: {
     *     // ... the filter for the ESQuestions we want to count
     *   }
     * })
    **/
    count<T extends ESQuestionCountArgs>(
      args?: Subset<T, ESQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ESQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ESQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ESQuestionAggregateArgs>(args: Subset<T, ESQuestionAggregateArgs>): Prisma.PrismaPromise<GetESQuestionAggregateType<T>>

    /**
     * Group by ESQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ESQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ESQuestionGroupByArgs['orderBy'] }
        : { orderBy?: ESQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ESQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetESQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ESQuestion model
   */
  readonly fields: ESQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ESQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ESQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entry<T extends ESEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ESEntryDefaultArgs<ExtArgs>>): Prisma__ESEntryClient<$Result.GetResult<Prisma.$ESEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ESQuestion model
   */
  interface ESQuestionFieldRefs {
    readonly id: FieldRef<"ESQuestion", 'String'>
    readonly entryId: FieldRef<"ESQuestion", 'String'>
    readonly title: FieldRef<"ESQuestion", 'String'>
    readonly answer: FieldRef<"ESQuestion", 'String'>
    readonly maxLength: FieldRef<"ESQuestion", 'Int'>
    readonly createdAt: FieldRef<"ESQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ESQuestion findUnique
   */
  export type ESQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ESQuestion to fetch.
     */
    where: ESQuestionWhereUniqueInput
  }

  /**
   * ESQuestion findUniqueOrThrow
   */
  export type ESQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ESQuestion to fetch.
     */
    where: ESQuestionWhereUniqueInput
  }

  /**
   * ESQuestion findFirst
   */
  export type ESQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ESQuestion to fetch.
     */
    where?: ESQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESQuestions to fetch.
     */
    orderBy?: ESQuestionOrderByWithRelationInput | ESQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ESQuestions.
     */
    cursor?: ESQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ESQuestions.
     */
    distinct?: ESQuestionScalarFieldEnum | ESQuestionScalarFieldEnum[]
  }

  /**
   * ESQuestion findFirstOrThrow
   */
  export type ESQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ESQuestion to fetch.
     */
    where?: ESQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESQuestions to fetch.
     */
    orderBy?: ESQuestionOrderByWithRelationInput | ESQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ESQuestions.
     */
    cursor?: ESQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ESQuestions.
     */
    distinct?: ESQuestionScalarFieldEnum | ESQuestionScalarFieldEnum[]
  }

  /**
   * ESQuestion findMany
   */
  export type ESQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ESQuestions to fetch.
     */
    where?: ESQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESQuestions to fetch.
     */
    orderBy?: ESQuestionOrderByWithRelationInput | ESQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ESQuestions.
     */
    cursor?: ESQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ESQuestions.
     */
    distinct?: ESQuestionScalarFieldEnum | ESQuestionScalarFieldEnum[]
  }

  /**
   * ESQuestion create
   */
  export type ESQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a ESQuestion.
     */
    data: XOR<ESQuestionCreateInput, ESQuestionUncheckedCreateInput>
  }

  /**
   * ESQuestion createMany
   */
  export type ESQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ESQuestions.
     */
    data: ESQuestionCreateManyInput | ESQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ESQuestion createManyAndReturn
   */
  export type ESQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many ESQuestions.
     */
    data: ESQuestionCreateManyInput | ESQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ESQuestion update
   */
  export type ESQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a ESQuestion.
     */
    data: XOR<ESQuestionUpdateInput, ESQuestionUncheckedUpdateInput>
    /**
     * Choose, which ESQuestion to update.
     */
    where: ESQuestionWhereUniqueInput
  }

  /**
   * ESQuestion updateMany
   */
  export type ESQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ESQuestions.
     */
    data: XOR<ESQuestionUpdateManyMutationInput, ESQuestionUncheckedUpdateManyInput>
    /**
     * Filter which ESQuestions to update
     */
    where?: ESQuestionWhereInput
    /**
     * Limit how many ESQuestions to update.
     */
    limit?: number
  }

  /**
   * ESQuestion updateManyAndReturn
   */
  export type ESQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * The data used to update ESQuestions.
     */
    data: XOR<ESQuestionUpdateManyMutationInput, ESQuestionUncheckedUpdateManyInput>
    /**
     * Filter which ESQuestions to update
     */
    where?: ESQuestionWhereInput
    /**
     * Limit how many ESQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ESQuestion upsert
   */
  export type ESQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the ESQuestion to update in case it exists.
     */
    where: ESQuestionWhereUniqueInput
    /**
     * In case the ESQuestion found by the `where` argument doesn't exist, create a new ESQuestion with this data.
     */
    create: XOR<ESQuestionCreateInput, ESQuestionUncheckedCreateInput>
    /**
     * In case the ESQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ESQuestionUpdateInput, ESQuestionUncheckedUpdateInput>
  }

  /**
   * ESQuestion delete
   */
  export type ESQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionInclude<ExtArgs> | null
    /**
     * Filter which ESQuestion to delete.
     */
    where: ESQuestionWhereUniqueInput
  }

  /**
   * ESQuestion deleteMany
   */
  export type ESQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ESQuestions to delete
     */
    where?: ESQuestionWhereInput
    /**
     * Limit how many ESQuestions to delete.
     */
    limit?: number
  }

  /**
   * ESQuestion without action
   */
  export type ESQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESQuestion
     */
    select?: ESQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESQuestion
     */
    omit?: ESQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESQuestionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CalendarEventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    category: 'category',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CalendarEventScalarFieldEnum = (typeof CalendarEventScalarFieldEnum)[keyof typeof CalendarEventScalarFieldEnum]


  export const LectureScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dayOfWeek: 'dayOfWeek',
    period: 'period',
    memo: 'memo',
    assignment: 'assignment',
    assignmentDeadline: 'assignmentDeadline',
    attended: 'attended',
    createdAt: 'createdAt'
  };

  export type LectureScalarFieldEnum = (typeof LectureScalarFieldEnum)[keyof typeof LectureScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    nextDeadline: 'nextDeadline',
    memo: 'memo',
    createdAt: 'createdAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ESEntryScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    createdAt: 'createdAt'
  };

  export type ESEntryScalarFieldEnum = (typeof ESEntryScalarFieldEnum)[keyof typeof ESEntryScalarFieldEnum]


  export const ESQuestionScalarFieldEnum: {
    id: 'id',
    entryId: 'entryId',
    title: 'title',
    answer: 'answer',
    maxLength: 'maxLength',
    createdAt: 'createdAt'
  };

  export type ESQuestionScalarFieldEnum = (typeof ESQuestionScalarFieldEnum)[keyof typeof ESQuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CalendarEventWhereInput = {
    AND?: CalendarEventWhereInput | CalendarEventWhereInput[]
    OR?: CalendarEventWhereInput[]
    NOT?: CalendarEventWhereInput | CalendarEventWhereInput[]
    id?: StringFilter<"CalendarEvent"> | string
    title?: StringFilter<"CalendarEvent"> | string
    date?: StringFilter<"CalendarEvent"> | string
    category?: StringFilter<"CalendarEvent"> | string
    description?: StringNullableFilter<"CalendarEvent"> | string | null
    createdAt?: DateTimeFilter<"CalendarEvent"> | Date | string
  }

  export type CalendarEventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type CalendarEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CalendarEventWhereInput | CalendarEventWhereInput[]
    OR?: CalendarEventWhereInput[]
    NOT?: CalendarEventWhereInput | CalendarEventWhereInput[]
    title?: StringFilter<"CalendarEvent"> | string
    date?: StringFilter<"CalendarEvent"> | string
    category?: StringFilter<"CalendarEvent"> | string
    description?: StringNullableFilter<"CalendarEvent"> | string | null
    createdAt?: DateTimeFilter<"CalendarEvent"> | Date | string
  }, "id">

  export type CalendarEventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CalendarEventCountOrderByAggregateInput
    _max?: CalendarEventMaxOrderByAggregateInput
    _min?: CalendarEventMinOrderByAggregateInput
  }

  export type CalendarEventScalarWhereWithAggregatesInput = {
    AND?: CalendarEventScalarWhereWithAggregatesInput | CalendarEventScalarWhereWithAggregatesInput[]
    OR?: CalendarEventScalarWhereWithAggregatesInput[]
    NOT?: CalendarEventScalarWhereWithAggregatesInput | CalendarEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CalendarEvent"> | string
    title?: StringWithAggregatesFilter<"CalendarEvent"> | string
    date?: StringWithAggregatesFilter<"CalendarEvent"> | string
    category?: StringWithAggregatesFilter<"CalendarEvent"> | string
    description?: StringNullableWithAggregatesFilter<"CalendarEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string
  }

  export type LectureWhereInput = {
    AND?: LectureWhereInput | LectureWhereInput[]
    OR?: LectureWhereInput[]
    NOT?: LectureWhereInput | LectureWhereInput[]
    id?: StringFilter<"Lecture"> | string
    name?: StringFilter<"Lecture"> | string
    dayOfWeek?: StringFilter<"Lecture"> | string
    period?: IntFilter<"Lecture"> | number
    memo?: StringNullableFilter<"Lecture"> | string | null
    assignment?: StringNullableFilter<"Lecture"> | string | null
    assignmentDeadline?: StringNullableFilter<"Lecture"> | string | null
    attended?: BoolFilter<"Lecture"> | boolean
    createdAt?: DateTimeFilter<"Lecture"> | Date | string
  }

  export type LectureOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dayOfWeek?: SortOrder
    period?: SortOrder
    memo?: SortOrderInput | SortOrder
    assignment?: SortOrderInput | SortOrder
    assignmentDeadline?: SortOrderInput | SortOrder
    attended?: SortOrder
    createdAt?: SortOrder
  }

  export type LectureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LectureWhereInput | LectureWhereInput[]
    OR?: LectureWhereInput[]
    NOT?: LectureWhereInput | LectureWhereInput[]
    name?: StringFilter<"Lecture"> | string
    dayOfWeek?: StringFilter<"Lecture"> | string
    period?: IntFilter<"Lecture"> | number
    memo?: StringNullableFilter<"Lecture"> | string | null
    assignment?: StringNullableFilter<"Lecture"> | string | null
    assignmentDeadline?: StringNullableFilter<"Lecture"> | string | null
    attended?: BoolFilter<"Lecture"> | boolean
    createdAt?: DateTimeFilter<"Lecture"> | Date | string
  }, "id">

  export type LectureOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dayOfWeek?: SortOrder
    period?: SortOrder
    memo?: SortOrderInput | SortOrder
    assignment?: SortOrderInput | SortOrder
    assignmentDeadline?: SortOrderInput | SortOrder
    attended?: SortOrder
    createdAt?: SortOrder
    _count?: LectureCountOrderByAggregateInput
    _avg?: LectureAvgOrderByAggregateInput
    _max?: LectureMaxOrderByAggregateInput
    _min?: LectureMinOrderByAggregateInput
    _sum?: LectureSumOrderByAggregateInput
  }

  export type LectureScalarWhereWithAggregatesInput = {
    AND?: LectureScalarWhereWithAggregatesInput | LectureScalarWhereWithAggregatesInput[]
    OR?: LectureScalarWhereWithAggregatesInput[]
    NOT?: LectureScalarWhereWithAggregatesInput | LectureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lecture"> | string
    name?: StringWithAggregatesFilter<"Lecture"> | string
    dayOfWeek?: StringWithAggregatesFilter<"Lecture"> | string
    period?: IntWithAggregatesFilter<"Lecture"> | number
    memo?: StringNullableWithAggregatesFilter<"Lecture"> | string | null
    assignment?: StringNullableWithAggregatesFilter<"Lecture"> | string | null
    assignmentDeadline?: StringNullableWithAggregatesFilter<"Lecture"> | string | null
    attended?: BoolWithAggregatesFilter<"Lecture"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Lecture"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    status?: StringFilter<"Company"> | string
    nextDeadline?: StringNullableFilter<"Company"> | string | null
    memo?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    esEntries?: ESEntryListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    nextDeadline?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    esEntries?: ESEntryOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    status?: StringFilter<"Company"> | string
    nextDeadline?: StringNullableFilter<"Company"> | string | null
    memo?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    esEntries?: ESEntryListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    nextDeadline?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    status?: StringWithAggregatesFilter<"Company"> | string
    nextDeadline?: StringNullableWithAggregatesFilter<"Company"> | string | null
    memo?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type ESEntryWhereInput = {
    AND?: ESEntryWhereInput | ESEntryWhereInput[]
    OR?: ESEntryWhereInput[]
    NOT?: ESEntryWhereInput | ESEntryWhereInput[]
    id?: StringFilter<"ESEntry"> | string
    companyId?: StringFilter<"ESEntry"> | string
    createdAt?: DateTimeFilter<"ESEntry"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    questions?: ESQuestionListRelationFilter
  }

  export type ESEntryOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    questions?: ESQuestionOrderByRelationAggregateInput
  }

  export type ESEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ESEntryWhereInput | ESEntryWhereInput[]
    OR?: ESEntryWhereInput[]
    NOT?: ESEntryWhereInput | ESEntryWhereInput[]
    companyId?: StringFilter<"ESEntry"> | string
    createdAt?: DateTimeFilter<"ESEntry"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    questions?: ESQuestionListRelationFilter
  }, "id">

  export type ESEntryOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    _count?: ESEntryCountOrderByAggregateInput
    _max?: ESEntryMaxOrderByAggregateInput
    _min?: ESEntryMinOrderByAggregateInput
  }

  export type ESEntryScalarWhereWithAggregatesInput = {
    AND?: ESEntryScalarWhereWithAggregatesInput | ESEntryScalarWhereWithAggregatesInput[]
    OR?: ESEntryScalarWhereWithAggregatesInput[]
    NOT?: ESEntryScalarWhereWithAggregatesInput | ESEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ESEntry"> | string
    companyId?: StringWithAggregatesFilter<"ESEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ESEntry"> | Date | string
  }

  export type ESQuestionWhereInput = {
    AND?: ESQuestionWhereInput | ESQuestionWhereInput[]
    OR?: ESQuestionWhereInput[]
    NOT?: ESQuestionWhereInput | ESQuestionWhereInput[]
    id?: StringFilter<"ESQuestion"> | string
    entryId?: StringFilter<"ESQuestion"> | string
    title?: StringFilter<"ESQuestion"> | string
    answer?: StringFilter<"ESQuestion"> | string
    maxLength?: IntNullableFilter<"ESQuestion"> | number | null
    createdAt?: DateTimeFilter<"ESQuestion"> | Date | string
    entry?: XOR<ESEntryScalarRelationFilter, ESEntryWhereInput>
  }

  export type ESQuestionOrderByWithRelationInput = {
    id?: SortOrder
    entryId?: SortOrder
    title?: SortOrder
    answer?: SortOrder
    maxLength?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    entry?: ESEntryOrderByWithRelationInput
  }

  export type ESQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ESQuestionWhereInput | ESQuestionWhereInput[]
    OR?: ESQuestionWhereInput[]
    NOT?: ESQuestionWhereInput | ESQuestionWhereInput[]
    entryId?: StringFilter<"ESQuestion"> | string
    title?: StringFilter<"ESQuestion"> | string
    answer?: StringFilter<"ESQuestion"> | string
    maxLength?: IntNullableFilter<"ESQuestion"> | number | null
    createdAt?: DateTimeFilter<"ESQuestion"> | Date | string
    entry?: XOR<ESEntryScalarRelationFilter, ESEntryWhereInput>
  }, "id">

  export type ESQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    entryId?: SortOrder
    title?: SortOrder
    answer?: SortOrder
    maxLength?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ESQuestionCountOrderByAggregateInput
    _avg?: ESQuestionAvgOrderByAggregateInput
    _max?: ESQuestionMaxOrderByAggregateInput
    _min?: ESQuestionMinOrderByAggregateInput
    _sum?: ESQuestionSumOrderByAggregateInput
  }

  export type ESQuestionScalarWhereWithAggregatesInput = {
    AND?: ESQuestionScalarWhereWithAggregatesInput | ESQuestionScalarWhereWithAggregatesInput[]
    OR?: ESQuestionScalarWhereWithAggregatesInput[]
    NOT?: ESQuestionScalarWhereWithAggregatesInput | ESQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ESQuestion"> | string
    entryId?: StringWithAggregatesFilter<"ESQuestion"> | string
    title?: StringWithAggregatesFilter<"ESQuestion"> | string
    answer?: StringWithAggregatesFilter<"ESQuestion"> | string
    maxLength?: IntNullableWithAggregatesFilter<"ESQuestion"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ESQuestion"> | Date | string
  }

  export type CalendarEventCreateInput = {
    id?: string
    title: string
    date: string
    category: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CalendarEventUncheckedCreateInput = {
    id?: string
    title: string
    date: string
    category: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CalendarEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventCreateManyInput = {
    id?: string
    title: string
    date: string
    category: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CalendarEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureCreateInput = {
    id?: string
    name: string
    dayOfWeek: string
    period: number
    memo?: string | null
    assignment?: string | null
    assignmentDeadline?: string | null
    attended?: boolean
    createdAt?: Date | string
  }

  export type LectureUncheckedCreateInput = {
    id?: string
    name: string
    dayOfWeek: string
    period: number
    memo?: string | null
    assignment?: string | null
    assignmentDeadline?: string | null
    attended?: boolean
    createdAt?: Date | string
  }

  export type LectureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    assignment?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    assignment?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureCreateManyInput = {
    id?: string
    name: string
    dayOfWeek: string
    period: number
    memo?: string | null
    assignment?: string | null
    assignmentDeadline?: string | null
    attended?: boolean
    createdAt?: Date | string
  }

  export type LectureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    assignment?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    assignment?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    status?: string
    nextDeadline?: string | null
    memo?: string | null
    createdAt?: Date | string
    esEntries?: ESEntryCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    status?: string
    nextDeadline?: string | null
    memo?: string | null
    createdAt?: Date | string
    esEntries?: ESEntryUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    nextDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    esEntries?: ESEntryUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    nextDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    esEntries?: ESEntryUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    status?: string
    nextDeadline?: string | null
    memo?: string | null
    createdAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    nextDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    nextDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ESEntryCreateInput = {
    id?: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutEsEntriesInput
    questions?: ESQuestionCreateNestedManyWithoutEntryInput
  }

  export type ESEntryUncheckedCreateInput = {
    id?: string
    companyId: string
    createdAt?: Date | string
    questions?: ESQuestionUncheckedCreateNestedManyWithoutEntryInput
  }

  export type ESEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEsEntriesNestedInput
    questions?: ESQuestionUpdateManyWithoutEntryNestedInput
  }

  export type ESEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: ESQuestionUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type ESEntryCreateManyInput = {
    id?: string
    companyId: string
    createdAt?: Date | string
  }

  export type ESEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ESEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ESQuestionCreateInput = {
    id?: string
    title: string
    answer?: string
    maxLength?: number | null
    createdAt?: Date | string
    entry: ESEntryCreateNestedOneWithoutQuestionsInput
  }

  export type ESQuestionUncheckedCreateInput = {
    id?: string
    entryId: string
    title: string
    answer?: string
    maxLength?: number | null
    createdAt?: Date | string
  }

  export type ESQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: ESEntryUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type ESQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ESQuestionCreateManyInput = {
    id?: string
    entryId: string
    title: string
    answer?: string
    maxLength?: number | null
    createdAt?: Date | string
  }

  export type ESQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ESQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CalendarEventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CalendarEventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CalendarEventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LectureCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dayOfWeek?: SortOrder
    period?: SortOrder
    memo?: SortOrder
    assignment?: SortOrder
    assignmentDeadline?: SortOrder
    attended?: SortOrder
    createdAt?: SortOrder
  }

  export type LectureAvgOrderByAggregateInput = {
    period?: SortOrder
  }

  export type LectureMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dayOfWeek?: SortOrder
    period?: SortOrder
    memo?: SortOrder
    assignment?: SortOrder
    assignmentDeadline?: SortOrder
    attended?: SortOrder
    createdAt?: SortOrder
  }

  export type LectureMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dayOfWeek?: SortOrder
    period?: SortOrder
    memo?: SortOrder
    assignment?: SortOrder
    assignmentDeadline?: SortOrder
    attended?: SortOrder
    createdAt?: SortOrder
  }

  export type LectureSumOrderByAggregateInput = {
    period?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ESEntryListRelationFilter = {
    every?: ESEntryWhereInput
    some?: ESEntryWhereInput
    none?: ESEntryWhereInput
  }

  export type ESEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    nextDeadline?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    nextDeadline?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    nextDeadline?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type ESQuestionListRelationFilter = {
    every?: ESQuestionWhereInput
    some?: ESQuestionWhereInput
    none?: ESQuestionWhereInput
  }

  export type ESQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ESEntryCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
  }

  export type ESEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
  }

  export type ESEntryMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ESEntryScalarRelationFilter = {
    is?: ESEntryWhereInput
    isNot?: ESEntryWhereInput
  }

  export type ESQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    entryId?: SortOrder
    title?: SortOrder
    answer?: SortOrder
    maxLength?: SortOrder
    createdAt?: SortOrder
  }

  export type ESQuestionAvgOrderByAggregateInput = {
    maxLength?: SortOrder
  }

  export type ESQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    entryId?: SortOrder
    title?: SortOrder
    answer?: SortOrder
    maxLength?: SortOrder
    createdAt?: SortOrder
  }

  export type ESQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    entryId?: SortOrder
    title?: SortOrder
    answer?: SortOrder
    maxLength?: SortOrder
    createdAt?: SortOrder
  }

  export type ESQuestionSumOrderByAggregateInput = {
    maxLength?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ESEntryCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ESEntryCreateWithoutCompanyInput, ESEntryUncheckedCreateWithoutCompanyInput> | ESEntryCreateWithoutCompanyInput[] | ESEntryUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ESEntryCreateOrConnectWithoutCompanyInput | ESEntryCreateOrConnectWithoutCompanyInput[]
    createMany?: ESEntryCreateManyCompanyInputEnvelope
    connect?: ESEntryWhereUniqueInput | ESEntryWhereUniqueInput[]
  }

  export type ESEntryUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ESEntryCreateWithoutCompanyInput, ESEntryUncheckedCreateWithoutCompanyInput> | ESEntryCreateWithoutCompanyInput[] | ESEntryUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ESEntryCreateOrConnectWithoutCompanyInput | ESEntryCreateOrConnectWithoutCompanyInput[]
    createMany?: ESEntryCreateManyCompanyInputEnvelope
    connect?: ESEntryWhereUniqueInput | ESEntryWhereUniqueInput[]
  }

  export type ESEntryUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ESEntryCreateWithoutCompanyInput, ESEntryUncheckedCreateWithoutCompanyInput> | ESEntryCreateWithoutCompanyInput[] | ESEntryUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ESEntryCreateOrConnectWithoutCompanyInput | ESEntryCreateOrConnectWithoutCompanyInput[]
    upsert?: ESEntryUpsertWithWhereUniqueWithoutCompanyInput | ESEntryUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ESEntryCreateManyCompanyInputEnvelope
    set?: ESEntryWhereUniqueInput | ESEntryWhereUniqueInput[]
    disconnect?: ESEntryWhereUniqueInput | ESEntryWhereUniqueInput[]
    delete?: ESEntryWhereUniqueInput | ESEntryWhereUniqueInput[]
    connect?: ESEntryWhereUniqueInput | ESEntryWhereUniqueInput[]
    update?: ESEntryUpdateWithWhereUniqueWithoutCompanyInput | ESEntryUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ESEntryUpdateManyWithWhereWithoutCompanyInput | ESEntryUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ESEntryScalarWhereInput | ESEntryScalarWhereInput[]
  }

  export type ESEntryUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ESEntryCreateWithoutCompanyInput, ESEntryUncheckedCreateWithoutCompanyInput> | ESEntryCreateWithoutCompanyInput[] | ESEntryUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ESEntryCreateOrConnectWithoutCompanyInput | ESEntryCreateOrConnectWithoutCompanyInput[]
    upsert?: ESEntryUpsertWithWhereUniqueWithoutCompanyInput | ESEntryUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ESEntryCreateManyCompanyInputEnvelope
    set?: ESEntryWhereUniqueInput | ESEntryWhereUniqueInput[]
    disconnect?: ESEntryWhereUniqueInput | ESEntryWhereUniqueInput[]
    delete?: ESEntryWhereUniqueInput | ESEntryWhereUniqueInput[]
    connect?: ESEntryWhereUniqueInput | ESEntryWhereUniqueInput[]
    update?: ESEntryUpdateWithWhereUniqueWithoutCompanyInput | ESEntryUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ESEntryUpdateManyWithWhereWithoutCompanyInput | ESEntryUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ESEntryScalarWhereInput | ESEntryScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutEsEntriesInput = {
    create?: XOR<CompanyCreateWithoutEsEntriesInput, CompanyUncheckedCreateWithoutEsEntriesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEsEntriesInput
    connect?: CompanyWhereUniqueInput
  }

  export type ESQuestionCreateNestedManyWithoutEntryInput = {
    create?: XOR<ESQuestionCreateWithoutEntryInput, ESQuestionUncheckedCreateWithoutEntryInput> | ESQuestionCreateWithoutEntryInput[] | ESQuestionUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: ESQuestionCreateOrConnectWithoutEntryInput | ESQuestionCreateOrConnectWithoutEntryInput[]
    createMany?: ESQuestionCreateManyEntryInputEnvelope
    connect?: ESQuestionWhereUniqueInput | ESQuestionWhereUniqueInput[]
  }

  export type ESQuestionUncheckedCreateNestedManyWithoutEntryInput = {
    create?: XOR<ESQuestionCreateWithoutEntryInput, ESQuestionUncheckedCreateWithoutEntryInput> | ESQuestionCreateWithoutEntryInput[] | ESQuestionUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: ESQuestionCreateOrConnectWithoutEntryInput | ESQuestionCreateOrConnectWithoutEntryInput[]
    createMany?: ESQuestionCreateManyEntryInputEnvelope
    connect?: ESQuestionWhereUniqueInput | ESQuestionWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutEsEntriesNestedInput = {
    create?: XOR<CompanyCreateWithoutEsEntriesInput, CompanyUncheckedCreateWithoutEsEntriesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEsEntriesInput
    upsert?: CompanyUpsertWithoutEsEntriesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutEsEntriesInput, CompanyUpdateWithoutEsEntriesInput>, CompanyUncheckedUpdateWithoutEsEntriesInput>
  }

  export type ESQuestionUpdateManyWithoutEntryNestedInput = {
    create?: XOR<ESQuestionCreateWithoutEntryInput, ESQuestionUncheckedCreateWithoutEntryInput> | ESQuestionCreateWithoutEntryInput[] | ESQuestionUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: ESQuestionCreateOrConnectWithoutEntryInput | ESQuestionCreateOrConnectWithoutEntryInput[]
    upsert?: ESQuestionUpsertWithWhereUniqueWithoutEntryInput | ESQuestionUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: ESQuestionCreateManyEntryInputEnvelope
    set?: ESQuestionWhereUniqueInput | ESQuestionWhereUniqueInput[]
    disconnect?: ESQuestionWhereUniqueInput | ESQuestionWhereUniqueInput[]
    delete?: ESQuestionWhereUniqueInput | ESQuestionWhereUniqueInput[]
    connect?: ESQuestionWhereUniqueInput | ESQuestionWhereUniqueInput[]
    update?: ESQuestionUpdateWithWhereUniqueWithoutEntryInput | ESQuestionUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: ESQuestionUpdateManyWithWhereWithoutEntryInput | ESQuestionUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: ESQuestionScalarWhereInput | ESQuestionScalarWhereInput[]
  }

  export type ESQuestionUncheckedUpdateManyWithoutEntryNestedInput = {
    create?: XOR<ESQuestionCreateWithoutEntryInput, ESQuestionUncheckedCreateWithoutEntryInput> | ESQuestionCreateWithoutEntryInput[] | ESQuestionUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: ESQuestionCreateOrConnectWithoutEntryInput | ESQuestionCreateOrConnectWithoutEntryInput[]
    upsert?: ESQuestionUpsertWithWhereUniqueWithoutEntryInput | ESQuestionUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: ESQuestionCreateManyEntryInputEnvelope
    set?: ESQuestionWhereUniqueInput | ESQuestionWhereUniqueInput[]
    disconnect?: ESQuestionWhereUniqueInput | ESQuestionWhereUniqueInput[]
    delete?: ESQuestionWhereUniqueInput | ESQuestionWhereUniqueInput[]
    connect?: ESQuestionWhereUniqueInput | ESQuestionWhereUniqueInput[]
    update?: ESQuestionUpdateWithWhereUniqueWithoutEntryInput | ESQuestionUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: ESQuestionUpdateManyWithWhereWithoutEntryInput | ESQuestionUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: ESQuestionScalarWhereInput | ESQuestionScalarWhereInput[]
  }

  export type ESEntryCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ESEntryCreateWithoutQuestionsInput, ESEntryUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ESEntryCreateOrConnectWithoutQuestionsInput
    connect?: ESEntryWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ESEntryUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ESEntryCreateWithoutQuestionsInput, ESEntryUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ESEntryCreateOrConnectWithoutQuestionsInput
    upsert?: ESEntryUpsertWithoutQuestionsInput
    connect?: ESEntryWhereUniqueInput
    update?: XOR<XOR<ESEntryUpdateToOneWithWhereWithoutQuestionsInput, ESEntryUpdateWithoutQuestionsInput>, ESEntryUncheckedUpdateWithoutQuestionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ESEntryCreateWithoutCompanyInput = {
    id?: string
    createdAt?: Date | string
    questions?: ESQuestionCreateNestedManyWithoutEntryInput
  }

  export type ESEntryUncheckedCreateWithoutCompanyInput = {
    id?: string
    createdAt?: Date | string
    questions?: ESQuestionUncheckedCreateNestedManyWithoutEntryInput
  }

  export type ESEntryCreateOrConnectWithoutCompanyInput = {
    where: ESEntryWhereUniqueInput
    create: XOR<ESEntryCreateWithoutCompanyInput, ESEntryUncheckedCreateWithoutCompanyInput>
  }

  export type ESEntryCreateManyCompanyInputEnvelope = {
    data: ESEntryCreateManyCompanyInput | ESEntryCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ESEntryUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ESEntryWhereUniqueInput
    update: XOR<ESEntryUpdateWithoutCompanyInput, ESEntryUncheckedUpdateWithoutCompanyInput>
    create: XOR<ESEntryCreateWithoutCompanyInput, ESEntryUncheckedCreateWithoutCompanyInput>
  }

  export type ESEntryUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ESEntryWhereUniqueInput
    data: XOR<ESEntryUpdateWithoutCompanyInput, ESEntryUncheckedUpdateWithoutCompanyInput>
  }

  export type ESEntryUpdateManyWithWhereWithoutCompanyInput = {
    where: ESEntryScalarWhereInput
    data: XOR<ESEntryUpdateManyMutationInput, ESEntryUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ESEntryScalarWhereInput = {
    AND?: ESEntryScalarWhereInput | ESEntryScalarWhereInput[]
    OR?: ESEntryScalarWhereInput[]
    NOT?: ESEntryScalarWhereInput | ESEntryScalarWhereInput[]
    id?: StringFilter<"ESEntry"> | string
    companyId?: StringFilter<"ESEntry"> | string
    createdAt?: DateTimeFilter<"ESEntry"> | Date | string
  }

  export type CompanyCreateWithoutEsEntriesInput = {
    id?: string
    name: string
    status?: string
    nextDeadline?: string | null
    memo?: string | null
    createdAt?: Date | string
  }

  export type CompanyUncheckedCreateWithoutEsEntriesInput = {
    id?: string
    name: string
    status?: string
    nextDeadline?: string | null
    memo?: string | null
    createdAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutEsEntriesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutEsEntriesInput, CompanyUncheckedCreateWithoutEsEntriesInput>
  }

  export type ESQuestionCreateWithoutEntryInput = {
    id?: string
    title: string
    answer?: string
    maxLength?: number | null
    createdAt?: Date | string
  }

  export type ESQuestionUncheckedCreateWithoutEntryInput = {
    id?: string
    title: string
    answer?: string
    maxLength?: number | null
    createdAt?: Date | string
  }

  export type ESQuestionCreateOrConnectWithoutEntryInput = {
    where: ESQuestionWhereUniqueInput
    create: XOR<ESQuestionCreateWithoutEntryInput, ESQuestionUncheckedCreateWithoutEntryInput>
  }

  export type ESQuestionCreateManyEntryInputEnvelope = {
    data: ESQuestionCreateManyEntryInput | ESQuestionCreateManyEntryInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutEsEntriesInput = {
    update: XOR<CompanyUpdateWithoutEsEntriesInput, CompanyUncheckedUpdateWithoutEsEntriesInput>
    create: XOR<CompanyCreateWithoutEsEntriesInput, CompanyUncheckedCreateWithoutEsEntriesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutEsEntriesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutEsEntriesInput, CompanyUncheckedUpdateWithoutEsEntriesInput>
  }

  export type CompanyUpdateWithoutEsEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    nextDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateWithoutEsEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    nextDeadline?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ESQuestionUpsertWithWhereUniqueWithoutEntryInput = {
    where: ESQuestionWhereUniqueInput
    update: XOR<ESQuestionUpdateWithoutEntryInput, ESQuestionUncheckedUpdateWithoutEntryInput>
    create: XOR<ESQuestionCreateWithoutEntryInput, ESQuestionUncheckedCreateWithoutEntryInput>
  }

  export type ESQuestionUpdateWithWhereUniqueWithoutEntryInput = {
    where: ESQuestionWhereUniqueInput
    data: XOR<ESQuestionUpdateWithoutEntryInput, ESQuestionUncheckedUpdateWithoutEntryInput>
  }

  export type ESQuestionUpdateManyWithWhereWithoutEntryInput = {
    where: ESQuestionScalarWhereInput
    data: XOR<ESQuestionUpdateManyMutationInput, ESQuestionUncheckedUpdateManyWithoutEntryInput>
  }

  export type ESQuestionScalarWhereInput = {
    AND?: ESQuestionScalarWhereInput | ESQuestionScalarWhereInput[]
    OR?: ESQuestionScalarWhereInput[]
    NOT?: ESQuestionScalarWhereInput | ESQuestionScalarWhereInput[]
    id?: StringFilter<"ESQuestion"> | string
    entryId?: StringFilter<"ESQuestion"> | string
    title?: StringFilter<"ESQuestion"> | string
    answer?: StringFilter<"ESQuestion"> | string
    maxLength?: IntNullableFilter<"ESQuestion"> | number | null
    createdAt?: DateTimeFilter<"ESQuestion"> | Date | string
  }

  export type ESEntryCreateWithoutQuestionsInput = {
    id?: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutEsEntriesInput
  }

  export type ESEntryUncheckedCreateWithoutQuestionsInput = {
    id?: string
    companyId: string
    createdAt?: Date | string
  }

  export type ESEntryCreateOrConnectWithoutQuestionsInput = {
    where: ESEntryWhereUniqueInput
    create: XOR<ESEntryCreateWithoutQuestionsInput, ESEntryUncheckedCreateWithoutQuestionsInput>
  }

  export type ESEntryUpsertWithoutQuestionsInput = {
    update: XOR<ESEntryUpdateWithoutQuestionsInput, ESEntryUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ESEntryCreateWithoutQuestionsInput, ESEntryUncheckedCreateWithoutQuestionsInput>
    where?: ESEntryWhereInput
  }

  export type ESEntryUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ESEntryWhereInput
    data: XOR<ESEntryUpdateWithoutQuestionsInput, ESEntryUncheckedUpdateWithoutQuestionsInput>
  }

  export type ESEntryUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEsEntriesNestedInput
  }

  export type ESEntryUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ESEntryCreateManyCompanyInput = {
    id?: string
    createdAt?: Date | string
  }

  export type ESEntryUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: ESQuestionUpdateManyWithoutEntryNestedInput
  }

  export type ESEntryUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: ESQuestionUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type ESEntryUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ESQuestionCreateManyEntryInput = {
    id?: string
    title: string
    answer?: string
    maxLength?: number | null
    createdAt?: Date | string
  }

  export type ESQuestionUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ESQuestionUncheckedUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ESQuestionUncheckedUpdateManyWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}