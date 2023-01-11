"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstExperienceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstExperienceArgs_1 = require("./args/FindFirstExperienceArgs");
const Experience_1 = require("../../../models/Experience");
const helpers_1 = require("../../../helpers");
let FindFirstExperienceResolver = class FindFirstExperienceResolver {
    async findFirstExperience(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Experience_1.Experience, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstExperienceArgs_1.FindFirstExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstExperienceResolver.prototype, "findFirstExperience", null);
FindFirstExperienceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Experience_1.Experience)
], FindFirstExperienceResolver);
exports.FindFirstExperienceResolver = FindFirstExperienceResolver;
