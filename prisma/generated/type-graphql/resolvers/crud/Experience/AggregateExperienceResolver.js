"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateExperienceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateExperienceArgs_1 = require("./args/AggregateExperienceArgs");
const Experience_1 = require("../../../models/Experience");
const AggregateExperience_1 = require("../../outputs/AggregateExperience");
const helpers_1 = require("../../../helpers");
let AggregateExperienceResolver = class AggregateExperienceResolver {
    async aggregateExperience(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateExperience_1.AggregateExperience, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateExperienceArgs_1.AggregateExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateExperienceResolver.prototype, "aggregateExperience", null);
AggregateExperienceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Experience_1.Experience)
], AggregateExperienceResolver);
exports.AggregateExperienceResolver = AggregateExperienceResolver;
