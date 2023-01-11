"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPriceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstPriceArgs_1 = require("./args/FindFirstPriceArgs");
const Price_1 = require("../../../models/Price");
const helpers_1 = require("../../../helpers");
let FindFirstPriceResolver = class FindFirstPriceResolver {
    async findFirstPrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Price_1.Price, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPriceArgs_1.FindFirstPriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPriceResolver.prototype, "findFirstPrice", null);
FindFirstPriceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], FindFirstPriceResolver);
exports.FindFirstPriceResolver = FindFirstPriceResolver;
