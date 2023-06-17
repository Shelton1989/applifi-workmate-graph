"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductKeyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateProductKeyArgs_1 = require("./args/CreateProductKeyArgs");
const ProductKey_1 = require("../../../models/ProductKey");
const helpers_1 = require("../../../helpers");
let CreateProductKeyResolver = class CreateProductKeyResolver {
    async createProductKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ProductKey_1.ProductKey, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateProductKeyArgs_1.CreateProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateProductKeyResolver.prototype, "createProductKey", null);
CreateProductKeyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ProductKey_1.ProductKey)
], CreateProductKeyResolver);
exports.CreateProductKeyResolver = CreateProductKeyResolver;
