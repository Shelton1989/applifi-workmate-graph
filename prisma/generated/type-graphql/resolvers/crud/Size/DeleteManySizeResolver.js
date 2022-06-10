"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManySizeArgs_1 = require("./args/DeleteManySizeArgs");
const Size_1 = require("../../../models/Size");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManySizeResolver = class DeleteManySizeResolver {
    async deleteManySize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySizeArgs_1.DeleteManySizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManySizeResolver.prototype, "deleteManySize", null);
DeleteManySizeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Size_1.Size)
], DeleteManySizeResolver);
exports.DeleteManySizeResolver = DeleteManySizeResolver;
