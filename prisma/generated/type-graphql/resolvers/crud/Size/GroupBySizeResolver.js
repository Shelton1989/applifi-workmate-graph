"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupBySizeArgs_1 = require("./args/GroupBySizeArgs");
const Size_1 = require("../../../models/Size");
const SizeGroupBy_1 = require("../../outputs/SizeGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySizeResolver = class GroupBySizeResolver {
    async groupBySize(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SizeGroupBy_1.SizeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySizeArgs_1.GroupBySizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySizeResolver.prototype, "groupBySize", null);
GroupBySizeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Size_1.Size)
], GroupBySizeResolver);
exports.GroupBySizeResolver = GroupBySizeResolver;
