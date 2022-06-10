"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstColorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstColorArgs_1 = require("./args/FindFirstColorArgs");
const Color_1 = require("../../../models/Color");
const helpers_1 = require("../../../helpers");
let FindFirstColorResolver = class FindFirstColorResolver {
    async findFirstColor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Color_1.Color, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstColorArgs_1.FindFirstColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstColorResolver.prototype, "findFirstColor", null);
FindFirstColorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Color_1.Color)
], FindFirstColorResolver);
exports.FindFirstColorResolver = FindFirstColorResolver;
